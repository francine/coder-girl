```yaml
---
up: "[[README.md]]"
type: task
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: todo|in-progress|review|done|blocked
severity: critical|major|medium|minor
feature: "[[Parent Feature.md]]"
related: "[[Related Task.md]]"
---
```
# task-template

## Context Snapshot

[This section contains ALL embedded knowledge needed for independent execution. The execute-prp command reads ONLY this task file, not the broader system documentation.]

### Problem Statement
[State the specific outcome this task must achieve. Describe the problem it solves in concrete terms, and why this matters to the success of the feature. Avoid general context. Focus on what must exist once the task is complete.]

### Embedded Domain Knowledge
[Complete knowledge patterns from relevant domains embedded here:]

**Authentication Patterns** (from Authentication Backend.md):
- [Specific authentication patterns this task must follow]
- [Security requirements and constraints]
- [Integration patterns with existing auth system]

**Code Quality Standards** (from Quality Assurance.md):
- [Specific coding standards to apply]
- [Testing requirements and coverage expectations]
- [Documentation standards for this implementation]

**Visual Reference Patterns** (from Examples/UI/):
- [Visual layout and component structure extracted from mockups]
- [UI design patterns expected in this implementation]
- [Screen-level interaction flows based on visual references]

### Architectural Context
[Critical architectural decisions and constraints embedded from system:]
- [Technology stack decisions relevant to this task]
- [Integration points with existing system]
- [Performance requirements and constraints]
- [Security considerations and requirements]

### Feature Integration
[How this task contributes to the parent feature with embedded feature context:]
- [Specific feature requirements this task addresses]
- [User flows this task enables or enhances]
- [Data models and API contracts this task implements]
- [UI components implemented according to visual mockups in `Examples/UI/`]

## Sub-Tasks

[Break down the main task into smaller, complete, executable increments. Each sub-task should be atomic and contain embedded knowledge for its specific implementation.]

### Sub-Task 1: [Specific Component Name]
**Purpose**: [What this sub-task accomplishes as a complete increment]

**Embedded Knowledge**:
- [Domain patterns specific to this sub-task]
- [Architectural decisions affecting this component]
- [Integration requirements for this piece]
- [Referenced visual patterns from `Examples/UI/` if applicable]

**Implementation Scope**:
- [Specific files to create/modify for this sub-task]
- [Specific functionality to implement]
- [Specific tests to create]

**Completion Criteria**:
- [ ] [Specific deliverable exists and functions]
- [ ] [Integration point works correctly]
- [ ] [Tests pass for this component]

### Sub-Task 2: [Specific Component Name]
**Purpose**: [What this sub-task accomplishes as a complete increment]

**Embedded Knowledge**:
- [Domain patterns specific to this sub-task]
- [Architectural decisions affecting this component]
- [Integration requirements for this piece]

**Implementation Scope**:
- [Specific files to create/modify for this sub-task]
- [Specific functionality to implement]
- [Specific tests to create]

**Completion Criteria**:
- [ ] [Specific deliverable exists and functions]
- [ ] [Integration point works correctly]
- [ ] [Tests pass for this component]

### Sub-Task 3: [Integration & Validation]
**Purpose**: [Integration of all components and end-to-end validation]

**Embedded Knowledge**:
- [Integration patterns from domains]
- [End-to-end testing approaches]
- [System integration requirements]

**Implementation Scope**:
- [Integration code and configuration]
- [End-to-end tests and validation]
- [Documentation updates]

**Completion Criteria**:
- [ ] [All components work together]
- [ ] [End-to-end functionality verified]
- [ ] [Documentation updated]

## Implementation Specifications

### Technical Requirements
[What needs to be built with embedded technical guidance:]
- [Specific technical implementation requirements]
- [Performance benchmarks from architectural context]
- [Security requirements from domain knowledge]

### Files and Structure
[Complete file organization with embedded patterns:]
```
[project-structure]
├── [file-path] - [Purpose with embedded pattern guidance]
├── [file-path] - [Purpose with embedded pattern guidance]
├── [file-path] - [Purpose with embedded pattern guidance]
└── PRPs/Examples/UI/[mockup-name].png - [Visual reference used to guide layout and UI structure]
```

### Code Patterns
[Embedded code patterns and examples from domains:]

```typescript
// [Embedded pattern from domain knowledge]
interface [PatternName] {
  // [Specific implementation guidance from domains]
}
```

```bash
# [Embedded commands from domain knowledge]
[specific commands with context]
```

## Acceptance Criteria

[Overall task completion criteria - these will be verified by the task-execution-blueprint:]

- [ ] **All Sub-Tasks Complete**: Every sub-task meets its individual completion criteria
- [ ] **Feature Integration**: Task contribution integrates correctly with parent feature
- [ ] **Domain Standards**: Implementation follows all embedded domain patterns
- [ ] **Architectural Compliance**: Code adheres to embedded architectural decisions
- [ ] **Quality Standards**: All embedded quality requirements satisfied
- [ ] **End-to-End Functionality**: Complete increment works as specified