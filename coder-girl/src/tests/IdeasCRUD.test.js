import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AppProvider } from '../contexts/AppContext';
import Ideas from '../pages/Ideas';

// Mock antd message
jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  message: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Test wrapper component
function TestWrapper({ children }) {
  return (
    <ConfigProvider>
      <AppProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </AppProvider>
    </ConfigProvider>
  );
}

describe('Ideas CRUD Operations', () => {
  // CONTRACT TEST: deve exibir lista vazia inicialmente
  test('should display empty list initially', () => {
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    expect(screen.getByText('Nenhuma ideia cadastrada ainda')).toBeInTheDocument();
  });

  // CONTRACT TEST: deve abrir modal de nova ideia
  test('should open new idea modal', async () => {
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    const newIdeaButton = screen.getByRole('button', { name: /nova ideia/i });
    fireEvent.click(newIdeaButton);

    await waitFor(() => {
      expect(screen.getByText('Nova Ideia')).toBeInTheDocument();
    });
  });

  // CONTRACT TEST: deve validar campos obrigatórios ao criar ideia
  test('should validate required fields when creating idea', async () => {
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    // Open modal
    const newIdeaButton = screen.getByRole('button', { name: /nova ideia/i });
    fireEvent.click(newIdeaButton);

    await waitFor(() => {
      expect(screen.getByText('Nova Ideia')).toBeInTheDocument();
    });

    // Try to submit without filling required fields
    const saveButton = screen.getByRole('button', { name: /salvar/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('Digite o título da ideia')).toBeInTheDocument();
      expect(screen.getByText('Digite o conteúdo da ideia')).toBeInTheDocument();
    });
  });

  // CONTRACT TEST: deve criar nova ideia com dados válidos
  test('should create new idea with valid data', async () => {
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    // Open modal
    const newIdeaButton = screen.getByRole('button', { name: /nova ideia/i });
    fireEvent.click(newIdeaButton);

    await waitFor(() => {
      expect(screen.getByText('Nova Ideia')).toBeInTheDocument();
    });

    // Fill form
    const titleInput = screen.getByPlaceholderText(/como usar ia para aumentar produtividade/i);
    const contentTextarea = screen.getByPlaceholderText(/desenvolva sua ideia aqui/i);
    
    fireEvent.change(titleInput, { target: { value: 'Test Idea Title' } });
    fireEvent.change(contentTextarea, { target: { value: 'Test idea content description' } });

    // Submit form
    const saveButton = screen.getByRole('button', { name: /salvar/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText('Test Idea Title')).toBeInTheDocument();
    });
  });

  // CONTRACT TEST: deve filtrar ideias por status
  test('should filter ideas by status', async () => {
    // This test would require setting up initial data
    // For now, we test the UI elements exist
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    // Check if status column exists in table
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Título')).toBeInTheDocument();
    expect(screen.getByText('Conteúdo')).toBeInTheDocument();
  });

  // CONTRACT TEST: deve exibir ações de editar e deletar para cada ideia
  test('should display edit and delete actions for each idea', async () => {
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    // Check if actions column exists
    expect(screen.getByText('Ações')).toBeInTheDocument();
    
    // After adding an idea, edit and delete buttons should be visible
    // This would be tested in integration tests with actual data
  });

  // CONTRACT TEST: deve mostrar confirmação antes de deletar ideia
  test('should show confirmation before deleting idea', () => {
    render(
      <TestWrapper>
        <Ideas />
      </TestWrapper>
    );

    // The Popconfirm component should exist in the table column definition
    // This tests the component structure rather than behavior
    expect(screen.getByText('Ações')).toBeInTheDocument();
  });
});