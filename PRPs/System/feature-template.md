```yaml
---
up: "[[Primary Domain.md]]"
type: feature
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
related: "[[Related Feature.md]]"
dependencies: "[[Required Context.md]]"
---
```
# feature-template

## Purpose

[Write one clear paragraph describing exactly what this feature accomplishes, what specific problem it solves for users, and how it contributes to the overall system value.]

## Scope

[Define the precise boundaries of this feature - what is included and excluded:]

### Included Capabilities
- [Specific capability 1 with clear functional boundary]
- [Specific capability 2 with clear functional boundary]
- [Specific user action supported with defined scope]
- [Specific data operation performed with defined scope]
- [Interpretation of UI mockups placed under `Examples/UI/` to generate visual specifications]

### Excluded from This Feature
- [Specific functionality that is NOT part of this feature]
- [Related capabilities that belong to other features]
- [Future enhancements not included in current scope]

## User Flow

[Describe the complete user interaction sequence with this feature:]

### Primary Flow
1. **[Initial Trigger]**: [User action or system event that starts the feature]
2. **[System Processing]**: [What the system does in response]
3. **[UI Reference Resolution]**: [System checks `Examples/UI/` for relevant visual mockups]
4. **[User Interaction]**: [Any intermediate user actions required]
5. **[Final Outcome]**: [What the user observes as completion]

### Success State
[Describe exactly what the user sees when the feature works correctly]

### Error Handling Flow
[Describe how errors are detected, handled, and presented to users]
- **[Error Type 1]**: [When it occurs] → [How system handles] → [User feedback]
- **[Error Type 2]**: [When it occurs] → [How system handles] → [User feedback]

## Data Models

[Define the complete data structures needed for this feature with embedded domain patterns:]

### Core Data Entities
```yaml
# Primary data model following [Domain] patterns
[EntityName]:
  fields:
    [field_name]: [type] # [purpose and constraints from domain knowledge]
    [field_name]: [type] # [purpose and constraints from domain knowledge]
  relationships:
    [relationship_name]: [target_entity] # [relationship type and purpose]
  constraints:
    - [constraint from domain patterns]
    - [validation rule from domain standards]
```

### Supporting Data Structures
```yaml
# Additional models needed for feature completeness
[SupportingEntity]:
  fields:
    [field_name]: [type] # [purpose and domain pattern reference]
  validation:
    - [domain-specific validation rules]
```

## API Specification

[Define the complete API interface for this feature with embedded integration patterns:]

### Endpoints
```yaml
# REST API following [Domain] integration patterns
endpoints:
  - method: [HTTP_METHOD]
    path: /api/[resource_path]
    purpose: [what this endpoint accomplishes]
    request:
      headers: [required headers from domain patterns]
      body: [request schema following domain standards]
    response:
      success: [response schema with domain patterns]
      error: [error format following domain standards]
    integration: [how this connects to domain patterns]
```

### Data Contracts
```yaml
# Request/Response formats following domain patterns
[ContractName]:
  request_schema:
    [field]: [type] # [validation from domain knowledge]
  response_schema:
    [field]: [type] # [format from domain standards]
  error_handling: [approach from domain patterns]
```

## Technical Implementation

### Architecture Overview
[High-level technical approach using embedded domain patterns]

**Architecture Pattern**: [Specific pattern from domain knowledge]
**Integration Approach**: [How this feature integrates with existing system]
**Domain Alignment**: [How implementation follows domain principles]

### Core Components
[Specific technical components with domain pattern references:]

- **[Component Name]**: `[filepath/filename.ext]`
  - **Purpose**: [Specific responsibility within feature]
  - **Domain Pattern**: [Which domain pattern this component implements]
  - **Integration Points**: [How this component connects to others]

- **[Component Name]**: `[filepath/filename.ext]`
  - **Purpose**: [Scans `Examples/UI/` for mockups and extracts visual layout metadata]
  - **Domain Pattern**: [Visual interpretation from context injection layer]
  - **Integration Points**: [Injected into context building pipeline during PRP generation]

- **[Service Name]**: `[filepath/filename.ext]`
  - **Purpose**: [Specific functionality provided]
  - **Domain Pattern**: [Which domain pattern this service follows]
  - **Dependencies**: [What this service requires]

### Implementation Strategy
[Approach for building this feature using domain knowledge:]

**Phase 1**: [Foundation components following domain patterns]
- [Component 1 with domain pattern reference]
- [Component 2 with domain pattern reference]

**Phase 2**: [Integration and functionality using domain guidelines]
- [Integration approach from domain knowledge]
- [Functionality implementation using domain patterns]

**Phase 3**: [Validation and optimization using domain standards]
- [Testing approach from domain knowledge]
- [Optimization using domain best practices]

## Integration Context

[How this feature connects to the broader system using domain knowledge:]

### Domain Dependencies
[Required domain knowledge and patterns:]
- **[[Primary Domain.md]]**: [Specific patterns and knowledge needed from this domain]
- **[[Supporting Domain.md]]**: [Additional domain knowledge required]

### System Integration Points
[How this feature connects to existing system components:]
- **[Existing Component]**: [Integration approach using domain patterns]
- **[External System]**: [Integration method following domain guidelines]

### Cross-Feature Relationships
[How this feature relates to other features:]
- **[[Related Feature.md]]**: [Relationship type and integration points]
- **[[Dependent Feature.md]]**: [Dependency relationship and requirements]

## Quality Standards

[Quality criteria specific to this feature using embedded domain standards:]

### Functional Quality
- [Performance requirements from domain standards]
- [Reliability requirements following domain patterns]
- [Usability standards from domain knowledge]

### Technical Quality
- [Code quality standards from domain patterns]
- [Testing requirements following domain guidelines]
- [Documentation standards from domain knowledge]

### Integration Quality
- [Integration testing requirements from domain patterns]
- [Compatibility requirements following domain standards]
- [Performance integration criteria from domain knowledge]

## Acceptance Criteria

[Specific, measurable outcomes that verify feature success using domain standards:]

### Functional Acceptance
- [ ] **Core Functionality**: [Feature works as specified following domain patterns]
- [ ] **User Experience**: [User flows complete successfully per domain UX standards]
- [ ] **Data Integrity**: [Data operations maintain integrity per domain data standards]

### Technical Acceptance
- [ ] **Performance**: [Meets performance requirements from domain standards]
- [ ] **Integration**: [Integrates correctly using domain integration patterns]
- [ ] **Quality**: [Code quality meets domain standards]

### System Acceptance
- [ ] **Compatibility**: [Works with existing system following domain compatibility guidelines]
- [ ] **Scalability**: [Scales appropriately using domain scalability patterns]
- [ ] **Maintainability**: [Code is maintainable following domain maintenance standards]

## Examples and References

[Reference implementations and patterns that demonstrate this feature:]

### Domain Pattern Applications
- **[Pattern Name from Domain]**: [How this feature applies the domain pattern]
- **[Integration Pattern from Domain]**: [How this feature uses domain integration approach]

### Implementation Examples
[Reference to complete examples when available:]
- **[example-folder/](Examples/example-folder/)** - [Complete implementation example]
- **[code-example.ext](Examples/code-example.ext)** - [Specific code pattern example]
- **[ui-mockup.png](Examples/UI/ui-mockup.png)** - [Example visual layout used to guide implementation]

### Related Implementations
[References to similar features or implementations that follow domain patterns:]
- **[[Similar Feature.md]]**: [How this relates and what patterns are shared]
- **[External Reference]**: [Industry examples that demonstrate domain patterns]