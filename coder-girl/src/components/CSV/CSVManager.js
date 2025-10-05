import React, { useState } from 'react';
import { 
  Space, 
  Button, 
  Upload, 
  Modal, 
  Typography, 
  Alert,
  Divider,
  message,
  Card,
} from 'antd';
import { 
  DownloadOutlined, 
  UploadOutlined, 
  InboxOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { useApp } from '../../contexts/AppContext';
import { useCSV } from '../../hooks/useCSV';

const { Title, Text, Paragraph } = Typography;
const { Dragger } = Upload;

function CSVManager({ onClose }) {
  const { state, dispatch, actionTypes } = useApp();
  const { exportToCSV, importFromCSV, validateCSVStructure } = useCSV();
  const [importing, setImporting] = useState(false);
  const [importFile, setImportFile] = useState(null);

  const handleExport = () => {
    if (state.ideas.length === 0) {
      message.warning('Não há ideias para exportar');
      return;
    }
    
    const filename = `linkedin-posts-${new Date().toISOString().split('T')[0]}.csv`;
    exportToCSV(state.ideas, filename);
  };

  const handleFileSelect = async (file) => {
    try {
      await validateCSVStructure(file);
      setImportFile(file);
      return false; // Prevent automatic upload
    } catch (error) {
      message.error(error.message);
      return false;
    }
  };

  const handleImport = async () => {
    if (!importFile) {
      message.error('Selecione um arquivo CSV primeiro');
      return;
    }

    setImporting(true);
    try {
      const importedData = await importFromCSV(importFile);
      
      // Update state with imported data
      dispatch({ type: actionTypes.SET_IDEAS, payload: importedData });
      
      setImportFile(null);
      onClose();
    } catch (error) {
      message.error(error.message);
    } finally {
      setImporting(false);
    }
  };

  const uploadProps = {
    name: 'file',
    multiple: false,
    accept: '.csv',
    beforeUpload: handleFileSelect,
    onRemove: () => setImportFile(null),
    fileList: importFile ? [importFile] : [],
  };

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div>
          <Title level={3}>
            <FileTextOutlined /> Gerenciar Dados CSV
          </Title>
          <Text type="secondary">
            Exporte suas ideias ou importe dados de um arquivo CSV
          </Text>
        </div>

        <Card title="Exportar Dados" style={{ marginBottom: 16 }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Paragraph type="secondary">
              Baixe todas as suas ideias em formato CSV para backup ou edição externa.
            </Paragraph>
            <div>
              <Button 
                type="primary"
                icon={<DownloadOutlined />}
                onClick={handleExport}
                disabled={state.ideas.length === 0}
              >
                Exportar {state.ideas.length} ideias
              </Button>
            </div>
          </Space>
        </Card>

        <Card title="Importar Dados">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert
              message="Atenção"
              description="A importação irá substituir todas as ideias existentes. Faça um backup antes de continuar."
              type="warning"
              showIcon
            />
            
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Clique ou arraste o arquivo CSV aqui
              </p>
              <p className="ant-upload-hint">
                Apenas arquivos CSV com as colunas: title, content, status, tags
              </p>
            </Dragger>

            {importFile && (
              <div>
                <Divider />
                <Space>
                  <Button 
                    type="primary"
                    icon={<UploadOutlined />}
                    loading={importing}
                    onClick={handleImport}
                  >
                    Importar Dados
                  </Button>
                  <Button onClick={() => setImportFile(null)}>
                    Cancelar
                  </Button>
                </Space>
              </div>
            )}
          </Space>
        </Card>

        <Card title="Formato do CSV" type="inner">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text strong>Colunas obrigatórias:</Text>
            <ul style={{ marginLeft: 16 }}>
              <li><Text code>title</Text> - Título da ideia</li>
              <li><Text code>content</Text> - Conteúdo da ideia</li>
            </ul>
            
            <Text strong>Colunas opcionais:</Text>
            <ul style={{ marginLeft: 16 }}>
              <li><Text code>status</Text> - draft, review, ready, published</li>
              <li><Text code>tags</Text> - Tags separadas por ponto e vírgula (;)</li>
              <li><Text code>createdAt</Text> - Data de criação (ISO format)</li>
              <li><Text code>updatedAt</Text> - Data de atualização (ISO format)</li>
            </ul>
          </Space>
        </Card>
      </Space>
    </div>
  );
}

export default CSVManager;