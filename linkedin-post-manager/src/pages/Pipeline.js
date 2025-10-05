import React from 'react';
import { Row, Col, Card, Typography, Tag, Empty, Space } from 'antd';
import { 
  EditOutlined, 
  EyeOutlined, 
  CheckCircleOutlined, 
  RocketOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import { useApp } from '../contexts/AppContext';

const { Title, Text } = Typography;

const pipelineColumns = [
  {
    key: 'draft',
    title: 'Rascunhos',
    icon: <EditOutlined />,
    color: '#faad14',
  },
  {
    key: 'review',
    title: 'Em Revisão',
    icon: <EyeOutlined />,
    color: '#722ed1',
  },
  {
    key: 'ready',
    title: 'Prontos',
    icon: <CheckCircleOutlined />,
    color: '#52c41a',
  },
  {
    key: 'published',
    title: 'Publicados',
    icon: <RocketOutlined />,
    color: '#eb2f96',
  },
];

function Pipeline() {
  const { state, dispatch, actionTypes } = useApp();

  const getIdeasByStatus = (status) => {
    return state.ideas.filter(idea => idea.status === status);
  };

  const handleDragStart = (e, idea) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(idea));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const ideaData = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    if (ideaData.status !== newStatus) {
      const updatedIdea = {
        ...ideaData,
        status: newStatus,
        updatedAt: new Date().toISOString(),
      };
      
      dispatch({ type: actionTypes.UPDATE_IDEA, payload: updatedIdea });
    }
  };

  const IdeaCard = ({ idea }) => (
    <Card
      size="small"
      style={{ 
        marginBottom: 8, 
        cursor: 'grab',
        border: '1px solid #d9d9d9',
      }}
      bodyStyle={{ padding: '12px' }}
      draggable
      onDragStart={(e) => handleDragStart(e, idea)}
    >
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Text strong style={{ fontSize: '14px' }}>
          {idea.title}
        </Text>
        
        <Text type="secondary" style={{ fontSize: '12px' }}>
          {idea.content?.substring(0, 80)}
          {idea.content?.length > 80 ? '...' : ''}
        </Text>
        
        {idea.tags && idea.tags.length > 0 && (
          <div>
            {idea.tags.slice(0, 2).map(tag => (
              <Tag key={tag} size="small" style={{ fontSize: '10px' }}>
                {tag}
              </Tag>
            ))}
            {idea.tags.length > 2 && (
              <Tag size="small" style={{ fontSize: '10px' }}>
                +{idea.tags.length - 2}
              </Tag>
            )}
          </div>
        )}
        
        <Text type="secondary" style={{ fontSize: '11px' }}>
          {new Date(idea.createdAt).toLocaleDateString('pt-BR')}
        </Text>
      </Space>
    </Card>
  );

  const ColumnContent = ({ column }) => {
    const ideas = getIdeasByStatus(column.key);
    
    return (
      <div
        style={{ 
          minHeight: '400px',
          padding: '16px',
          backgroundColor: '#fafafa',
          borderRadius: '8px',
        }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, column.key)}
      >
        {ideas.length > 0 ? (
          ideas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} />
          ))
        ) : (
          <Empty 
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <Text type="secondary" style={{ fontSize: '12px' }}>
                Arraste ideias aqui
              </Text>
            }
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={2}>
            <ScheduleOutlined /> Pipeline de Produção
          </Title>
          <Typography.Text type="secondary">
            Gerencie o fluxo das suas ideias através do pipeline de criação
          </Typography.Text>
        </div>

        <Row gutter={[16, 16]}>
          {pipelineColumns.map(column => (
            <Col xs={24} sm={12} lg={6} key={column.key}>
              <Card
                title={
                  <Space>
                    <span style={{ color: column.color }}>
                      {column.icon}
                    </span>
                    <span>{column.title}</span>
                    <Tag 
                      color={column.color}
                      style={{ marginLeft: 'auto' }}
                    >
                      {getIdeasByStatus(column.key).length}
                    </Tag>
                  </Space>
                }
                headStyle={{ 
                  borderBottom: `2px solid ${column.color}`,
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
                bodyStyle={{ padding: 0 }}
              >
                <ColumnContent column={column} />
              </Card>
            </Col>
          ))}
        </Row>

        <Card 
          title="Como usar o Pipeline"
          style={{ backgroundColor: '#f6ffed', border: '1px solid #b7eb8f' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Space direction="vertical" size="small">
                <Text strong style={{ color: '#faad14' }}>
                  <EditOutlined /> Rascunhos
                </Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Ideias iniciais e conceitos em desenvolvimento
                </Text>
              </Space>
            </Col>
            
            <Col xs={24} sm={12} md={6}>
              <Space direction="vertical" size="small">
                <Text strong style={{ color: '#722ed1' }}>
                  <EyeOutlined /> Em Revisão
                </Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Conteúdo escrito aguardando revisão e melhorias
                </Text>
              </Space>
            </Col>
            
            <Col xs={24} sm={12} md={6}>
              <Space direction="vertical" size="small">
                <Text strong style={{ color: '#52c41a' }}>
                  <CheckCircleOutlined /> Prontos
                </Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Posts finalizados e prontos para publicação
                </Text>
              </Space>
            </Col>
            
            <Col xs={24} sm={12} md={6}>
              <Space direction="vertical" size="small">
                <Text strong style={{ color: '#eb2f96' }}>
                  <RocketOutlined /> Publicados
                </Text>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  Conteúdo já publicado no LinkedIn
                </Text>
              </Space>
            </Col>
          </Row>
        </Card>
      </Space>
    </div>
  );
}

export default Pipeline;