# File Structure

```yaml
---
type: domain
tags: [file-structure, naming, frontmatter, templates]
created: 2025-01-20
updated: 2025-01-20
status: active
up: "[[PRP System.md]]"
related: "[[Methodology.md]], [[Linking System.md]]"
---
```

## Directory Structure

```text
PRPs/
├── Domains/         # Knowledge and context files
├── Tasks/           # Action items with severity and status tracking  
├── Features/        # Development efforts with energy classification
│   └── Examples/    # Feature examples
├── System/          # Framework documentation and templates
│   ├── PRP System.md
│   ├── Methodology.md
│   ├── File Structure.md
│   ├── Linking System.md
│   ├── Management Guidelines.md
│   └── Templates/   # File templates for each type
│       ├── domain-template.md
│       ├── feature-template.md
│       └── task-template.md
├── README.md        # Navigation overview
└── PROMPT.md        # System prompt for AI context
```

## File Naming Conventions

### Domain Files

**Format**: `{Title}.md`
**Purpose**: Store reusable knowledge and context patterns

**Examples**:

```text
Authentication Backend.md
State Management Frontend.md  
Database Migrations.md
API Error Handling.md
Docker Deployment Setup.md
```

### Task Files

**Format**: `{severity_emoji} Task {NN} - {Verb} {Short Description}.md`
**Purpose**: Track specific action items with visual severity indication

**Examples**:

```text
🔴 Task 01 - Fix Major Bug in Credits Page.md
🟡 Task 02 - Implement JWT Middleware.md
🟢 Task 03 - Review Auth Documentation.md
🟠 Task 04 - Setup Database Migration.md
```

**Severity Emojis**:

Refer to [[Management Guidelines.md#Severity Classification]] for a detailed explanation of severity levels.

### Feature Files

**Format**: `{Short Description} {Subject}.md`
**Purpose**: Define development efforts and feature scope

**Examples**:

```text
Auth System Feature.md
Auth System Architecture.md  
Auth System Initial Setup.md
Payment Integration Feature.md
Real Time Notifications.md
```

## Frontmatter Structure

### Required Fields (All Types)

```yaml
type: domain|task|feature
tags: [technology, priority, category]
created: 2025-01-20
updated: 2025-01-20
status: # See [[Management Guidelines.md]]
up: "[[Parent Context.md]]"
related: "[[Other File.md]]"
```

### Type-Specific Fields

For `status` and `severity` values, refer to [[Management Guidelines.md]].

#### Domain File Type

```yaml
type: domain
up: "[[Parent Domain.md]]"       # OPTIONAL: Parent domain
related: "[[Domain.md]]"         # OPTIONAL: Related domains
```

#### Task File Type

```yaml
type: task
status: # See [[Management Guidelines.md]]
severity: # See [[Management Guidelines.md]]
up: "[[Domain.md]]"              # REQUIRED: Implementation patterns domain
feature: "[[Feature.md]]"        # REQUIRED: Parent feature
related: "[[Task.md]]"           # OPTIONAL: Related tasks
```

#### Feature File Type

```yaml
type: feature
status: # See [[Management Guidelines.md]]
up: "[[Domain.md]]"              # REQUIRED: Primary domain
dependencies: "[[Context.md]]"   # REQUIRED: Implementation context needed
related: "[[Feature.md]]"        # OPTIONAL: Related features
```

## File Creation Specifications

### Feature File Requirements

**Naming**: `{Short Description} {Subject}.md`
**Content**: Use `System/Templates/feature-template.md`
**Required Frontmatter**:

```yaml
type: feature
up: "[[Domain.md]]"              # REQUIRED: Primary domain
dependencies: "[[Context.md]]"   # REQUIRED: Implementation context needed
related: "[[Feature.md]]"        # OPTIONAL: Related features
```

### Task File Requirements

**Naming**: `{emoji} Task {NN} - {Verb} {Description}.md`
**Content**: Use `System/Templates/task-template.md`
**Required Frontmatter**:

```yaml
type: task
severity: # See [[Management Guidelines.md]]
up: "[[Domain.md]]"              # REQUIRED: Implementation patterns domain
feature: "[[Feature.md]]"        # REQUIRED: Parent feature
related: "[[Task.md]]"           # OPTIONAL: Related tasks
```

### Domain File Requirements

**Naming**: `{Title}.md`
**Content**: Use `System/Templates/domain-template.md`
**Required Frontmatter**:

```yaml
type: domain
up: "[[Parent Domain.md]]"       # OPTIONAL: Parent domain
related: "[[Domain.md]]"         # OPTIONAL: Related domains
```

## Template System

File templates for each type are available in `System/Templates/`:

- `domain-template.md` - Structure for domain files
- `task-template.md` - Structure for task files  
- `feature-template.md` - Structure for feature files

### Template Usage

1. Copy appropriate template from `System/Templates/`
2. Follow naming convention exactly
3. Add required frontmatter fields
4. Link to parent using `up` field
5. Tag appropriately for discoverability

## Naming Best Practices

### File Naming

- Use Title Case for readability
- Keep descriptions concise but specific
- Include severity emoji in task names for immediate visual priority
- Maintain consistent formatting across all file types

### Content Guidelines

- Provide concrete examples over abstract descriptions
- Include validation criteria for all tasks
- Link related concepts explicitly
- Update timestamps when modifying content

## Categorization Integration

File structure and naming conventions integrate with knowledge categorization strategies to enable systematic organization and discovery.

### Hierarchical Taxonomy Integration

**File Naming Reflects Taxonomic Structure:**
- Domain files follow taxonomic progression: `Parent Domain.md` → `Specialized Domain.md` → `Implementation Domain.md`
- Task files indicate taxonomic category through descriptive elements: `{emoji} Task {NN} - {Taxonomic Category} {Specific Action}.md`
- Feature files group related taxonomic elements: `{Taxonomic Area} {Implementation Type}.md`

**Directory Organization Supports Taxonomy:**
- `/Domains/` directory contains taxonomic knowledge areas organized by hierarchical relationships
- Subdirectory creation for complex taxonomic branches when needed
- File linking preserves taxonomic inheritance through frontmatter relationships

### Multi-Dimensional Classification Support

**Faceted File Organization:**
- **Topic Facet**: Primary subject matter classification reflected in file naming
- **Complexity Facet**: Indicated through task severity (🔴🟠🟡🟢) and descriptive language
- **Type Facet**: Distinguished by file type (domain, task, feature) and directory placement
- **Status Facet**: Managed through frontmatter status fields and systematic updates

**Attribute-Based Naming:**
- Descriptive elements in filenames capture key attributes for discovery
- Tag systems in frontmatter support attribute-based filtering and organization
- Relationship links enable navigation by shared attributes across different classification dimensions

### Folksonomy Integration

**Community Tagging Support:**
- Frontmatter tag arrays enable user-driven classification alongside formal structure
- Tag evolution tracking through file update timestamps and version control
- Flexible tagging vocabulary that adapts to community usage patterns

**Emergent Organization Patterns:**
- File creation follows templates but allows evolution based on community usage
- Directory structure can adapt through reorganization when emergent patterns prove more effective
- Cross-reference linking captures community-identified relationships beyond formal hierarchy

### Dynamic Classification Application

**Adaptive File Organization:**
- Status updates reflect evolving classification as work progresses
- Relationship links can be updated to reflect changing categorical relationships
- File content and structure adapt based on usage patterns and effectiveness feedback

**Context-Aware Organization:**
- Different linking patterns serve different user contexts and goals
- Frontmatter relationships support multiple navigation paths through same content
- File naming enables context-specific discovery while maintaining organizational consistency

## File Creation Guidelines with Categorization

### Enhanced Template Usage

**Categorization-Aware Templates:**
- Templates include guidance for appropriate taxonomic classification
- Frontmatter templates support multi-dimensional classification through comprehensive tag and relationship fields
- Content structure templates accommodate different categorization approaches

**Classification Decision Support:**
- File creation process includes categorization strategy selection guidance
- Template selection based on content characteristics and intended categorization approach
- Validation checklist ensures proper categorization integration

### Systematic File Organization

**Creation Process Integration:**
1. **Content Analysis**: Assess content characteristics to determine appropriate categorization strategies
2. **Strategy Selection**: Choose hierarchical, folksonomy, multi-dimensional, or dynamic approaches based on content needs
3. **Template Application**: Use appropriate template with categorization-aware structure
4. **Relationship Establishment**: Create appropriate links following selected categorization strategy
5. **Validation**: Verify categorization consistency and discoverability

**Quality Assurance Integration:**
- File creation includes categorization consistency checking
- Relationship validation ensures categorization integrity across linked files
- Regular review processes maintain categorization effectiveness and prevent drift
