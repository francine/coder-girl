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

## AI-Optimized Formatting Integration

The file structure framework incorporates AI-optimized formatting standards from [[AI Context Engineering.md]] to enhance AI comprehension and context assembly effectiveness.

### AI-Enhanced Frontmatter Standards

**Extended Frontmatter Fields for AI Processing:**
```yaml
---
# Core Classification (Required for all types)
type: domain|task|feature
tags: [primary-domain, implementation-type, complexity-level, ai-context-hints]
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: active|pending|completed|archived

# AI Optimization Fields (Recommended)
priority: critical|high|medium|low          # AI context assembly weighting
complexity: expert|intermediate|beginner    # AI audience adaptation
ai_context_weight: 0.1-1.0                 # Explicit relationship strength indicator

# Semantic Relationships (AI-Optimized)
up: "[[Parent Context.md]]"                # Critical dependency (weight: 0.9)
related: "[[Related Context.md]]"          # Supporting context (weight: 0.7)
dependencies: "[[Required Context.md]]"    # Prerequisites (weight: 0.85)
feature: "[[Associated Feature.md]]"       # Feature ownership (tasks only)
domain: "[[Primary Domain.md]]"            # Explicit domain classification

# AI Context Assembly Hints
context_assembly_priority: immediate|deferred|optional
cognitive_load_level: low|medium|high
pattern_recognition_tags: [structural-pattern, content-pattern, relationship-pattern]
---
```

**AI Processing Benefits:**
- **Explicit Weighting**: Priority and complexity fields guide AI context prioritization
- **Relationship Strength**: AI can use relationship types to determine context importance
- **Assembly Hints**: Context assembly priority helps AI manage cognitive load
- **Pattern Recognition**: Specific tags enable AI to identify and leverage recurring patterns

### File Naming Conventions for AI Optimization

**AI-Enhanced Domain File Names:**
```text
# Standard Format: {Title}.md
# AI Optimization: Use descriptive nouns, avoid articles, maintain consistency

Authentication Backend.md              # ✅ Clear, specific, noun-focused
State Management Frontend.md           # ✅ Descriptive hierarchy indication
Database Migrations.md                 # ✅ Clear domain boundary

# AI Processing Benefits:
- Descriptive titles enable better semantic matching
- Consistent patterns improve AI navigation
- Domain boundaries clear from filename alone
```

**AI-Enhanced Task File Names:**
```text
# Standard Format: {severity_emoji} Task {NN} - {Verb} {Short Description}.md
# AI Optimization: Action verbs, specific outcomes, clear severity indication

🔴 Task 01 - Fix Authentication Token Validation.md     # ✅ Clear action and scope
🟡 Task 02 - Implement JWT Middleware Integration.md    # ✅ Specific technical action
🟢 Task 03 - Review Security Documentation Coverage.md  # ✅ Clear review objective

# AI Processing Benefits:
- Severity emoji provides immediate priority context for AI
- Action verbs enable AI to understand task nature
- Specific descriptions improve context relevance matching
```

**AI-Enhanced Feature File Names:**
```text
# Standard Format: {Short Description} {Subject}.md
# AI Optimization: Feature scope clarity, implementation type indication

Auth System Architecture.md            # ✅ Clear scope and type
User Authentication Feature.md         # ✅ Functional area specification
Real Time Notifications System.md      # ✅ System boundary indication

# AI Processing Benefits:
- Clear scope boundaries enable better context assembly
- Implementation type helps AI understand feature complexity
- Consistent naming patterns improve AI navigation efficiency
```

### Content Structure Standards for AI Processing

**AI-Optimized Header Hierarchies in Files:**

All files should follow the hierarchical header patterns established in [[AI Context Engineering.md#Hierarchical Header Patterns]] to ensure consistent AI parsing:

```markdown
# Primary Concept (H1) - Single concept focus, descriptive nouns
## Functional Categories (H2) - Logical organization, parallel structure  
### Specific Implementations (H3) - Action-oriented, implementation-specific
#### Technical Details (H4) - Fine-grained, used sparingly
```

**AI-Optimized Section Ordering:**

Each file type follows predictable section patterns that enable AI pattern recognition:

**Domain Files:**
1. **Overview** - Purpose, scope, key concepts
2. **Core Principles** - Fundamental approaches, theoretical foundations  
3. **Implementation Patterns** - Practical applications, best practices
4. **Integration Guidelines** - Connections, dependencies, interfaces
5. **Validation and Quality Assurance** - Success criteria, testing approaches
6. **Features** - Related implementations, extension points

**Task Files:**
1. **Context** - Problem statement, background, desired outcome
2. **Relationships** - Feature connection, domain dependencies, related tasks
3. **Implementation** - Required actions, files to modify, key details
4. **Acceptance Criteria** - Completion requirements, success indicators
5. **Validation** - Verification procedures, testing commands

**Feature Files:**
1. **Purpose** - Objectives, user value, strategic alignment
2. **Scope** - Boundaries, integration requirements, constraints
3. **User Flow** - Interactions, workflows, scenarios
4. **Data Models** - Architecture, relationships, data flow
5. **API Specification** - Interfaces, integration points, contracts
6. **Technical Implementation** - Architecture, components, patterns
7. **Examples** - Demonstrations, references, applications
8. **Error Scenarios** - Failure modes, recovery, fallbacks
9. **Acceptance Criteria** - Completion requirements, quality standards
10. **Validation** - Testing strategies, verification, success metrics

### AI Context Assembly File Organization

**Context Relationship Strength in File Structure:**

File organization reflects relationship strengths for optimal AI context assembly:

```text
PRPs/
├── Domains/                    # Primary context sources (weight: 0.8-1.0)
│   ├── Parent Domain.md       # Root context (weight: 1.0)
│   ├── Child Domain.md        # Inherited context (weight: 0.9)
│   └── Related Domain.md      # Supporting context (weight: 0.7)
├── Tasks/                     # Implementation-specific context (weight: 0.6-0.9)
│   ├── Critical Tasks/        # High-priority context (weight: 0.9)
│   └── Supporting Tasks/      # Additional context (weight: 0.6)
├── Features/                  # Feature-specific boundaries (weight: 0.7-0.8)
│   ├── Core Features/         # Primary implementations (weight: 0.8)
│   └── Extension Features/    # Secondary implementations (weight: 0.7)
└── System/                    # Meta-context for framework (weight: 0.8)
    ├── Templates/             # Pattern libraries (weight: 0.6)
    └── Documentation/         # Framework guidance (weight: 0.8)
```

**AI Processing Optimization:**
- **Directory Structure**: Reflects context importance hierarchy for AI traversal
- **File Proximity**: Related files grouped for efficient context assembly
- **Relationship Clarity**: Directory organization makes dependencies explicit
- **Context Boundaries**: Clear boundaries enable AI to understand scope limits

### Validation Integration for AI Formatting

**AI Formatting Compliance Checking:**

File structure validation incorporates AI formatting standards verification:

```yaml
# AI Formatting Validation Checklist
ai_formatting_compliance:
  header_hierarchy:
    - check: "H1 headers use descriptive nouns without articles"
    - check: "H2 headers follow categorical organization"
    - check: "H3 headers are action-oriented or implementation-specific"
    - check: "Header levels maintain logical progression"
  
  list_formatting:
    - check: "Ordered lists used for sequential information"
    - check: "Unordered lists used for categorical information"
    - check: "List items have bold labels with descriptive content"
    - check: "Nested lists reflect conceptual hierarchies"
  
  code_formatting:
    - check: "Code blocks include language specification"
    - check: "Context comments explain code purpose"
    - check: "Variable names are descriptive and meaningful"
    - check: "Integration context provided for code examples"
  
  cross_references:
    - check: "Links include semantic relationship indicators"
    - check: "Bidirectional relationships maintained"
    - check: "Display text enhances AI understanding"
    - check: "Context preservation around links"
  
  validation_markers:
    - check: "Requirements use REQUIRED/ESSENTIAL/PREREQUISITE markers"
    - check: "Constraints use CONSTRAINT/LIMITATION/RESTRICTION indicators"
    - check: "Success criteria use checkbox format with clear descriptions"
    - check: "Warning indicators use appropriate emoji and formatting"
```

**Automated AI Formatting Validation:**

File creation and maintenance processes include automated validation of AI formatting compliance to ensure consistent optimization across all files.
