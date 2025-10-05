import React, { useState } from 'react';
import { Layout, Menu, Typography, Avatar, Space, Button, Modal } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  BulbOutlined,
  ScheduleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LinkedinOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import CSVManager from '../CSV/CSVManager';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: '/',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/ideas',
    icon: <BulbOutlined />,
    label: 'Ideias',
  },
  {
    key: '/pipeline',
    icon: <ScheduleOutlined />,
    label: 'Pipeline',
  },
];

function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [csvModalVisible, setCsvModalVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        style={{
          background: '#fff',
          boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)',
        }}
      >
        <div style={{ 
          padding: '16px', 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderBottom: '1px solid #f0f0f0',
        }}>
          <LinkedinOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          {!collapsed && (
            <Title level={4} style={{ margin: '0 0 0 8px', color: '#1890ff' }}>
              PostManager
            </Title>
          )}
        </div>
        
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ 
            border: 'none',
            marginTop: '16px',
          }}
        />
      </Sider>
      
      <Layout>
        <Header style={{ 
          padding: '0 24px', 
          background: '#fff',
          boxShadow: '0 2px 8px rgba(29,35,41,.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
              style: { fontSize: '18px', cursor: 'pointer' },
            })}
            
            <Title level={3} style={{ margin: '0 0 0 16px' }}>
              {menuItems.find(item => item.key === location.pathname)?.label || 'Dashboard'}
            </Title>
          </div>
          
          <Space>
            <Button 
              type="text"
              icon={<FileTextOutlined />}
              onClick={() => setCsvModalVisible(true)}
            >
              CSV
            </Button>
            <Avatar style={{ backgroundColor: '#1890ff' }}>
              U
            </Avatar>
          </Space>
        </Header>
        
        <Content style={{ 
          margin: '24px',
          padding: '24px',
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        }}>
          {children}
        </Content>
      </Layout>
      
      <Modal
        title="Gerenciar Dados CSV"
        open={csvModalVisible}
        onCancel={() => setCsvModalVisible(false)}
        footer={null}
        width={800}
      >
        <CSVManager onClose={() => setCsvModalVisible(false)} />
      </Modal>
    </Layout>
  );
}

export default MainLayout;