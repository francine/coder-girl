import React, { useMemo } from 'react';
import { Row, Col, Card, Statistic, Typography, Space } from 'antd';
import { Column, Pie } from '@ant-design/charts';
import {
  BulbOutlined,
  EditOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  CalendarOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { useApp } from '../contexts/AppContext';

const { Title } = Typography;

function Dashboard() {
  const { state } = useApp();
  const { metrics } = state;

  const statsCards = [
    {
      title: 'Total de Ideias',
      value: metrics.totalIdeas,
      icon: <BulbOutlined style={{ color: '#1890ff' }} />,
      color: '#1890ff',
    },
    {
      title: 'Rascunhos',
      value: metrics.drafts,
      icon: <EditOutlined style={{ color: '#faad14' }} />,
      color: '#faad14',
    },
    {
      title: 'Em Revisão',
      value: metrics.inReview,
      icon: <CheckCircleOutlined style={{ color: '#722ed1' }} />,
      color: '#722ed1',
    },
    {
      title: 'Prontos',
      value: metrics.ready,
      icon: <RocketOutlined style={{ color: '#52c41a' }} />,
      color: '#52c41a',
    },
    {
      title: 'Esta Semana',
      value: metrics.thisWeek,
      icon: <CalendarOutlined style={{ color: '#13c2c2' }} />,
      color: '#13c2c2',
    },
    {
      title: 'Publicados',
      value: metrics.published,
      icon: <TrophyOutlined style={{ color: '#eb2f96' }} />,
      color: '#eb2f96',
    },
  ];

  // Data for pipeline status chart
  const pipelineData = useMemo(() => [
    { status: 'Rascunhos', count: metrics.drafts, color: '#faad14' },
    { status: 'Em Revisão', count: metrics.inReview, color: '#722ed1' },
    { status: 'Prontos', count: metrics.ready, color: '#52c41a' },
    { status: 'Publicados', count: metrics.published, color: '#eb2f96' },
  ], [metrics]);

  // Data for activity over time (last 7 days)
  const activityData = useMemo(() => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayIdeas = state.ideas.filter(idea => {
        const ideaDate = new Date(idea.createdAt);
        return ideaDate.toDateString() === date.toDateString();
      });
      
      days.push({
        day: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
        ideas: dayIdeas.length,
      });
    }
    return days;
  }, [state.ideas]);

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={2}>Dashboard</Title>
          <Typography.Text type="secondary">
            Acompanhe o desempenho da sua criação de conteúdo para LinkedIn
          </Typography.Text>
        </div>

        <Row gutter={[16, 16]}>
          {statsCards.map((stat, index) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
              <Card 
                hoverable
                style={{ 
                  borderLeft: `4px solid ${stat.color}`,
                  borderRadius: '8px',
                }}
              >
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.icon}
                  valueStyle={{ color: stat.color }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}>
            <Card title="Atividade dos Últimos 7 Dias" style={{ height: '350px' }}>
              <Column
                data={activityData}
                xField="day"
                yField="ideas"
                color="#1890ff"
                columnStyle={{
                  radius: [2, 2, 0, 0],
                }}
                meta={{
                  ideas: {
                    alias: 'Ideias Criadas',
                  },
                }}
                height={250}
              />
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card title="Distribuição por Status" style={{ height: '350px' }}>
              <Pie
                data={pipelineData.filter(item => item.count > 0)}
                angleField="count"
                colorField="status"
                radius={0.8}
                innerRadius={0.4}
                color={({ status }) => {
                  const item = pipelineData.find(d => d.status === status);
                  return item?.color || '#1890ff';
                }}
                label={{
                  type: 'inner',
                  offset: '-30%',
                  content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                  style: {
                    fontSize: 14,
                    textAlign: 'center',
                  },
                }}
                legend={{
                  position: 'bottom',
                }}
                height={250}
                statistic={{
                  title: false,
                  content: {
                    style: {
                      whiteSpace: 'pre-wrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    },
                    content: `Total\n${metrics.totalIdeas}`,
                  },
                }}
              />
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default Dashboard;