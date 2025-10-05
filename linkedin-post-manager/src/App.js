import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import { AppProvider } from './contexts/AppContext';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Ideas from './pages/Ideas';
import Pipeline from './pages/Pipeline';
import './App.css';

const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme} locale={ptBR}>
      <AppProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/pipeline" element={<Pipeline />} />
            </Routes>
          </MainLayout>
        </Router>
      </AppProvider>
    </ConfigProvider>
  );
}

export default App;