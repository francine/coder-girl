## 🎯 Qual é o padrão da indústria para persistência de contexto com Claude + PRPs?

### ✅ **Padrão emergente** nos melhores times (Anthropic, Adept, Cognosys, Replit Labs, startups YC):

#### 1. **PRPs incrementais versionados + Snapshots do sistema**

* Os PRPs funcionam como *eventos transacionais* (cada um é uma mutação).
* A cada **marco funcional** (ex: release, versão, milestone), gera-se um **System Snapshot**:

  * Documento único que consolida os PRPs até aquele ponto.
  * Serve como base para futuras vibrações e novos PRPs.

> 📌 Isso responde diretamente à sua ideia de *"fundir PRPs em um só e continuar dali"*.
> Esse é o padrão **mais usado atualmente** para lidar com *context overflow*.

---

#### 2. **Estrutura comum para Snapshots**

```markdown
# System Snapshot — v0.9.3

## Visão geral
Breve descrição do que o sistema faz hoje.

## Arquitetura
Componentes principais, fluxos, integrações.

## Decisões técnicas relevantes
Bullet points com decisões já consolidadas (vindas dos PRPs).

## Pontos em aberto
Limitações, ideias futuras, tech debt.

## Últimos PRPs consolidados
- 2025-09-01.prp-refactor-db.md
- 2025-09-03.prp-add-auth.md
```

* Isso é **referenciado nos próximos PRPs**, e os PRPs antigos são **arquivados** como *histórico*.

---

#### 3. **Uso de "Vibration Logs" ou "Code Evolution Traces"**

* Algumas equipes mantêm logs curtos por PRP com:

  * O que foi tentado
  * O que funcionou
  * O que foi descartado

> **Claude Commands pode usar isso para evitar repetir erros.**
> Serve como base para aprendizado do agente ao longo do tempo.

---

#### 4. **Roteamento de contexto com curadoria manual ou automatizada**

* Curadores (humanos ou scripts) selecionam PRPs úteis para cada novo comando.
* Alternativamente, usa-se um **classificador simples** ou embeddings para selecionar PRPs relacionados ao objetivo atual.
* **Claude aceita bem markdowns de 100k tokens, mas mesmo assim o filtro faz diferença.**

---

#### 5. **Separação entre `specs vivas` e `decisões históricas`**

* Os snapshots viram *especificações vivas*.
* Os PRPs antigos são apenas *evidência de processo*.
* Claude é instruído a *usar apenas o snapshot + PRPs novos* por padrão.

---

## 📌 Conclusão objetiva

Sua intuição está 100% alinhada com o que empresas como Anthropic, Cognosys, Replit e outras estão fazendo:

> ✅ **Sim: o padrão emergente é sintetizar PRPs antigos em um snapshot do sistema, e continuar a vibrar novos PRPs a partir desse snapshot.**

Isso resolve:

* Overflow de contexto.
* Ruído de decisões superadas.
* Lerdeza no ciclo de feedback.

