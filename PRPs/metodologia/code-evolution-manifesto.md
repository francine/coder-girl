# Code Evolution Manifesto

## Propósito

Código deve ser legível, previsível e fácil de evoluir. Nada entra no repositório se não for testável.

---

## Diretrizes Centrais

1. **Contratos explícitos**

   * Tipos obrigatórios. Schemas para dados externos. Codegen onde possível.

2. **Abstrações rasas**

   * Uma responsabilidade por arquivo. Sem indireções desnecessárias.

3. **Estado previsível**

   * Estado de servidor via client de dados padrão. Estado local com stores explícitos ou signals. Sem singletons ocultos.

4. **UI determinística**

   * Componentes puros. Efeitos isolados em serviços/hook únicos. Estilo via tokens e primitives headless.

5. **Arquitetura estável**

   * `app/`, `entities/`, `features/`, `shared/`. Limites rígidos entre módulos.

6. **Documentação no código**

   * Docstrings sucintas. ADRs curtos por decisão relevante.

7. **Consistência antes de otimização**

   * Padrões idênticos. Sem micro “tunings” prematuros.

---

## Testabilidade Primeiro

* Todo novo módulo deve expor **pontos de injeção** para dependências (tempo, I/O, rede, storage, UUID, random).
* Funções puras por padrão. Side effects em **adaptadores**.
* Nenhuma lógica em construtores. Preferir **fábricas** que aceitam dependências.

---

## Taxonomia de Testes

1. **Unitários (rápidos, puros)**

   * Cobrirem ramos e contratos de funções e componentes.
   * Alvo: 70–80% de cobertura por módulo, sem perseguir 100%.

2. **Contratos (CDC)**

   * Produtor ↔ consumidor de APIs e eventos.
   * Validar via schema (OpenAPI/JSON Schema/Avro) e pactos versionados.

3. **Integração leve**

   * Módulo + adaptador fake (DB, HTTP, fila). Sem rede real.

4. **Componentes de UI**

   * Testes de acessibilidade e interação. Foco em comportamento, não em detalhes de implementação.

5. **E2E crítico**

   * Fluxos de negócio mínimos. Idempotentes. Dados isolados por execução.

6. **Propriedade (property-based)**

   * Regras invariantes de domínios centrais.

7. **Regressão visual controlada**

   * Snapshots apenas para outputs estáveis (strings, schemas, DOM estático). Proibido snapshot frágil.

---

## Padrões de Design para Testar

* **Ports & Adapters**: domínios sem dependências de I/O. Adaptadores injetáveis.
* **Command/Query split**: comandos sem retorno complexo, queries puras.
* **Eventos imutáveis**: payload versionado e validado.
* **Service Locator é proibido**: usar DI explícita por construtor/fábrica.
* **Boundary Mappers**: converter DTO↔modelo em um único lugar testado.

---

## Controle de Tempo, Aleatoriedade e IDs

* Tempo via interface `Clock.now()`. Em testes, usar **fake timers**.
* Aleatoriedade via `Rng.next()`. Seeds fixos nos testes.
* IDs via `IdGenerator.new()`. Injetável.

---

## Dados de Teste

* **Builders** e **fixtures** tipadas. Zero JSON literal solto.
* **Catálogo de cenários** por regra de negócio. Reuso entre testes.
* **Golden files** versionados apenas para formatos estáveis.

---

## Rede, I/O e Assíncrono

* HTTP e filas simulados por **mocks de camada** ou service virtualization. Sem chamadas externas em unit/integration.
* Retries e backoff testados com timers falsos.
* Circuit breakers e timeouts com valores curtos sob teste.

---

## UI: Regras de Teste

* Seletores de **papel/label** acessíveis. Proibido `data-testid` exceto em widgets headless.
* Testar **comportamentos observáveis**: texto, aria, foco, atalhos, navegação.
* Testes de teclado e navegação por foco são obrigatórios em componentes interativos.
* Visual densificado: validar truncamento, tooltips, estados de loading/empty/error.

---

## Qualidade Automatizada

* **Gates de CI** obrigatórios:

  * Lint + typecheck passam.
  * Testes unit/integration passam <10 min.
  * Cobertura mínima por pacote.
  * Contratos (CDC) verificados contra versões compatíveis.

* **Mutation testing** ativado nos domínios críticos.
* **SAST/Dep check** em cada PR.
* **Flaky detector**: testes instáveis quebram o build até correção.

---

## Critérios de Aceite de Código

* Testes incluídos e legíveis. Sem testes, sem merge.
* Domínio coberto por ao menos: unit + contrato ou unit + integração leve.
* Efeitos laterais isolados. Dependências injetadas. Tempo/IDs controláveis.
* Nenhum snapshot frágil. Nenhuma chamada de rede real em unit/integration.

---

## Antipadrões Bloqueados

* Estado global implícito. Singletons escondidos.
* Mocks profundos de implementação. Testes que espelham código.
* “Helper” genérico sem contrato. Utils não tipados.
* Testes que dependem de ordem ou de tempo real.
* Flows críticos sem CDC.

---

## Princípio Orientador

Se não é **explícito, determinístico e testável**, não pertence ao código-base.

---

## Checklist de Conformidade

Antes de considerar qualquer entrega concluída, confirme:

1. **Contratos**

   * [ ] Todos os dados externos possuem schema ou tipos explícitos.
   * [ ] Funções e componentes exportados têm assinatura clara e documentada.

2. **Abstrações**

   * [ ] Cada arquivo tem uma única responsabilidade.
   * [ ] Não há indireções desnecessárias ou “helpers” genéricos.

3. **Estado**

   * [ ] Estado de servidor manipulado por cliente padrão de queries.
   * [ ] Estado local isolado em stores/signals previsíveis.

4. **UI**

   * [ ] Componentes são funções puras.
   * [ ] Side effects isolados em serviços/hooks dedicados.
   * [ ] Estilo aplicado via tokens e primitives headless.

5. **Arquitetura**

   * [ ] Código está dentro da estrutura `app/`, `entities/`, `features/`, `shared/`.
   * [ ] Limites de módulos respeitados sem vazamento de dependências.

6. **Documentação**

   * [ ] Funções, hooks e máquinas de estado possuem docstrings.
   * [ ] Decisões significativas registradas como ADRs.

7. **Testabilidade**

   * [ ] Todas as dependências externas são injetáveis (tempo, UUID, rede, storage).
   * [ ] Cada unidade de lógica possui teste unitário.
   * [ ] Contratos de APIs/eventos têm testes CDC.
   * [ ] Componentes de UI têm testes de acessibilidade e interação.
   * [ ] Fluxos de negócio críticos têm testes E2E mínimos.

8. **Qualidade**

   * [ ] Nenhum snapshot frágil.
   * [ ] Nenhum teste depende de ordem ou tempo real.
   * [ ] Nenhum singleton oculto.
   * [ ] Nenhum código sem cobertura mínima aceitável.
