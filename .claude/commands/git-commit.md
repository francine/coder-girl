# git-commit.md

> Gera mensagens de commit concisas, padronizadas e sem ambiguidade, seguindo o modelo `conventional commits`.

## 🎯 Objetivo
Declarar com precisão **o que foi alterado e por quê**, de forma legível por humanos e máquinas.

## 📦 Estrutura
```bash
<tipo>(<escopo>): <resumo direto da mudança>

- [opcional] bullets com decisões ou exemplos
````

## ✅ Tipos permitidos

* `feat`: nova funcionalidade (ex: nova feature, task ou domínio)
* `fix`: correção de bug ou comportamento errado
* `docs`: qualquer mudança em documentação ou contexto
* `refactor`: reestruturação sem alterar comportamento
* `style`: ajustes visuais, ortográficos ou semânticos
* `test`: adição/ajuste de testes
* `chore`: manutenção ou melhorias não-funcionais
* `build`: mudanças em dependências, CI ou scripts

## 🎯 Escopos recomendados

* `system`, `commands`, `blueprint`, `template`
* `domain`, `feature`, `task`
* `docs` (quando transversal)

## 🧪 Exemplos

```bash
docs(system): transformar CLAUDE.md em README.md

- Remoção de referências à IA
- Padronização com estrutura DFT
```

```bash
feat(feature): adicionar comentários no blog
fix(task): corrigir bug no export JSON
```

## 🚫 Restrições

* Não escreva o passo-a-passo do que foi feito — declare **o resultado final**
* Não use frases vagas como "ajustes" ou "melhorias"
* Não inclua explicações fora da mensagem de commit

## 🧠 Dica

Se a mudança não for testável, o commit deve pelo menos ser **rastreável e atômico**.
