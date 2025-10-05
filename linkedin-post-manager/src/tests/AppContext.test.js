import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AppProvider, useApp } from '../contexts/AppContext';

// Test component to use the context
function TestComponent() {
  const { state, dispatch, actionTypes } = useApp();
  
  const addTestIdea = () => {
    const testIdea = {
      id: '1',
      title: 'Test Idea',
      content: 'Test content',
      status: 'draft',
      tags: ['test'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dispatch({ type: actionTypes.ADD_IDEA, payload: testIdea });
  };

  return (
    <div>
      <span data-testid="total-ideas">{state.ideas.length}</span>
      <span data-testid="drafts-count">{state.metrics.drafts}</span>
      <span data-testid="total-metrics">{state.metrics.totalIdeas}</span>
      <button onClick={addTestIdea} data-testid="add-idea">Add Idea</button>
    </div>
  );
}

describe('AppContext', () => {
  // CONTRACT TEST: deve inicializar com estado vazio
  test('should initialize with empty state', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('0');
    expect(screen.getByTestId('drafts-count')).toHaveTextContent('0');
    expect(screen.getByTestId('total-metrics')).toHaveTextContent('0');
  });

  // CONTRACT TEST: deve adicionar nova ideia e atualizar métricas
  test('should add new idea and update metrics', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    const addButton = screen.getByTestId('add-idea');
    
    act(() => {
      addButton.click();
    });

    expect(screen.getByTestId('total-ideas')).toHaveTextContent('1');
    expect(screen.getByTestId('drafts-count')).toHaveTextContent('1');
    expect(screen.getByTestId('total-metrics')).toHaveTextContent('1');
  });

  // CONTRACT TEST: deve calcular métricas automaticamente quando ideias mudam
  test('should calculate metrics automatically when ideas change', () => {
    const TestMetricsComponent = () => {
      const { state, dispatch, actionTypes } = useApp();
      
      const addIdeasWithDifferentStatuses = () => {
        const ideas = [
          { id: '1', title: 'Draft', content: 'Content', status: 'draft', tags: [], createdAt: new Date().toISOString() },
          { id: '2', title: 'Review', content: 'Content', status: 'review', tags: [], createdAt: new Date().toISOString() },
          { id: '3', title: 'Ready', content: 'Content', status: 'ready', tags: [], createdAt: new Date().toISOString() },
          { id: '4', title: 'Published', content: 'Content', status: 'published', tags: [], createdAt: new Date().toISOString() },
        ];
        
        ideas.forEach(idea => {
          dispatch({ type: actionTypes.ADD_IDEA, payload: idea });
        });
      };

      return (
        <div>
          <span data-testid="drafts">{state.metrics.drafts}</span>
          <span data-testid="review">{state.metrics.inReview}</span>
          <span data-testid="ready">{state.metrics.ready}</span>
          <span data-testid="published">{state.metrics.published}</span>
          <button onClick={addIdeasWithDifferentStatuses} data-testid="add-mixed">Add Mixed</button>
        </div>
      );
    };

    render(
      <AppProvider>
        <TestMetricsComponent />
      </AppProvider>
    );

    const addButton = screen.getByTestId('add-mixed');
    
    act(() => {
      addButton.click();
    });

    expect(screen.getByTestId('drafts')).toHaveTextContent('1');
    expect(screen.getByTestId('review')).toHaveTextContent('1');
    expect(screen.getByTestId('ready')).toHaveTextContent('1');
    expect(screen.getByTestId('published')).toHaveTextContent('1');
  });
});