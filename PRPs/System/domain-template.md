```yaml
---
up: Parent Domain.md
type: domain
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related: Related Domain.md
---
```
# domain-template

## Overview

[Provide a comprehensive conceptual overview of this domain. Explain what this area covers, its purpose, and its role in the overall system. This section serves as the high-level "map" (mapa de conhecimento) that orients readers to the knowledge territory covered by this domain.]

**Purpose**: [What specific knowledge area this domain addresses]
**Scope**: [What is included and excluded from this domain]
**Key Value**: [Why this domain knowledge is important for implementation]

> **Context Engineering Note**: The knowledge patterns in this domain will be embedded into task Context Engineering, enabling autonomous execution without external references.

## Core Principles

[Fundamental concepts and guiding principles that shape this domain. These principles will be embedded in tasks that use this domain knowledge through Context Engineering.]

### [Principle Category 1]
[Explain foundational principle with reasoning and application context]

- **Principle**: [Specific principle statement]
- **Rationale**: [Why this principle matters]
- **Application**: [How this applies to implementations]

### [Principle Category 2]
[Explain foundational principle with reasoning and application context]

- **Principle**: [Specific principle statement]
- **Rationale**: [Why this principle matters]
- **Application**: [How this applies to implementations]

## Implementation Patterns

[Reusable patterns and approaches that will be embedded in task Context Engineering. This is the practical knowledge that guides actual implementation.]

### [Pattern Category 1]
[Core implementation pattern with specific guidance]

**When to Use**: [Specific scenarios where this pattern applies]
**How to Apply**: [Concrete steps or approach]
**Key Considerations**: [Important constraints or requirements]

```[language]
// Example pattern code or configuration
[Specific code pattern that demonstrates the approach]
```

### [Pattern Category 2]
[Core implementation pattern with specific guidance]

**When to Use**: [Specific scenarios where this pattern applies]
**How to Apply**: [Concrete steps or approach]
**Key Considerations**: [Important constraints or requirements]

```[language]
// Example pattern code or configuration
[Specific code pattern that demonstrates the approach]
```

## Data Architecture (When Applicable)

> **Note**: This section is used when the domain serves as the authoritative source for data models. For example, a "Data Architecture" domain would maintain the complete, current definitions of all system models.

[When this domain serves as a source of truth for data models, define them here. Features will reference this domain and include only essential snapshots for Context Engineering.]

### Core Models

```yaml
# Complete model definitions - this is the source of truth
ModelName:
  fields:
    id: uuid # Primary identifier
    field_name: type # [Purpose and constraints]
    field_name: type # [Purpose and constraints]
  relationships:
    relationship_name: TargetModel # [Relationship type and purpose]
  validations:
    - [Validation rule with rationale]
    - [Business rule with implementation guidance]
  indexes:
    - [Index definition for performance]
```

### Model Guidelines
- **Naming Conventions**: [How models and fields should be named in this domain]
- **Validation Patterns**: [Common validation approaches for this domain]
- **Relationship Standards**: [How relationships should be structured]

## Integration Guidelines

[How this domain connects with other domains and system components. This knowledge helps with system-wide consistency.]

### Dependencies
[What other domains or system components this domain relies on]

- **Required Domain.md**: [How this domain depends on the other]
- **System Component**: [What system elements are required]

### Relationships
[How this domain relates to peer domains]

- **Related Domain.md**: [Nature of the relationship and integration points]
- **Complementary Domain.md**: [How domains work together]

### Integration Patterns
[Specific approaches for integrating this domain with others]

- **[Integration Pattern Name]**: [How to integrate with specific types of components]
- **[Interface Pattern Name]**: [How to maintain clean boundaries with other domains]

## Quality Standards

[Quality criteria and standards specific to this domain that will be embedded in task Context Engineering]

### Code Quality
[Domain-specific code quality requirements]
- [Specific coding standards for this domain]
- [Architecture patterns to follow]
- [Performance considerations]

### Testing Requirements
[Domain-specific testing approaches]
- [Types of tests required for this domain]
- [Testing patterns and tools]
- [Coverage expectations]

### Documentation Standards
[How implementations in this domain should be documented]
- [Required documentation elements]
- [Documentation format and style]
- [Knowledge capture requirements]

## Knowledge Patterns

[Reusable knowledge structures that will be embedded in task Context Engineering to provide context and guidance]

### [Knowledge Pattern 1]
**Context**: [When this knowledge pattern applies]
**Key Concepts**: [Essential concepts for this pattern]
**Implementation Guidance**: [How to apply this knowledge in practice]

### [Knowledge Pattern 2]
**Context**: [When this knowledge pattern applies]
**Key Concepts**: [Essential concepts for this pattern]
**Implementation Guidance**: [How to apply this knowledge in practice]

> **Source of Truth Note**: When this domain contains authoritative data models, knowledge patterns should reference how to properly use and extend these models in implementations.

## Decomposition Strategy

[Guidelines for when and how to decompose this domain into sub-domains]

### When to Decompose
Consider decomposition when:
- Domain contains more than 5 major concept areas
- Implementation patterns span multiple unrelated technologies
- Knowledge patterns serve distinctly different purposes
- File becomes difficult to navigate (>500 lines)
- Data models grow beyond manageable scope (>20 models)

### How to Decompose
1. **Identify Logical Groupings**: Find natural boundaries between concept areas
2. **Create Sub-domains**: Each focusing on a specific aspect
3. **Maintain Parent as Index**: Convert this domain into an index/overview
4. **Update Relationships**: Ensure all sub-domains link back to parent
5. **Preserve Source of Truth**: If decomposing data models, maintain clear references

Example structure after decomposition:
```
Authentication Domain.md (index)
├── Authentication Backend Patterns.md
├── Authentication Frontend Patterns.md
└── Authentication Security Standards.md
```

For data-heavy domains:
```
Data Architecture.md (index)
├── User Data Models.md
├── Product Data Models.md
└── Transaction Data Models.md
```

## Features

[Features are the "zooms detalhados" that provide detailed specifications implementing this domain's knowledge. They represent specific implementations of the patterns and principles defined here.]

### [Feature Group Name (if applicable)]
- **Feature Name 1.md** - [Brief description of what this feature implements from this domain]
- **Feature Name 2.md** - [Brief description of what this feature implements from this domain]

### [Another Feature Group (if applicable)]
- **Feature Name 3.md** - [Brief description of what this feature implements from this domain]
- **Feature Name 4.md** - [Brief description of what this feature implements from this domain]

[If no grouping is needed, simply list features directly:]

- **Feature Name.md** - [Brief description and domain knowledge utilized]
- **Feature Name.md** - [Brief description and domain knowledge utilized]

> **Note for Data Domains**: Features that use models from this domain should reference it as the source of truth and include only essential field snapshots needed for Context Engineering.