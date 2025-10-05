import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { AppProvider, useApp } from '../contexts/AppContext';

// Mock antd message
jest.mock('antd', () => ({
  ...jest.requireActual('antd'),
  message: {
    success: jest.fn(),
    error: jest.fn(),
    warning: jest.fn(),
  },
}));

// Test component for Context testing
function TestContextComponent() {
  const { state, dispatch, actionTypes } = useApp();
  
  const addIdea = () => {
    const newIdea = {
      id: Date.now().toString(),
      title: 'Test Idea',
      content: 'Test content for idea',
      status: 'draft',
      tags: ['test', 'demo'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dispatch({ type: actionTypes.ADD_IDEA, payload: newIdea });
  };

  const updateIdea = () => {
    if (state.ideas.length > 0) {
      const updatedIdea = {
        ...state.ideas[0],
        status: 'published',
        updatedAt: new Date().toISOString(),
      };
      dispatch({ type: actionTypes.UPDATE_IDEA, payload: updatedIdea });
    }
  };

  const deleteIdea = () => {
    if (state.ideas.length > 0) {
      dispatch({ type: actionTypes.DELETE_IDEA, payload: state.ideas[0].id });
    }
  };

  return (
    <div>
      <div data-testid="total-ideas">{state.ideas.length}</div>
      <div data-testid="total-metrics">{state.metrics.totalIdeas}</div>
      <div data-testid="drafts-count">{state.metrics.drafts}</div>
      <div data-testid="published-count">{state.metrics.published}</div>
      <button onClick={addIdea} data-testid="add-btn">Add Idea</button>
      <button onClick={updateIdea} data-testid="update-btn">Update First</button>
      <button onClick={deleteIdea} data-testid="delete-btn">Delete First</button>
      {state.ideas.map(idea => (
        <div key={idea.id} data-testid={`idea-${idea.id}`}>
          {idea.title} - {idea.status}
        </div>
      ))}
    </div>
  );
}

describe('LinkedIn Post Manager - Core Functionality', () => {
  // CONTRACT TEST: deve inicializar aplicação com estado vazio
  test('should initialize application with empty state', () => {
    render(
      <AppProvider>
        <TestContextComponent />
      </AppProvider>
    );

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('0');
    expect(screen.getByTestId('total-metrics')).toHaveTextContent('0');
    expect(screen.getByTestId('drafts-count')).toHaveTextContent('0');
    expect(screen.getByTestId('published-count')).toHaveTextContent('0');
  });

  // CONTRACT TEST: deve criar nova ideia e atualizar métricas automaticamente
  test('should create new idea and update metrics automatically', () => {
    render(
      <AppProvider>
        <TestContextComponent />
      </AppProvider>
    );

    const addButton = screen.getByTestId('add-btn');
    
    act(() => {
      fireEvent.click(addButton);
    });

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('1');
    expect(screen.getByTestId('total-metrics')).toHaveTextContent('1');
    expect(screen.getByTestId('drafts-count')).toHaveTextContent('1');
    expect(screen.getByText('Test Idea - draft')).toBeInTheDocument();
  });

  // CONTRACT TEST: deve atualizar status da ideia e recalcular métricas
  test('should update idea status and recalculate metrics', () => {
    render(
      <AppProvider>
        <TestContextComponent />
      </AppProvider>
    );

    const addButton = screen.getByTestId('add-btn');
    const updateButton = screen.getByTestId('update-btn');
    
    // Add idea first
    act(() => {
      fireEvent.click(addButton);
    });

    expect(screen.getByTestId('drafts-count')).toHaveTextContent('1');
    expect(screen.getByTestId('published-count')).toHaveTextContent('0');

    // Update status to published
    act(() => {
      fireEvent.click(updateButton);
    });

    expect(screen.getByTestId('drafts-count')).toHaveTextContent('0');
    expect(screen.getByTestId('published-count')).toHaveTextContent('1');
    expect(screen.getByText('Test Idea - published')).toBeInTheDocument();
  });

  // CONTRACT TEST: deve deletar ideia e atualizar métricas
  test('should delete idea and update metrics', () => {
    render(
      <AppProvider>
        <TestContextComponent />
      </AppProvider>
    );

    const addButton = screen.getByTestId('add-btn');
    const deleteButton = screen.getByTestId('delete-btn');
    
    // Add idea first
    act(() => {
      fireEvent.click(addButton);
    });

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('1');

    // Delete idea
    act(() => {
      fireEvent.click(deleteButton);
    });

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('0');
    expect(screen.getByTestId('total-metrics')).toHaveTextContent('0');
    expect(screen.getByTestId('drafts-count')).toHaveTextContent('0');
  });

  // CONTRACT TEST: deve manter múltiplas ideias com diferentes status
  test('should maintain multiple ideas with different statuses', () => {
    render(
      <AppProvider>
        <TestContextComponent />
      </AppProvider>
    );

    const addButton = screen.getByTestId('add-btn');
    
    // Add 3 ideas
    act(() => {
      fireEvent.click(addButton);
      fireEvent.click(addButton);
      fireEvent.click(addButton);
    });

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('3');
    expect(screen.getByTestId('total-metrics')).toHaveTextContent('3');
    expect(screen.getByTestId('drafts-count')).toHaveTextContent('3');
  });
});