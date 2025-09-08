# executar-prp.md

Implementa a especificação descrita no PRP (Product Requirements Prompts).

## Fase 1: Carregar PRP

* Ler o arquivo PRP fornecido em \$ARGUMENTS.
* Validar se todas as seções obrigatórias estão presentes.
* Se nenhum \$ARGUMENTS for fornecido, então ler `PRPs/LAST_GNERATED.md`.

## Fase 2: Interpretar Declaração do Problema

* Extrair objetivo, escopo, restrições, premissas, critérios de sucesso e entregáveis.
* Usar isso como referência para a execução.

## Fase 3: Mapear Referências

* Resolver e carregar artefatos do projeto a partir de caminhos relativos.
* Carregar exemplos de `PRPs/examples`.
* Validar acessibilidade de fontes externas.

## Fase 4: ULTRATHINK

* Refletir profundamente antes de executar o plano.
* Criar um plano abrangente cobrindo todos os requisitos.
* Quebrar tarefas complexas em passos menores e gerenciáveis usando suas ferramentas de *todos*.
* Usar a ferramenta TodoWrite para criar e rastrear o plano de implementação.
* Identificar padrões de implementação em código existente para seguir.

## Fase 5: Seguir o Plano Passo a Passo

* Executar cada etapa na ordem em que está escrita no PRP.
* Para cada etapa: aplicar entradas, produzir saídas e executar a verificação.
* Registrar progresso e desvios.

## Fase 6: Implementar Requisitos

* Garantir que todos os requisitos funcionais e não funcionais do PRP sejam implementados.
* Aplicar todas as notas de implementação explicitamente fornecidas no PRP.
* Ao gerar ou modificar código-fonte, aplicar os seguintes princípios de engenharia:

  * **Estrutura de Código**

    * Modularidade: componentes independentes e reutilizáveis.
    * Separação de Responsabilidades: atribuir responsabilidades distintas a diferentes módulos ou camadas.
    * Fachada: encapsular a complexidade do subsistema em interfaces claras.

  * **Simplicidade e Manutenibilidade**

    * Princípio DRY: evitar duplicação de lógica e estruturas.
    * Princípio KISS: manter soluções simples e evitar complexidade desnecessária.
    * YAGNI: não implementar recursos não exigidos.
    * Código Limpo: garantir legibilidade, consistência e clareza.
    * Filosofia do Programador Pragmático: priorizar clareza, adaptabilidade e manutenção.

  * **Princípios de Design**

    * Princípios SOLID:

      * Responsabilidade Única: cada classe ou módulo com um propósito.
      * Aberto/Fechado: aberto para extensão, fechado para modificação.
      * Substituição de Liskov: tipos derivados devem ser substituíveis por tipos base.
      * Segregação de Interfaces: preferir interfaces menores e específicas.
      * Inversão de Dependência: depender de abstrações, não de implementações concretas.

  * **Confiabilidade e Escalabilidade**

    * Segurança por Design: integrar segurança em todas as fases da implementação.
    * Tratamento de Erros e Fail Fast: lidar com erros de forma previsível, falhar cedo em inconsistências.
    * Mentalidade de Escalabilidade: estruturar código e sistemas para suportar crescimento de carga e uso.
    * 12-Factor App (se implementando serviços): seguir práticas modernas para configuração, dependências, logging e deployabilidade.

  * **Princípios de UI/UX**

    * Consistência: manter padrões visuais e de interação uniformes.
    * Visibilidade do Estado do Sistema: dar feedback claro às ações do usuário.
    * Acessibilidade: seguir fundamentos do WCAG (contraste, navegação por teclado, rótulos ARIA).
    * Minimalismo: mostrar apenas o necessário, evitar poluição visual.
    * Feedback e Recuperação: fornecer confirmações, mensagens de erro e formas de recuperar.

## Fase 6.1: Preparar Testes de Contrato

* Ler a seção `## Contratos de Teste` (ou `## Testes e Aceitação`) do PRP.
* Gerar arquivos de teste para cada item listado, utilizando o framework indicado (ex: `Vitest`, `Supertest`, `Pytest`, etc.).
* Os testes devem verificar se os comportamentos e respostas do sistema estão conforme especificado — sem cobrir implementação interna.
* Criar um arquivo de testes por domínio, preferencialmente em `tests/` ou junto ao módulo testado.
* Marcar claramente os testes como contratos usando comentário padrão:
  ```
  // CONTRACT TEST: deve retornar 401 se o token for inválido
  ```

* Se os testes forem de API:

  * Criar chamadas usando um cliente HTTP mockado ou real (`fetch`, `axios`, `supertest`, etc.).
  * Validar: status code, body, headers e efeitos colaterais visíveis.

* Adicionar esses testes na execução da Fase 7 (Testes e Aceitação).

## Fase 7: Aplicar Testes e Aceitação

* Executar todos os casos de teste listados na seção `## Contratos de Teste` do PRP.
* Executar os testes de contrato e API criados na Fase 6.1.
* Verificar todos os critérios de aceitação declarados.
* Validar que os contratos esperados foram satisfeitos (incluindo testes de resposta HTTP, regras de negócio e outputs estruturais).
* Reportar os resultados.

## Fase 8: Checklist de Execução

* Ler a seção “Execution Checklist” do PRP.
* Tomar cada tarefa uma por uma na ordem listada.
* Executar a tarefa conforme descrito.
* **Atualizar imediatamente o checklist inline do PRP com o status da execução usando os seguintes marcadores:**

  * `- [ ] {Descrição da tarefa}` → pendente, não iniciada.
  * `- [-] {Descrição da tarefa}` → em execução.
  * `- [x] {Descrição da tarefa}` → concluída com sucesso.
  * `- [?] {Descrição da tarefa}` → tentativa falhou.

* Sempre manter a descrição da tarefa intacta ao atualizar o status.
* Continuar até que todas as tarefas do checklist tenham sido processadas.
* Se for necessário teste de sistema:

  * Rodar o frontend na porta 3003, testá-lo, e encerrar o processo.
  * Rodar o backend na porta 8008, testá-lo, e encerrar o processo.
  * Nunca deixar portas abertas após o teste.

## Fase 9: Saída Final

* **Garantir que todas as tarefas da seção “Execution Checklist” do PRP tenham sido executadas e marcadas como concluídas `[x]`.**
* Entregar o resultado da implementação conforme descrito no PRP.
* Produzir um relatório final de execução incluindo:

  * Resumo da execução
  * Resultados dos testes
  * Riscos encontrados
  * Status final do checklist concluído

## Fase 10: Commit Local

* Commitar os arquivos afetados
* Ler as regras de commit a partir do arquivo `.claude/commands/git-commit.md`
* **IMPORTANTE: Não commite tudo que está na pasta mas somente os arquivos que vc criou, modificou ou alterou**

--- 

**VOCÊ NÃO TEM PERMISSÃO PARA ACESSAR OUTRAS PASTAS A NÃO SER A PASTA CORRENTE E SUAS FILHAS.**
