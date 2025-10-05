# PRP — Prompt de Requisitos de Produto

## Declaração do Problema

- **Objetivo em uma linha:** Desenvolver um aplicativo web pessoal para gerenciar ideias e pipeline de criação de posts diários para LinkedIn usando React + Ant Design com persistência em CSV.

- **Escopo:**
  - Interface para anotação e gestão de ideias de posts
  - Sistema de TO-DO list para pipeline de criação  
  - Dashboard de acompanhamento de desempenho
  - Persistência de dados em arquivo CSV editável
  - Interface responsiva sem autenticação

- **Restrições:**
  - Uso pessoal (sem sistema de login)
  - Base de dados limitada a arquivo CSV
  - Tecnologias: React + Ant Design (sem Tailwind)
  - Interface web apenas

- **Premissas:**
  - Usuário único operando localmente
  - Posts são publicados diariamente no LinkedIn
  - CSV será editado através da interface web
  - Necessidade de acompanhar métricas de desempenho

- **Critérios de sucesso:**
  - Interface intuitiva para gestão de ideias
  - TO-DO list funcional para pipeline
  - Dashboard com métricas relevantes
  - Persistência estável em CSV
  - Responsividade adequada

- **Entregáveis:**
  - Aplicação React com Ant Design
  - Componente de gestão de ideias
  - Sistema de TO-DO list
  - Dashboard de métricas
  - Funcionalidade de leitura/escrita CSV

## Artefatos e Convenções do Projeto

| Caminho | Tipo | Relevância | Notas |
|---------|------|------------|-------|
| `.claude/settings.local.json` | Configuração | Alta | Permissões do Claude Code configuradas para desenvolvimento web completo |
| `.claude/commands/PRPs/gerar-prp.md` | Comando | Alta | Template metodológico para geração de PRPs em português |
| `.claude/commands/PRPs/executar-prp.md` | Comando | Alta | Comando para execução/implementação de PRPs |
| `.claude/commands/git-commit.md` | Comando | Média | Padronização de commits segundo convenções |
| `PRPs/metodologia/template-prp.md` | Template | Alta | Estrutura padrão para documentação de requisitos |
| `PRPs/PROMPT.md` | Requisitos | Alta | Especificação do aplicativo de gestão de posts LinkedIn |
| `README.md` | Documentação | Média | Metodologia PRP e fluxo de desenvolvimento |

## Exemplos Aplicáveis

A pasta `PRPs/examples/` está vazia (contém apenas `.gitkeep`), indicando que este é um projeto template sem exemplos específicos ainda catalogados.

## Fontes Externas

| Título | URL | Publicador | Principal aprendizado | Aplicabilidade |
|--------|-----|------------|-----------------------|----------------|
| React Ant Design Best Practices 2024 | ant.design | Ant Design | Ant Design v5 com componentes modulares para dashboards | Estrutura base da aplicação |
| Working with CSV files with react-papaparse | blog.logrocket.com | LogRocket | react-papaparse oferece CSVReader/CSVDownloader | Persistência em CSV |
| React TODO List Component Patterns | react.dev + medium.com | React.dev/Medium | State management local vs global, Context API | Sistema TO-DO |
| Personal Productivity Dashboard Design | uxpin.com + medium.com | UXPin/Medium | Personalização, hierarquia de métricas, componentes interativos | Dashboard de desempenho |

## Plano Passo a Passo

1. **Setup e Configuração Base**
   - Propósito: Criar estrutura React com Ant Design v5 e react-papaparse
   - Entradas: Prompt de requisitos
   - Saída: Projeto React configurado com dependências
   - Verificação: `npm start` executa sem erros

2. **Layout Principal e Navegação**
   - Propósito: Implementar estrutura de layout com Ant Design Layout
   - Entradas: Requisitos de navegação (dashboard, ideias, TO-DO)
   - Saída: Layout responsivo com Sider, Header e Content
   - Verificação: Navegação funcional entre seções

3. **Componente de Gestão de Ideias**
   - Propósito: CRUD para ideias de posts com formulário Ant Design
   - Entradas: Dados de ideias (título, conteúdo, tags, data)
   - Saída: Interface para criar, editar, visualizar e deletar ideias
   - Verificação: Operações CRUD funcionais com feedback visual

4. **Sistema TO-DO de Pipeline**
   - Propósito: Gerenciar status das ideias no pipeline de criação
   - Entradas: Ideias criadas
   - Saída: Lista arrastável com estados (rascunho, revisão, pronto, publicado)
   - Verificação: Transições de estado persistem corretamente

5. **Dashboard de Métricas**
   - Propósito: Visualizar desempenho e estatísticas usando Charts Ant Design
   - Entradas: Dados históricos de posts
   - Saída: Cards com métricas, gráficos de progresso e tendências
   - Verificação: Métricas atualizadas refletem dados reais

6. **Integração CSV com react-papaparse**
   - Propósito: Persistir dados em arquivo CSV editável
   - Entradas: Estado da aplicação (ideias, TO-DOs, métricas)
   - Saída: Funcionalidades de exportar/importar CSV
   - Verificação: Dados persistem entre sessões via CSV

7. **Responsividade e UX**
   - Propósito: Garantir experiência mobile adequada
   - Entradas: Layout desktop implementado
   - Saída: Interface adaptativa com breakpoints Ant Design
   - Verificação: Funcionalidade completa em dispositivos móveis

8. **Validação e Testes de Aceitação**
   - Propósito: Verificar todos os requisitos funcionais
   - Entradas: Aplicação completa
   - Saída: Cenários de teste validados
   - Verificação: Todos os critérios de sucesso atendidos

## Requisitos

**Funcionais:**
- RF001: Criar, editar, visualizar e excluir ideias de posts
- RF002: Organizar ideias em pipeline TO-DO com estados (rascunho, revisão, pronto, publicado)
- RF003: Arrastar e soltar ideias entre estados do pipeline
- RF004: Visualizar dashboard com métricas de desempenho
- RF005: Exportar dados para arquivo CSV
- RF006: Importar dados de arquivo CSV
- RF007: Navegação entre seções (Dashboard, Ideias, TO-DO)
- RF008: Filtrar e buscar ideias por título, conteúdo ou tags

**Não funcionais:**
- RNF001: Interface responsiva para desktop e mobile
- RNF002: Tempo de carregamento < 2 segundos
- RNF003: Compatibilidade com navegadores modernos (Chrome, Firefox, Safari, Edge)
- RNF004: Persistência local via CSV editável externamente
- RNF005: Feedback visual para todas as ações do usuário
- RNF006: Design consistente seguindo Ant Design guidelines

## Notas de Implementação

**Arquitetura de Componentes:**
- Usar Context API para estado global (evitar Redux para aplicação simples)
- Functional components com React Hooks
- Separar lógica de negócio em custom hooks
- Componentização modular seguindo Single Responsibility Principle

**CSV Integration Gotchas:**
- Navegadores não permitem escrita direta de arquivos - usar react-papaparse CSVDownloader
- Importação via CSVReader com drag-and-drop
- Validar estrutura do CSV antes da importação
- Backup automático antes de sobrescrever dados

**Ant Design v5 Especificidades:**
- Usar novo sistema de tokens para customização
- ConfigProvider para temas globais
- Grid system responsivo: xs, sm, md, lg, xl, xxl
- Form.Item com regras de validação integradas

**Estado e Performance:**
- Memoização com React.memo para componentes de lista
- useCallback para funções passadas como props
- useMemo para cálculos custosos de métricas
- Virtualization para listas grandes (se necessário)

## Testes e Aceitação

**Casos de teste (entradas → saídas esperadas):**

1. **Gestão de Ideias:**
   - Criar nova ideia → Ideia aparece na lista
   - Editar ideia existente → Alterações persistem
   - Excluir ideia → Ideia removida da lista e TO-DO

2. **Pipeline TO-DO:**
   - Arrastar ideia entre estados → Estado atualizado
   - Filtrar por estado → Apenas ideias do estado selecionado exibidas
   - Marcar como publicado → Ideia move para histórico

3. **Dashboard:**
   - Navegar para dashboard → Métricas atualizadas exibidas
   - Adicionar nova ideia → Contador de ideias incrementa
   - Publicar post → Métricas de produtividade atualizadas

4. **CSV Integration:**
   - Exportar dados → Arquivo CSV baixado com estrutura correta
   - Importar CSV válido → Dados carregados na aplicação
   - Importar CSV inválido → Mensagem de erro exibida

**Critérios de aceitação:**
- Todas as operações CRUD funcionais
- Navegação fluida entre seções
- Responsividade em dispositivos mobile
- CSV exportado/importado mantém integridade dos dados
- Interface intuitiva sem necessidade de tutorial

**Comandos ou instruções reproduzíveis:**
```bash
# Setup
npm create react-app linkedin-post-manager
cd linkedin-post-manager
npm install antd react-papaparse react-router-dom

# Desenvolvimento
npm start

# Testes
npm test

# Build de produção
npm run build
```

## Riscos e Plano de Rollback

**Riscos:**
- Limitações do browser para manipulação de arquivos CSV
- Performance com grandes volumes de dados (>1000 ideias)
- Compatibilidade entre versões Ant Design v5 e react-papaparse
- Perda de dados por falha na exportação CSV

**Plano de rollback:**
- Implementar backup automático antes de operações críticas
- Fallback para localStorage se CSV falhar
- Validação de integridade antes de importar dados
- Versionamento de estrutura de dados para migração

## Referências

**1. Artefatos do projeto:**
- `.claude/settings.local.json` - Configurações de permissões
- `PRPs/metodologia/template-prp.md` - Template estrutural
- `README.md` - Metodologia PRP

**2. Exemplos:**
- Pasta `PRPs/examples/` vazia (projeto template)

**3. Fontes externas:**
- [Ant Design Official Docs](https://ant.design/) - Componentes e padrões
- [react-papaparse Documentation](https://react-papaparse.js.org/) - CSV handling
- [React.dev State Management](https://react.dev/learn/managing-state) - Padrões de estado
- [UXPin Dashboard Design](https://www.uxpin.com/studio/blog/dashboard-design-principles/) - Princípios de dashboard

## Checklist de Execução

- [x] Configurar projeto React com Create React App
- [x] Instalar dependências: antd, react-papaparse, react-router-dom
- [x] Criar estrutura de pastas: components, contexts, hooks, utils
- [x] Implementar Context API para estado global
- [x] Desenvolver componente Layout com Ant Design Layout
- [x] Implementar navegação com React Router
- [x] Criar componente IdeaManager com CRUD completo
- [x] Desenvolver TodoPipeline com drag-and-drop
- [x] Implementar Dashboard com métricas e gráficos
- [x] Integrar react-papaparse para exportação CSV
- [x] Implementar importação CSV com validação
- [x] Aplicar responsividade com Grid Ant Design
- [-] Implementar busca e filtros
- [x] Adicionar feedback visual para ações
- [x] Configurar temas e tokens Ant Design
- [x] Implementar tratamento de erros
- [?] Criar testes unitários para componentes principais
- [x] Testar responsividade em diferentes dispositivos
- [x] Validar fluxo completo de exportação/importação CSV
- [-] Otimizar performance com memoização
- [-] Documentar componentes principais
- [x] Build de produção e testes de integração

---
Nível de confiança: 4/5 — justificativa: Arquitetura bem definida com bibliotecas maduras, mas dependente de limitações do browser para CSV
(1–2 = insuficiente, 3 = parcial e arriscado, 4 = suficiente, 5 = inequívoco)