import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface Idea {
  id: string;
  title: string;
  content: string;
  status: 'draft' | 'review' | 'ready' | 'published';
  createdAt: string;
  updatedAt: string;
  tags: string[];
  priority: 'low' | 'medium' | 'high';
}

interface Metrics {
  totalIdeas: number;
  drafts: number;
  inReview: number;
  ready: number;
  published: number;
  thisWeek: number;
  thisMonth: number;
}

interface AppState {
  ideas: Idea[];
  loading: boolean;
  error: string | null;
  metrics: Metrics;
}

interface AppAction {
  type: string;
  payload?: any;
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  actionTypes: typeof actionTypes;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: AppState = {
  ideas: [],
  loading: false,
  error: null,
  metrics: {
    totalIdeas: 0,
    drafts: 0,
    inReview: 0,
    ready: 0,
    published: 0,
    thisWeek: 0,
    thisMonth: 0,
  },
};

const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_IDEAS: 'SET_IDEAS',
  ADD_IDEA: 'ADD_IDEA',
  UPDATE_IDEA: 'UPDATE_IDEA',
  DELETE_IDEA: 'DELETE_IDEA',
  UPDATE_METRICS: 'UPDATE_METRICS',
} as const;

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    
    case actionTypes.SET_IDEAS:
      return { ...state, ideas: action.payload, loading: false };
    
    case actionTypes.ADD_IDEA:
      return { ...state, ideas: [...state.ideas, action.payload] };
    
    case actionTypes.UPDATE_IDEA:
      return {
        ...state,
        ideas: state.ideas.map(idea =>
          idea.id === action.payload.id ? action.payload : idea
        ),
      };
    
    case actionTypes.DELETE_IDEA:
      return {
        ...state,
        ideas: state.ideas.filter(idea => idea.id !== action.payload),
      };
    
    case actionTypes.UPDATE_METRICS:
      return { ...state, metrics: action.payload };
    
    default:
      return state;
  }
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Calculate metrics whenever ideas change
  useEffect(() => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const metrics: Metrics = {
      totalIdeas: state.ideas.length,
      drafts: state.ideas.filter(idea => idea.status === 'draft').length,
      inReview: state.ideas.filter(idea => idea.status === 'review').length,
      ready: state.ideas.filter(idea => idea.status === 'ready').length,
      published: state.ideas.filter(idea => idea.status === 'published').length,
      thisWeek: state.ideas.filter(idea => new Date(idea.createdAt) >= weekAgo).length,
      thisMonth: state.ideas.filter(idea => new Date(idea.createdAt) >= monthAgo).length,
    };

    dispatch({ type: actionTypes.UPDATE_METRICS, payload: metrics });
  }, [state.ideas]);

  const value: AppContextType = {
    state,
    dispatch,
    actionTypes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export type { Idea, Metrics, AppState, AppAction };