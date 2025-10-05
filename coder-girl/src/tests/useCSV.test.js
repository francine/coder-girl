import { renderHook, act } from '@testing-library/react';
import { useCSV } from '../hooks/useCSV';

// Mock Papa.parse and other dependencies
jest.mock('papaparse', () => ({
  unparse: jest.fn((data) => 'mocked,csv,data'),
  parse: jest.fn(),
}));

// Mock Ant Design message
jest.mock('antd', () => ({
  message: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => 'mocked-url');
global.URL.revokeObjectURL = jest.fn();

// Mock document methods for download
Object.defineProperty(document, 'createElement', {
  value: jest.fn(() => ({
    setAttribute: jest.fn(),
    click: jest.fn(),
    style: {},
  })),
});

Object.defineProperty(document.body, 'appendChild', {
  value: jest.fn(),
});

Object.defineProperty(document.body, 'removeChild', {
  value: jest.fn(),
});

describe('useCSV Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // CONTRACT TEST: deve exportar dados para CSV com estrutura correta
  test('should export data to CSV with correct structure', () => {
    const { result } = renderHook(() => useCSV());
    const testData = [
      {
        id: '1',
        title: 'Test Idea',
        content: 'Test content',
        status: 'draft',
        tags: ['tag1', 'tag2'],
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
      },
    ];

    act(() => {
      result.current.exportToCSV(testData, 'test.csv');
    });

    const Papa = require('papaparse');
    expect(Papa.unparse).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          id: '1',
          title: 'Test Idea',
          content: 'Test content',
          status: 'draft',
          tags: 'tag1;tag2',
          createdAt: '2023-01-01T00:00:00.000Z',
          updatedAt: '2023-01-01T00:00:00.000Z',
        }),
      ]),
      expect.objectContaining({
        header: true,
        encoding: 'UTF-8',
      })
    );
  });

  // CONTRACT TEST: deve validar estrutura do CSV antes da importação
  test('should validate CSV structure before import', async () => {
    const { result } = renderHook(() => useCSV());
    const Papa = require('papaparse');
    
    // Mock successful validation
    Papa.parse.mockImplementation((file, options) => {
      options.complete({
        meta: { fields: ['title', 'content', 'status'] },
      });
    });

    const mockFile = new File(['test'], 'test.csv', { type: 'text/csv' });

    await act(async () => {
      const isValid = await result.current.validateCSVStructure(mockFile);
      expect(isValid).toBe(true);
    });
  });

  // CONTRACT TEST: deve rejeitar CSV com colunas obrigatórias ausentes
  test('should reject CSV with missing required columns', async () => {
    const { result } = renderHook(() => useCSV());
    const Papa = require('papaparse');
    
    // Mock missing required headers
    Papa.parse.mockImplementation((file, options) => {
      options.complete({
        meta: { fields: ['title'] }, // Missing 'content'
      });
    });

    const mockFile = new File(['test'], 'test.csv', { type: 'text/csv' });

    await act(async () => {
      try {
        await result.current.validateCSVStructure(mockFile);
      } catch (error) {
        expect(error.message).toContain('content');
      }
    });
  });

  // CONTRACT TEST: deve importar e validar dados do CSV
  test('should import and validate CSV data', async () => {
    const { result } = renderHook(() => useCSV());
    const Papa = require('papaparse');
    
    const mockCsvData = [
      {
        title: 'Test Idea',
        content: 'Test content',
        status: 'draft',
        tags: 'tag1;tag2',
      },
    ];

    Papa.parse.mockImplementation((file, options) => {
      options.complete({
        data: mockCsvData,
        errors: [],
      });
    });

    const mockFile = new File(['test'], 'test.csv', { type: 'text/csv' });

    await act(async () => {
      const result_data = await result.current.importFromCSV(mockFile);
      
      expect(result_data).toHaveLength(1);
      expect(result_data[0]).toMatchObject({
        title: 'Test Idea',
        content: 'Test content',
        status: 'draft',
        tags: ['tag1', 'tag2'],
      });
      expect(result_data[0]).toHaveProperty('id');
      expect(result_data[0]).toHaveProperty('createdAt');
    });
  });

  // CONTRACT TEST: deve aplicar status padrão para valores inválidos
  test('should apply default status for invalid values', async () => {
    const { result } = renderHook(() => useCSV());
    const Papa = require('papaparse');
    
    const mockCsvData = [
      {
        title: 'Test Idea',
        content: 'Test content',
        status: 'invalid-status', // Invalid status
        tags: '',
      },
    ];

    Papa.parse.mockImplementation((file, options) => {
      options.complete({
        data: mockCsvData,
        errors: [],
      });
    });

    const mockFile = new File(['test'], 'test.csv', { type: 'text/csv' });

    await act(async () => {
      const result_data = await result.current.importFromCSV(mockFile);
      
      expect(result_data[0].status).toBe('draft'); // Should default to 'draft'
    });
  });
});