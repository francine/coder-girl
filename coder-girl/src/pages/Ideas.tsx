import React, { useState } from 'react';
import { 
  Space, 
  Button, 
  Table, 
  Typography, 
  Tag, 
  Modal, 
  Form, 
  Input, 
  Select,
  Popconfirm,
  message,
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  BulbOutlined,
} from '@ant-design/icons';
import { useApp, Idea } from '../contexts/AppContext';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const statusOptions = [
  { value: 'draft', label: 'Rascunho', color: 'orange' },
  { value: 'review', label: 'Em Revisão', color: 'blue' },
  { value: 'ready', label: 'Pronto', color: 'green' },
  { value: 'published', label: 'Publicado', color: 'purple' },
];

function Ideas() {
  const { state, dispatch, actionTypes } = useApp();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingIdea, setEditingIdea] = useState<Idea | null>(null);
  const [form] = Form.useForm();

  const handleAddIdea = () => {
    setEditingIdea(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditIdea = (idea: Idea) => {
    setEditingIdea(idea);
    form.setFieldsValue(idea);
    setIsModalVisible(true);
  };

  const handleDeleteIdea = (id: string) => {
    dispatch({ type: actionTypes.DELETE_IDEA, payload: id });
    message.success('Ideia removida com sucesso!');
  };

  const handleFormSubmit = (values: any) => {
    const ideaData = {
      ...values,
      id: editingIdea?.id || Date.now().toString(),
      createdAt: editingIdea?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (editingIdea) {
      dispatch({ type: actionTypes.UPDATE_IDEA, payload: ideaData });
      message.success('Ideia atualizada com sucesso!');
    } else {
      dispatch({ type: actionTypes.ADD_IDEA, payload: ideaData });
      message.success('Nova ideia adicionada!');
    }

    setIsModalVisible(false);
    form.resetFields();
    setEditingIdea(null);
  };

  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <strong>{text}</strong>,
    },
    {
      title: 'Conteúdo',
      dataIndex: 'content',
      key: 'content',
      render: (text: string) => text?.substring(0, 100) + (text?.length > 100 ? '...' : ''),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusConfig = statusOptions.find(opt => opt.value === status);
        return <Tag color={statusConfig?.color}>{statusConfig?.label}</Tag>;
      },
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: string[]) => (
        <Space>
          {tags?.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </Space>
      ),
    },
    {
      title: 'Criado em',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => new Date(date).toLocaleDateString('pt-BR'),
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (_: any, record: Idea) => (
        <Space>
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            onClick={() => handleEditIdea(record)}
          />
          <Popconfirm
            title="Tem certeza que deseja remover esta ideia?"
            onConfirm={() => handleDeleteIdea(record.id)}
            okText="Sim"
            cancelText="Não"
          >
            <Button 
              type="text" 
              danger
              icon={<DeleteOutlined />} 
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Title level={2}>
              <BulbOutlined /> Gerenciar Ideias
            </Title>
            <Typography.Text type="secondary">
              Crie e organize suas ideias para posts do LinkedIn
            </Typography.Text>
          </div>
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={handleAddIdea}
          >
            Nova Ideia
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={state.ideas}
          rowKey="id"
          pagination={{ pageSize: 10 }}
          locale={{ emptyText: 'Nenhuma ideia cadastrada ainda' }}
        />
      </Space>

      <Modal
        title={editingIdea ? 'Editar Ideia' : 'Nova Ideia'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="title"
            label="Título"
            rules={[{ required: true, message: 'Digite o título da ideia' }]}
          >
            <Input placeholder="Ex: Como usar IA para aumentar produtividade" />
          </Form.Item>

          <Form.Item
            name="content"
            label="Conteúdo"
            rules={[{ required: true, message: 'Digite o conteúdo da ideia' }]}
          >
            <TextArea 
              rows={6}
              placeholder="Desenvolva sua ideia aqui..."
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Selecione um status' }]}
            initialValue="draft"
          >
            <Select>
              {statusOptions.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="tags"
            label="Tags"
          >
            <Select
              mode="tags"
              placeholder="Adicione tags (pressione Enter para criar)"
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={() => setIsModalVisible(false)}>
                Cancelar
              </Button>
              <Button type="primary" htmlType="submit">
                {editingIdea ? 'Atualizar' : 'Salvar'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Ideas;