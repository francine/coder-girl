import { useCallback } from 'react';
import Papa from 'papaparse';
import { message } from 'antd';

export function useCSV() {
  const exportToCSV = useCallback((data, filename = 'linkedin-post-manager-data.csv') => {
    try {
      const csvData = data.map(idea => ({
        id: idea.id,
        title: idea.title,
        content: idea.content,
        status: idea.status,
        tags: idea.tags ? idea.tags.join(';') : '',
        createdAt: idea.createdAt,
        updatedAt: idea.updatedAt,
      }));

      const csv = Papa.unparse(csvData, {
        header: true,
        encoding: 'UTF-8',
      });

      // Add BOM for UTF-8 encoding
      const csvWithBOM = '\uFEFF' + csv;
      
      const blob = new Blob([csvWithBOM], { 
        type: 'text/csv;charset=utf-8;' 
      });
      
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      
      message.success('Dados exportados com sucesso!');
    } catch (error) {
      console.error('Erro ao exportar CSV:', error);
      message.error('Erro ao exportar dados para CSV');
    }
  }, []);

  const importFromCSV = useCallback((file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        encoding: 'UTF-8',
        skipEmptyLines: true,
        complete: (results) => {
          try {
            if (results.errors && results.errors.length > 0) {
              console.warn('CSV parsing warnings:', results.errors);
            }

            const validatedData = results.data.map((row, index) => {
              // Validate required fields
              if (!row.title || !row.content) {
                throw new Error(`Linha ${index + 1}: Título e conteúdo são obrigatórios`);
              }

              // Validate status
              const validStatuses = ['draft', 'review', 'ready', 'published'];
              if (!validStatuses.includes(row.status)) {
                row.status = 'draft'; // Default to draft if invalid
              }

              return {
                id: row.id || Date.now().toString() + Math.random().toString(36),
                title: row.title.trim(),
                content: row.content.trim(),
                status: row.status,
                tags: row.tags ? row.tags.split(';').filter(tag => tag.trim()) : [],
                createdAt: row.createdAt || new Date().toISOString(),
                updatedAt: row.updatedAt || new Date().toISOString(),
              };
            });

            resolve(validatedData);
            message.success(`${validatedData.length} ideias importadas com sucesso!`);
          } catch (error) {
            reject(error);
          }
        },
        error: (error) => {
          reject(new Error('Erro ao processar arquivo CSV: ' + error.message));
        }
      });
    });
  }, []);

  const validateCSVStructure = useCallback((file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        preview: 1, // Only parse first row to check structure
        complete: (results) => {
          const headers = results.meta.fields || [];
          const requiredHeaders = ['title', 'content'];
          const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
          
          if (missingHeaders.length > 0) {
            reject(new Error(`Colunas obrigatórias não encontradas: ${missingHeaders.join(', ')}`));
          } else {
            resolve(true);
          }
        },
        error: (error) => {
          reject(new Error('Arquivo CSV inválido: ' + error.message));
        }
      });
    });
  }, []);

  return {
    exportToCSV,
    importFromCSV,
    validateCSVStructure,
  };
}