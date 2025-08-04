# README.md

## 📘 Visão Geral do Projeto

Este repositório implementa um sistema de documentação PRP (Product Requirements Prompts) que transforma especificações em linguagem natural em uma estrutura DFT (Domains-Features-Tasks). O objetivo é organizar conhecimento técnico e facilitar o desenvolvimento assistido por IA.

## 🧠 Arquitetura

O sistema aplica uma pipeline de Context Engineering em três níveis:

1. **Estrutura DFT (Domains → Features → Tasks)**:

   * **Domains/**: Padrões de conhecimento reutilizáveis e decisões arquiteturais
   * **Features/**: Especificações detalhadas com critérios de aceitação
   * **Tasks/**: Ações executáveis com rastreamento de severidade
   * **Examples/**: Referências visuais para UI (especialmente `Examples/UI/`)

2. **Montagem de Contexto**:

   * Arquivos interligados via frontmatter (`up`, `feature`, `dependencies`, `related`)
   * Contexto montado até profundidade 3
   * Ordem de montagem: dependencies → up → related → feature → target
   * As tasks incluem o contexto completo embutido para execução autônoma

## ⚙️ Comandos Principais

> Os comandos abaixo são conceituais e dependem de uma ferramenta externa para execução automatizada.

* `generate-prp [especificacao.md]`: Gera a estrutura DFT a partir de especificações em linguagem natural.

  * **Fases**: Pesquisa → Planejamento → Geração → Validação
  * Analisa `Examples/UI/` para gerar padrões de interface.

* `execute-prp [Task {NN} - ...]`: Executa uma task com todo o contexto necessário.

  * Gerencia ciclo de vida: `todo` → `in-progress` → `done`
  * Realiza testes, validações e documentações conforme blueprint.

## 🧩 Convenções e Organização

### Nomes de Arquivos

* **Domains**: `{Área de Conhecimento}.md`
* **Features**: `{Descrição da Funcionalidade}.md`
* **Tasks**: `Task {NN} - {Verbo} {Descrição}.md`

### Frontmatter Padrão

```yaml
type: domain|feature|task
tags: [categoria, tecnologia, prioridade]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: active|pending|completed|archived
```

Campos adicionais por tipo:

* **Domains**: `up`, `related`
* **Features**: `up`, `dependencies`, `related`
* **Tasks**: `severity`, `feature`, `up`, `related`, `sub_tasks`

### Status de Task

* `todo` → Não iniciada
* `in-progress` → Em andamento
* `review` → Aguardando revisão
* `done` → Concluída
* `blocked` → Bloqueada (`blocked_reason` obrigatório)

### Sub-tasks

```yaml
sub_tasks:
  - name: "Setup middleware"
    status: todo
```

## 🧠 Princípios de Context Engineering

* **Sequenciamento Informacional**: Dependências → Visão Geral → Soluções → Combinações
* **Relacionamentos Semânticos**: Hierárquico, lateral, bidirecional e ponderado
* **Modelos de Dados**:

  * **Source of Truth** nos arquivos de domain (ex: `Data Architecture.md`)
  * **Snapshots** nas features com campos essenciais

## ✅ Quality Gates

**Durante `generate-prp`**:

* Clareza dos requisitos
* Consistência sistêmica
* Completude das tasks
* Integridade de integração

**Durante `execute-prp`**:

* Validação pré-execução
* Compreensão de contexto
* Implementação conforme padrões
* Testes, validação e documentação

## 📁 Estrutura Principal

```
PRPs/
├── Domains/               # Mapas de conhecimento reutilizáveis
├── Features/              # Funcionalidades detalhadas
├── Tasks/                 # Ações executáveis com contexto embutido
├── Examples/UI/           # Mockups de interface (auto-interpretados)
├── System/
│   ├── PRP-SYSTEM.md              # Framework completo
│   ├── prp-generation-blueprint.md
│   ├── prp-execution-blueprint.md
│   ├── task-execution-blueprint.md
│   └── *-template.md             # Modelos para criação de arquivos
├── PRP-OVERVIEW.md         # Navegação e visão geral do sistema
└── PROMPT.md               # Entrada principal com especificações do projeto
```

## 📝 Notas Importantes

1. Este repositório é um **template de documentação**, não contém código-fonte.
2. Os comandos `generate-prp` e `execute-prp` são conceituais e exigem uma ferramenta externa.
3. Não renomeie arquivos manualmente — isso quebra links e referências.
4. Atualizações de status devem ocorrer apenas no frontmatter.
5. `Examples/UI/` é escaneado automaticamente para gerar padrões visuais.
