# PRP — Sistema de Integração RH Flash ↔ Múltiplas Folhas de Pagamento

## Declaração do Problema

- **Objetivo em uma linha**: Criar sistema de integração entre Flash App (CDJ) e múltiplas folhas de pagamento, iniciando com TOTVS
- **Escopo**: Módulo CDJ (Controle de Jornada) - envio de marcações de ponto da Flash para integradoras
- **Restrições**: Node.js, NestJS, TypeScript, MongoDB, Clean Architecture, TDD
- **Premissas**: APIs Flash e TOTVS disponíveis, necessidade de mapeamento de IDs entre sistemas
- **Critérios de sucesso**: Sincronização automática de marcações de ponto com zero perda de dados
- **Entregáveis**: Sistema modular escalável para múltiplas integradoras

## Artefatos e Convenções do Projeto

| Caminho | Tipo | Relevância | Notas |
|---------|------|------------|-------|
| src/modules/flash/ | Módulo | Alta | Camada de input - APIs Flash |
| src/modules/core/ | Módulo | Alta | Lógica de negócio e transformações |
| src/modules/integrators/ | Módulo | Alta | Camada de output - sistemas externos |
| src/shared/entities/ | Entidades | Alta | Modelos de dados MongoDB |
| src/shared/interfaces/ | Interfaces | Alta | Contratos entre camadas |
| tests/ | Testes | Alta | TDD - unit, integration, e2e |

## Exemplos Aplicáveis

- **Caminho relativo**: /coder-girl/src/contexts/AppContext.tsx
- **Aspecto correspondente**: Padrão de context/provider para injeção de dependências
- **Notas de reutilização**: Aplicar padrão similar para serviços de integração

## Fontes Externas

| Título | URL | Publicador | Principal aprendizado | Aplicabilidade |
|--------|-----|------------|-----------------------|----------------|
| Flash CDJ API | https://docs.api.flashapp.services/docs/ControleDeJornada/ListarAlocacoesDeEscala | Flash App | Estrutura de dados de alocações | Implementação camada Flash |
| TOTVS APIs RH | https://centraldeatendimento.totvs.com/hc/pt-br/articles/8558471418135 | TOTVS | Webservices disponíveis para folha de pagamento | Implementação integrador TOTVS |

## Plano Passo a Passo

1. **Setup do Projeto**:
   - Entradas: Requisitos arquiteturais
   - Saída: Estrutura base NestJS com TypeScript
   - Verificação: Compilação sem erros, testes passando

2. **Camada Flash (Input)**:
   - Entradas: Credenciais API Flash, parâmetros de consulta
   - Saída: Dados padronizados de alocações e marcações
   - Verificação: Dados sendo consumidos corretamente da API

3. **Camada Core (Business)**:
   - Entradas: Dados Flash brutos
   - Saída: Dados transformados e validados
   - Verificação: Mapeamentos de ID funcionando, validações ativas

4. **Camada Integradoras (Output)**:
   - Entradas: Dados padronizados do Core
   - Saída: Envio para sistemas externos (TOTVS)
   - Verificação: Marcações sendo enviadas com sucesso

5. **Persistência e Logs**:
   - Entradas: Dados de mapeamento e logs de operação
   - Saída: Armazenamento MongoDB
   - Verificação: Auditoria completa das operações

## Requisitos

### Funcionais:
- RF001: Listar alocações de escala da Flash por período
- RF002: Capturar marcações de ponto da Flash  
- RF003: Mapear IDs de funcionários entre Flash e integradoras
- RF004: Transformar dados Flash para formato TOTVS
- RF005: Enviar marcações para TOTVS via API
- RF006: Registrar logs de integração e erros
- RF007: Permitir configuração de múltiplas integradoras

### Não funcionais:
- RNF001: Arquitetura limpa com camadas bem isoladas
- RNF002: Escalabilidade para múltiplas integradoras
- RNF003: Cobertura de testes ≥ 90%
- RNF004: Logs detalhados para auditoria
- RNF005: Tratamento de falhas e retry automático
- RNF006: Performance: processar até 10k marcações/hora

## Notas de Implementação

- Usar padrão Repository para abstração de dados
- Implementar Factory Pattern para integradoras
- DTOs para validação de entrada e saída
- Middleware para logging e tratamento de erros
- Configuração via environment variables
- Documentação OpenAPI/Swagger

## Testes e Aceitação

### Casos de teste (entradas → saídas esperadas):
- **CT001**: API Flash retorna alocações → Dados transformados para formato padrão
- **CT002**: Marcações da Flash → Enviadas para TOTVS com sucesso  
- **CT003**: ID Flash inexistente no mapeamento → Erro tratado e logado
- **CT004**: Falha na API TOTVS → Retry automático e log de erro

### Critérios de aceitação:
- Integração bidirecional Flash ↔ TOTVS funcionando
- Zero perda de dados de marcações
- Logs completos de todas as operações
- Testes automatizados passando

### Comandos ou instruções reproduzíveis:
```bash
npm run test:unit
npm run test:integration  
npm run test:e2e
npm run build
npm run start:prod
```

## Riscos e Plano de Rollback

### Riscos:
- R001: APIs Flash/TOTVS indisponíveis → Implementar circuit breaker
- R002: Mudança nos formatos de dados → Versionamento de DTOs
- R003: Performance inadequada → Implementar queue/batch processing
- R004: Falhas de mapeamento de IDs → Logs detalhados e alertas

### Plano de rollback:
- Manter versão anterior funcionando em paralelo
- Rollback via Docker tags
- Restore de dados via backups MongoDB
- Documentação de procedimentos de rollback

## Referências

1. **Artefatos do projeto**: Template PRP, estrutura coder-girl
2. **Exemplos**: Context pattern em /coder-girl/src/contexts/
3. **Fontes externas**: Documentação APIs Flash e TOTVS

## Checklist de Execução

- [ ] Estrutura base NestJS criada
- [ ] Configuração MongoDB
- [ ] Módulo Flash implementado
- [ ] Módulo Core implementado  
- [ ] Integrador TOTVS implementado
- [ ] Testes unitários ≥ 90% cobertura
- [ ] Testes de integração
- [ ] Documentação OpenAPI
- [ ] Deploy e monitoramento

---
**Nível de confiança**: 4/5 — **Justificativa**: Arquitetura bem definida com APIs documentadas, resta validar integrações reais.