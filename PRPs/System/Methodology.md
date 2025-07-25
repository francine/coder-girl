# Methodology

```yaml
---
type: domain
tags: [methodology, context-engineering, workflow]
created: 2025-01-20
updated: 2025-01-20
status: active
up: "[[PRP System.md]]"
related: "[[File Structure.md]], [[Linking System.md]]"
---
```

## Context Engineering Framework

<<<<<<< HEAD
The PRP system implements a Context Engineering pipeline that transforms specifications into distributed documentation and reassembles context dynamically for implementation. This framework incorporates modern knowledge organization principles to optimize both human cognition and AI processing effectiveness.

### Modern Knowledge Organization Integration

The methodology integrates contemporary knowledge organization theories to enhance systematic information structuring:

#### Semantic Network Principles
- **Concept Node Design**: Each PRP file serves as a semantic node with clear conceptual boundaries and typed relationships
- **Relationship Edge Optimization**: Frontmatter links preserve semantic meaning and enable efficient context traversal
- **Network Topology Management**: File structures optimized for graph traversal while maintaining human navigability
- **Semantic Density Balance**: Information distribution prevents cognitive overload while ensuring comprehensive coverage

#### Ontological Framework Application
- **Domain Modeling**: Systematic representation of knowledge areas using formal hierarchical structures
- **Property Inheritance**: Child concepts automatically inherit patterns and relationships from parent domains
- **Aximatic Constraints**: Logical rules governing valid file relationships and dependency structures
- **Conceptual Hierarchy Validation**: Automated checking that knowledge structures maintain logical consistency

#### Cognitive Load Optimization
- **Progressive Context Assembly**: Information presented in manageable chunks following dependency hierarchies
- **Intrinsic Load Management**: Complex domains decomposed into atomic units matching cognitive processing capacity
- **Extraneous Load Elimination**: Organizational structures minimize unnecessary cognitive overhead
'- **Germane Load Enhancement**: File organization facilitates pattern recognition and knowledge schema development
'''
### DTF Framework

- **Domains**: Reusable knowledge and context patterns organized as atomic knowledge units
- **Tasks**: Specific action items with severity tracking and semantic relationship preservation
- **Features**: Development efforts grouping related tasks with hierarchical inheritance patterns
=======
The PRP system implements a Context Engineering pipeline that transforms specifications into distributed documentation and reassembles context dynamically for implementation.

### DTF Framework

- **Domains**: Reusable knowledge and context patterns
- **Tasks**: Specific action items with severity tracking
- **Features**: Development efforts grouping related tasks
>>>>>>> b7b8c36256179d4c310e1684da23819f4967b005

## generate-prp Command

### Input Processing

**Input**: `PRPs/PROMPT.md` specification file
**Output**: Network of linked atomic documents

### Processing Algorithm

1. **Parse** PROMPT.md for distinct features and requirements
2. **Create** one feature file per distinct functionality using `Templates/feature-template.md`
3. **Create** task files for implementation steps using severity emojis
4. **Create** domain files for reusable patterns and knowledge
5. **Link** all files via frontmatter relationships

### Feature Detection Pattern

- Each noun phrase describing functionality = potential feature
- Each verb phrase describing action = potential task
- Each knowledge area mentioned = potential domain

### Domain Decomposition Integration

Complex knowledge areas identified during feature detection should be systematically decomposed using appropriate strategies from [[Knowledge Organization.md]]:

#### Decomposition Strategy Selection

**Assessment Criteria:**
1. **Organizational Driver**: What is the primary organizing principle? (capabilities, architecture, users, processes)
2. **Complexity Level**: How complex is the knowledge area? (high complexity → deeper decomposition required)
3. **Team Structure**: How are development teams organized? (align decomposition with team responsibilities)
4. **Evolution Patterns**: How will this domain change over time? (choose sustainable decomposition approaches)

**Strategy Application:**
- **Functional Decomposition**: Use when PROMPT.md describes distinct capabilities or service areas
- **Technical Decomposition**: Apply when technical architecture or implementation layers are primary concerns
- **User-Centric Decomposition**: Select when user workflows and experience optimization drive organization
- **Process Decomposition**: Choose when business processes or operational workflows are central organizing elements

#### Decomposition Implementation Process

1. **Initial Domain Identification**: Extract high-level knowledge areas from PROMPT.md specification
2. **Complexity Assessment**: Evaluate each domain for internal complexity and subdivision opportunities
3. **Strategy Selection**: Choose appropriate decomposition strategy based on assessment criteria
4. **Subdomain Creation**: Break complex domains into atomic knowledge units following selected strategy
5. **Relationship Mapping**: Establish proper frontmatter links between parent domains and subdomains
6. **Validation**: Ensure decomposed structure maintains logical coherence and supports context assembly

#### Decomposition Quality Checkpoints

- **Atomic Responsibility**: Each subdomain addresses exactly one coherent knowledge area
- **Clear Boundaries**: Domain boundaries are well-defined with minimal overlap
- **Logical Hierarchy**: Parent-child relationships reflect actual conceptual or implementation dependencies
- **Context Completeness**: Each domain contains sufficient context for standalone comprehension
- **Assembly Efficiency**: Decomposed structure supports efficient context assembly for task execution

### Success Criteria

- [ ] All features from PROMPT.md have corresponding feature files
- [ ] All tasks have proper severity classification and numbering
- [ ] All domains contain reusable knowledge patterns
- [ ] All frontmatter links resolve to existing files
- [ ] Dependency graph is acyclic and complete

## execute-prp Command

### Input Processing

**Input**: Single task file (e.g., `🔴 Task 01 - Implement Auth.md`)
**Output**: Complete implementation with full context

### Context Assembly Algorithm

1. **Start** with target task file
2. **Extract** frontmatter links: `up`, `feature`, `dependencies`, `related`
3. **Apply relationship weighting** to determine link priorities and filtering thresholds
4. **Follow** each link based on weight-filtered selection criteria
5. **Continue** recursively to depth 3 maximum, applying depth-based weight filtering
6. **Resolve** dependency order using weighted prioritization: dependencies first, then up chain, then related
7. **Load** complete content of all linked files, applying cognitive load management
8. **Apply AI context engineering optimization** to assembled context
9. **Provide** weight-optimized, AI-optimized context to implementation AI

### AI Context Engineering Integration

The context assembly process integrates AI optimization principles from [[AI Context Engineering.md]] to maximize AI comprehension and task execution effectiveness:

#### Information Sequencing Optimization

Advanced integration of information sequencing guidelines from [[AI Context Engineering.md]] to optimize context assembly for AI comprehension:

**Dependency-First Assembly Algorithm**:
```yaml
dependency_first_integration:
  pre_assembly_analysis:
    - map_dependency_network: analyze all frontmatter links to identify prerequisite chains
    - validate_dependency_integrity: ensure no circular dependencies in assembled context
    - weight_dependency_criticality: assign importance levels based on relationship types
    - calculate_optimal_sequence: apply topological sorting to dependency graph
  
  assembly_execution:
    - load_foundational_prerequisites: establish base knowledge before dependent concepts
    - sequence_intermediate_dependencies: progress through dependency levels systematically
    - integrate_dependent_concepts: add concepts only after prerequisites are loaded
    - validate_comprehension_flow: verify logical progression maintains understanding coherence
```

**General-to-Specific Context Layering**:
- **Domain Overview Integration**: Load parent domains first to establish conceptual scaffolding before specific implementations
- **Architectural Pattern Loading**: Present structural relationships and design principles before detailed procedures
- **Implementation Detail Sequencing**: Progress from general approaches to specific methodologies and techniques
- **Example Integration**: Provide concrete implementations only after abstract concepts are established

**Problem-Solution Assembly Pairing**:
- **Challenge-Resolution Coupling**: Load related tasks and constraints immediately alongside their solutions
- **Contextual Problem Framing**: Establish environmental factors and constraints before presenting solutions
- **Reasoning Chain Construction**: Create explicit causal connections between problems and solution approaches
- **Alternative Solution Integration**: Present solution comparisons and trade-offs within problem context

**Conceptual Building Block Assembly**:
- **Atomic Concept Establishment**: Ensure individual knowledge units are complete before combination
- **Incremental Knowledge Combination**: Build complex understanding systematically from established foundations
- **Knowledge Bridge Integration**: Create explicit connections between related concepts during assembly
- **Comprehension Validation**: Verify understanding coherence at each assembly level

#### Cognitive Load Management
- **Chunk Optimization**: Context broken into manageable sections with clear boundaries and transitions
- **Context Window Efficiency**: Redundant information eliminated while preserving essential knowledge for task completion
- **Attention Focus**: Critical information for current task highlighted through structural positioning and formatting
- **Noise Reduction**: Task-specific filtering removes information not relevant to current implementation goals

#### Pattern Recognition Enhancement
- **Consistent Structural Patterns**: Assembled context follows predictable organizational structures AI can recognize and leverage
- **Analogical Frameworks**: New concepts connected to familiar patterns and established knowledge from linked domains
- **Meta-Pattern Documentation**: Explicit pattern identification helps AI recognize and apply recurring structures

#### Inference Support Mechanisms
- **Explicit Relationship Documentation**: Semantic relationships from linked files provide clear connection reasoning
- **Causal Chain Construction**: Dependencies and prerequisites create logical reasoning scaffolds for AI understanding
- **Constraint Documentation**: Limitations and boundaries from domain files guide AI reasoning within appropriate scope
- **Example Integration**: Concrete examples from linked content support abstract concept understanding

### Enhanced Assembly Process

The AI-optimized context assembly integrates comprehensive information sequencing guidelines through this enhanced process:

#### Phase 1: Context Collection and Analysis
1. **Initial Link Traversal**: Gather all linked content following traditional depth and relationship rules
2. **Dependency Network Mapping**: Analyze complete dependency structure using graph theory principles
3. **Sequencing Strategy Selection**: Choose optimal sequencing approach based on content characteristics and task goals
4. **Content Categorization**: Classify content by information type (foundational, implementation, examples, validation)

#### Phase 2: Sequencing Optimization
5. **Dependency-First Ordering**: Apply comprehensive dependency analysis to establish prerequisite sequences
   - Identify foundational concepts requiring precedence
   - Validate dependency chains for logical consistency
   - Apply topological sorting to eliminate forward references
6. **General-to-Specific Layering**: Structure content progression from broad context to specific details
   - Load domain overviews before implementation specifics
   - Present architectural patterns before detailed procedures
   - Establish conceptual scaffolding before complex implementations
7. **Problem-Solution Pairing**: Implement challenge-resolution coupling throughout assembled context
   - Identify problems and constraints in content
   - Pair challenges immediately with resolution approaches
   - Create explicit reasoning bridges between problems and solutions

#### Phase 3: Conceptual Building Integration
8. **Atomic Concept Validation**: Ensure individual knowledge units are complete and self-contained
9. **Building Block Assembly**: Systematically combine atomic concepts into complex understanding
   - Apply incremental combination patterns
   - Construct explicit knowledge bridges between concepts
   - Validate comprehension coherence at each building level
10. **Multi-Dimensional Sequencing**: Apply combined sequencing principles for optimal organization
    - Integrate dependency-driven general-to-specific progression
    - Apply problem-solution building blocks approach
    - Implement context-aware sequencing based on task goals

#### Phase 4: Quality Assurance and Optimization
11. **Cognitive Load Assessment**: Evaluate information density and apply chunking strategies
12. **Pattern Recognition Preparation**: Structure content using consistent patterns and meta-pattern documentation
13. **Inference Support Integration**: Ensure explicit relationships, causal chains, and reasoning scaffolds are present
14. **Logical Flow Validation**: Verify information sequence follows comprehensive sequencing principles
15. **Final Optimization**: Apply noise reduction and attention focus techniques for task-specific optimization

### Relationship Weighting Integration

The context assembly process leverages relationship weighting from [[Semantic Relationships.md]] to enable intelligent context prioritization and cognitive load management:

#### Weight-Based Link Selection

**Pre-Assembly Filtering**:
- **Context Assessment**: Analyze current task requirements to determine contextual relevance multipliers
- **User Profile Application**: Apply user expertise level adjustments to base relationship weights  
- **Phase-Specific Adjustment**: Modify weights based on implementation phase (planning, development, testing, maintenance)
- **Threshold Calculation**: Calculate dynamic filtering thresholds based on cognitive load budget and task complexity

**Filtering Strategy Application**:
- **Depth 1 Links**: Include relationships ≥ 0.6 adjusted weight (supporting context and above)
- **Depth 2 Links**: Include relationships ≥ 0.7 adjusted weight (strong supporting context and critical dependencies)
- **Depth 3 Links**: Include only relationships ≥ 0.8 adjusted weight (critical dependencies only)
- **Adaptive Thresholds**: Adjust filtering thresholds based on available cognitive budget and context complexity

#### Weighted Context Prioritization

**Assembly Order Enhancement**:
1. **Critical Dependencies** (Weight ≥ 0.8): Load first to establish foundational knowledge
2. **Strong Supporting Context** (Weight 0.7-0.79): Load second to provide implementation guidance and patterns
3. **Contextual Relevance** (Dynamic Weight): Load based on current task relevance calculation
4. **Optional References** (Weight < 0.6): Load last and only if cognitive budget allows

**Cognitive Load Management**:
- **Information Budget Allocation**: Distribute context loading across Primary (60%), Extended (30%), and Enrichment (10%) budgets
- **Weight-Based Truncation**: Remove lowest-weight relationships first when context limits are exceeded
- **Progressive Disclosure**: Present critical relationships immediately with on-demand access to supporting context

#### Dynamic Weight Calculation

**Context-Sensitive Adjustment Formula**:
```
Final Weight = Base Weight × Context Multiplier × User Multiplier × Phase Multiplier
```

**Real-Time Weight Factors**:
- **Task Relevance**: 1.0-1.5 multiplier for relationships directly addressing current implementation goals
- **Expertise Adjustment**: 0.7-1.4 multiplier based on user knowledge level and domain familiarity
- **Implementation Phase**: 1.2-1.5 multiplier for relationships critical to current development phase
- **Cognitive Load State**: 0.8-1.2 multiplier based on current information processing capacity

#### Integration with AI Context Engineering

**Synergistic Optimization**:
- **Weighted Information Sequencing**: Combine relationship weights with dependency-first ordering for optimal information presentation
- **Prioritized Chunking**: Use relationship weights to determine optimal chunk boundaries and information grouping
- **Focused Pattern Recognition**: Emphasize high-weight relationships in pattern templates and analogical frameworks
- **Selective Noise Reduction**: Apply weight-based filtering to remove low-relevance information while preserving critical context

**Enhanced Assembly Effectiveness**:
- **Relevance Maximization**: Weight-based selection ensures assembled context directly supports task completion
- **Cognitive Efficiency**: Relationship weights prevent information overload while maintaining comprehensive coverage
- **Adaptive Context**: Dynamic weighting enables context assembly that adjusts to changing task requirements and user needs
- **Quality Optimization**: High-weight relationships receive priority in conflict resolution and duplicate context scenarios

#### Context Filtering Strategies Integration

The context assembly process now incorporates comprehensive context filtering strategies from [[AI Context Engineering.md]] to optimize cognitive load management and preserve essential information through intelligent filtering:

**Need-Based Assembly Integration**:
```yaml
need_based_filtering_in_assembly:
  goal_analysis_phase:
    - extract_task_objectives: parse task acceptance criteria and implementation requirements
    - map_implementation_success_criteria: identify essential knowledge for task completion
    - assess_context_complexity: evaluate information requirements vs cognitive capacity
    - define_relevance_boundaries: establish clear inclusion/exclusion criteria
  
  context_selection_phase:
    - apply_direct_relevance_filter: include only context essential for goal achievement
    - evaluate_supporting_relevance: include context that enhances implementation quality  
    - assess_contextual_relevance: include background preventing critical errors
    - exclude_tangential_context: remove information not supporting current objectives
  
  adaptive_refinement_phase:
    - apply_phase_based_adjustments: modify context based on development phase
    - implement_expertise_calibration: adjust context depth for user knowledge level
    - factor_constraint_considerations: account for technical and business limitations
    - integrate_feedback_learning: refine filtering based on implementation outcomes
```

**Progressive Disclosure Implementation**:
- **Foundation Layer Assembly**: Load core concepts and basic relationships (20% cognitive load) before detailed implementation
- **Implementation Layer Integration**: Add specific procedures and technical details (50% cognitive load) as task complexity requires
- **Advanced Integration Layer**: Include complex patterns and edge cases (30% cognitive load) only when needed for comprehensive coverage
- **Understanding-Based Progression**: Use task progress and AI feedback to trigger appropriate disclosure layers

**Relevance Scoring Integration**:
```yaml
scoring_based_assembly:
  multi_dimensional_evaluation:
    task_relevance_scoring: 0.4 weight for goal alignment and implementation necessity
    relationship_strength_scoring: 0.3 weight for semantic connection strength and dependency criticality
    processing_efficiency_scoring: 0.2 weight for AI comprehension speed and context window optimization
    temporal_relevance_scoring: 0.1 weight for content recency and maintenance activity
  
  assembly_threshold_application:
    critical_inclusion: score >= 0.8 (always include in context assembly)
    supporting_inclusion: score >= 0.6 (include when cognitive budget permits)
    optional_inclusion: score >= 0.4 (include only for comprehensive understanding goals)
    exclusion_threshold: score < 0.3 (exclude to preserve cognitive resources)
```

**Adaptive Filtering Implementation**:
- **Capability Assessment**: Monitor AI processing speed, comprehension accuracy, and context window utilization
- **Dynamic Threshold Adjustment**: Modify inclusion thresholds based on AI performance patterns and feedback
- **Context-Sensitive Adaptation**: Adjust filtering approach based on task context, user expertise, and implementation phase
- **Performance-Based Learning**: Continuously improve filtering effectiveness through outcome analysis and success correlation

**Integrated Assembly Enhancement**:
1. **Pre-Assembly Filtering**: Apply need-based analysis and relevance scoring before context traversal
2. **Weighted Traversal with Filtering**: Combine relationship weights with filtering thresholds for optimized link selection
3. **Progressive Assembly**: Use disclosure mechanisms to layer context complexity appropriately
4. **Adaptive Refinement**: Apply real-time filtering adjustments based on AI processing feedback and task evolution
5. **Quality Validation**: Ensure filtering preserves essential information while achieving cognitive load reduction goals

### Link Traversal Rules

- `dependencies`: Follow to depth 3
- `up`: Follow complete chain to root
- `related`: Follow to depth 1 only
- `feature`: Always include complete content

### Assembly Order

1. Load deepest dependencies first
2. Load dependency parents
3. Load implementation patterns (`up` chain)
4. Load related context
5. Load feature context
6. Load target task last

### Success Criteria

- [ ] Target task context fully assembled
- [ ] All dependencies loaded in correct order
- [ ] Implementation follows patterns from linked domains
- [ ] Task acceptance criteria met
- [ ] No broken links or missing context

## Context Assembly Examples

### Example 1: Simple Task

**Target**: `🟡 Task 05 - Add User Validation.md`

**Frontmatter**:

```yaml
up: "[[Authentication Backend.md]]"
feature: "[[User Registration Feature.md]]"
related: "[[🟢 Task 03 - Setup Database.md]]"
```

**Assembly Result**:

1. `🟡 Task 05 - Add User Validation.md` (target)
2. `[[User Registration Feature.md]]` (feature context)
3. `[[Authentication Backend.md]]` (implementation patterns)
4. `🟢 Task 03 - Setup Database.md` (related context)
5. Follow feature dependencies (depth 1)
6. Follow up chain to root

### Example 2: Complex Dependencies

**Target**: `🔴 Task 01 - Implement JWT Middleware.md`

**Context Chain**:

```text
🔴 Task 01 - Implement JWT Middleware.md
├── feature: [[Auth System Feature.md]]
│   ├── up: [[Authentication Backend.md]]
│   │   ├── up: [[Backend Architecture.md]]
│   │   └── related: [[Security Patterns.md]]
│   └── dependencies: [[Database Schema.md]]
│       └── up: [[Database Architecture.md]]
└── up: [[Authentication Backend.md]] (already loaded)
```

**Assembly Order**:

1. `[[Database Schema.md]]` (deepest dependency)
2. `[[Database Architecture.md]]` (dependency parent)
3. `[[Authentication Backend.md]]` (implementation patterns)
4. `[[Backend Architecture.md]]` (architecture parent)
5. `[[Security Patterns.md]]` (related context)
6. `[[Auth System Feature.md]]` (feature context)
7. `🔴 Task 01 - Implement JWT Middleware.md` (target)

## Context Validation

### Processing Instructions

**When processing target task**:

1. **Parse**: Extract frontmatter from target file
2. **Traverse**: Follow all link types per depth rules
3. **Deduplicate**: Remove duplicate files from context
4. **Order**: Arrange by dependency hierarchy
5. **Assemble**: Concatenate all content in dependency order
6. **Execute**: Implement using complete assembled context

**Validation Rules**:

- Verify all linked files exist
- Check for circular dependencies
- Ensure required frontmatter fields present
- Validate link depth limits respected
