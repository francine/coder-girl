# Linking System

```yaml
---
type: domain
tags: [linking, relationships, context-assembly]
created: 2025-01-20
updated: 2025-01-20
status: active
up: "[[PRP System.md]]"
related: "[[Methodology.md]], [[File Structure.md]]"
---
```

## Link Types and Relationships

### Core Link Types

<<<<<<< HEAD
#### Traditional Link Types
=======
>>>>>>> b7b8c36256179d4c310e1684da23819f4967b005
- **`up`**: Parent-child hierarchical relationship
- **`related`**: Lateral connections between similar content
- **`dependencies`**: Required prerequisites for implementation
- **`feature`**: Parent feature that task implements

<<<<<<< HEAD
#### Semantic Hierarchical Relationship Types
- **`inherits`**: Child concepts inherit properties and behaviors from parent domains
- **`inherited-by`**: Reverse inheritance relationship (parent to child)
- **`composed-of`**: Parent contains child as essential structural component
- **`composes`**: Child is integral component of parent (reverse composition)
- **`specializes`**: Child is specific implementation of general parent concept
- **`generalized-by`**: Parent is general concept of specific child (reverse specialization)
- **`aggregates`**: Parent coordinates collection of independent child elements
- **`part-of`**: Child is independent element within parent collection (reverse aggregation)

#### Semantic Lateral Relationship Types
- **`similar-to`**: Concepts share common characteristics and approaches (symmetric)
- **`complements`**: Concepts work synergistically together for enhanced functionality
- **`complemented-by`**: Reverse complementarity relationship
- **`alternative-to`**: Different approaches to solving same fundamental problem (symmetric)
- **`precedes`**: Concept must be completed before target concept (temporal/logical ordering)
- **`follows`**: Concept comes after prerequisite concept (reverse sequence)

=======
>>>>>>> b7b8c36256179d4c310e1684da23819f4967b005
## Frontmatter Linking Rules

### Feature Files MUST Link To

```yaml
up: "[[Primary Domain.md]]"           # Parent domain containing this feature
dependencies: "[[Required Context.md]]"  # Domain knowledge needed for implementation
related: "[[Similar Feature.md]]"     # Optional lateral connections
```

### Task Files MUST Link To

```yaml
up: "[[Primary Domain.md]]"           # Domain containing implementation patterns  
feature: "[[Parent Feature.md]]"      # Feature this task implements
related: "[[Related Task.md]]"        # Optional task dependencies
```

### Domain Files MUST Link To

```yaml
up: "[[Parent Domain.md]]"            # Higher-level domain (if applicable)
related: "[[Related Domain.md]]"      # Cross-cutting concerns
```

## Link Traversal Rules

### Depth Limits by Link Type

<<<<<<< HEAD
#### Traditional Link Types
- **`dependencies`**: Follow to depth 3 maximum
- **`up`**: Follow complete chain to root (no depth limit)  
- **`related`**: Follow to depth 1 only
- **`feature`**: Always include complete content (depth 1)

#### Semantic Hierarchical Relationship Depth Limits
- **`inherits`/`inherited-by`**: Follow to depth 5 maximum (conceptual inheritance chains)
- **`composed-of`/`composes`**: Follow to depth 4 maximum (structural composition)
- **`specializes`/`generalized-by`**: Follow to depth 3 maximum (implementation specialization)
- **`aggregates`/`part-of`**: Follow to depth 2 maximum (organizational collections)

#### Semantic Lateral Relationship Depth Limits
- **`similar-to`**: Follow to depth 1 only (avoid similarity networks)
- **`complements`/`complemented-by`**: Follow to depth 2 maximum (synergy chains)
- **`alternative-to`**: Follow to depth 1 only (direct alternatives)
- **`precedes`/`follows`**: Follow to depth 3 maximum (sequential chains)

### Traversal Priority Order

#### Enhanced Priority Order with Semantic Relationships
1. **Dependencies first** - Load deepest traditional dependencies and semantic prerequisites
   - Traditional `dependencies` 
   - Semantic `precedes` relationships (prerequisite sequence)
2. **Hierarchical inheritance chain** - Load conceptual and behavioral inheritance
   - `inherits` relationships (conceptual inheritance patterns) 
   - Traditional `up` chain (structural hierarchy)
3. **Compositional structure** - Load essential structural components
   - `composed-of` relationships (integral components)
   - `specializes` relationships (implementation patterns)
4. **Organizational context** - Load collections and groupings
   - `aggregates` relationships (coordinated collections)
   - Traditional `feature` context (parent feature)  
5. **Lateral connections** - Load peer-level relationships
   - `complements` relationships (synergistic concepts)
   - Traditional `related` content (similar content)
   - `similar-to` relationships (parallel approaches)
   - `alternative-to` relationships (different approaches)
6. **Target file** - Load original task/target
=======
- **`dependencies`**: Follow to depth 3 maximum
- **`up`**: Follow complete chain to root (no depth limit)
- **`related`**: Follow to depth 1 only
- **`feature`**: Always include complete content (depth 1)

### Traversal Priority Order

1. **Dependencies first** - Load deepest dependencies
2. **Up chain** - Load implementation patterns and architecture
3. **Related content** - Load lateral connections
4. **Feature context** - Load parent feature
5. **Target file** - Load original task/target
>>>>>>> b7b8c36256179d4c310e1684da23819f4967b005

## Linking Strategies

### Hierarchical Navigation

Use `up` field to define parent-child relationships:

```yaml
up: "[[Authentication Backend.md]]"  # Points to parent context
```

**Purpose**: Establishes clear knowledge hierarchy and inheritance patterns

### Cross-References  

Use `related` field for lateral connections:

```yaml
related: "[[JWT Implementation.md]]"  # Points to related content
```

**Purpose**: Creates knowledge networks without hierarchical dependency

### Dependencies

Use `dependencies` field for required prerequisites:

```yaml
dependencies: "[[Database Schema.md]]"  # Must exist before this
```

**Purpose**: Defines implementation order and required knowledge

### Feature Relationships

Use `feature` field to link tasks to parent features:

```yaml
feature: "[[Auth System Feature.md]]"  # Parent feature context
```

**Purpose**: Groups related tasks under feature umbrellas

## Context Assembly Through Links

### Enhanced Link Resolution Algorithm

Integration of knowledge graph navigation strategies with traditional context assembly for intelligent, adaptive context building:

#### Strategic Navigation-Aware Assembly

**Phase 1: Navigation Strategy Selection**
```yaml
assembly_strategy_selection:
  context_analysis:
    - assess_task_complexity
    - determine_user_expertise_level  
    - evaluate_time_constraints
    - identify_implementation_goals
  
  strategy_mapping:
    comprehensive_discovery: "breadth_first_exploration"
    deep_expertise_building: "depth_first_investigation"
    balanced_implementation: "hybrid_traversal"
    quick_context_assembly: "weighted_priority_traversal"
```

**Phase 2: Weighted Context Assembly**
```yaml
weighted_context_assembly:
  initialization:
    - parse_target_file_frontmatter
    - extract_all_relationship_types
    - calculate_relationship_weights
    - apply_contextual_weight_adjustments
    - set_cognitive_load_budget
  
  priority_based_resolution:
    1. critical_dependencies: weight >= 0.8, depth <= 4
    2. supporting_context: weight 0.6-0.79, depth <= 2  
    3. contextual_relevance: dynamic weight, depth <= 3
    4. optional_references: weight < 0.6, depth = 1
    5. feature_context: complete inclusion
    6. target_file: final integration
```

**Phase 3: Navigation Pattern Application**
- **Breadth-First**: When comprehensive understanding needed before specialization
- **Depth-First**: When following critical dependency chains or implementation sequences
- **Hybrid**: When balancing breadth and depth based on relationship weights
- **Weighted Priority**: When cognitive load management is primary concern

#### Traditional Link Resolution Algorithm (Legacy)

Maintained for backward compatibility and simple context assembly scenarios:

1. **Parse target file** frontmatter
2. **Extract all link types** (up, related, dependencies, feature)
3. **Resolve dependencies** to maximum depth 3
4. **Follow up chain** completely to root
5. **Include related content** at depth 1
6. **Load feature content** completely
7. **Deduplicate** files appearing multiple times
8. **Order by dependency** hierarchy

### Navigation Strategy Integration Examples

#### Strategy-Driven Context Assembly

**Breadth-First Exploration Example:**
```text
Target: 🟡 Task 08 - Document Knowledge Graph Navigation Strategies.md

Navigation Strategy: Breadth-First (comprehensive understanding)
Weight Threshold: 0.6+ (supporting context and above)

Assembly Order:
Level 1 (Immediate Relationships):
├── up: [[Semantic Relationships.md]] (weight: 0.9)
├── feature: [[Semantic Linking Enhancement.md]] (weight: 1.0)
└── related: [[🟡 Task 07 - Create Relationship Weighting Guidelines.md]] (weight: 0.8)

Level 2 (Secondary Relationships):
├── [[Knowledge Organization.md]] (via up chain, weight: 0.8)
├── [[AI Context Engineering.md]] (via dependencies, weight: 0.7)
└── [[Linking System.md]] (via related, weight: 0.6)

Level 3 (Tertiary Context):
└── Additional supporting relationships as budget permits
```

**Depth-First Investigation Example:**
```text
Target: 🔴 Task 01 - Implement JWT Middleware.md

Navigation Strategy: Depth-First (critical dependency chain)
Weight Threshold: 0.8+ (critical dependencies)

Assembly Order:
1. Strongest dependency chain:
   🔴 Task 01 → [[Authentication Backend.md]] (1.0) 
   → [[Security Patterns.md]] (0.9) 
   → [[Cryptographic Standards.md]] (0.8)

2. Secondary critical chain:
   [[Authentication Backend.md]] → [[Database Schema.md]] (0.95)
   → [[User Entity Definition.md]] (0.9)

3. Feature context:
   [[Auth System Feature.md]] (complete inclusion)

4. Target integration with full dependency context
```

**Hybrid Traversal Example:**
```text
Target: 🟠 Task 15 - Optimize API Performance.md

Navigation Strategy: Hybrid (balanced approach)
Weight-Based Strategy Selection:

Critical Dependencies (Depth-First, weight ≥ 0.8):
├── [[Database Optimization.md]] (0.95) → depth 3
├── [[Caching Strategies.md]] (0.9) → depth 2
└── [[Load Balancing.md]] (0.85) → depth 2

Supporting Context (Breadth-First, weight 0.6-0.79):
├── [[Monitoring Patterns.md]] (0.7) → depth 1
├── [[Testing Strategies.md]] (0.65) → depth 1
└── [[Deployment Patterns.md]] (0.6) → depth 1

Optional References (Limited, weight < 0.6):
└── [[Alternative Frameworks.md]] (0.4) → excluded due to budget
```

### Link Chain Examples

#### Simple Chain (Traditional)

```text
🟡 Task 05 - Add User Validation.md
├── up: [[Authentication Backend.md]]
├── feature: [[User Registration Feature.md]]
└── related: [[🟢 Task 03 - Setup Database.md]]
```

**Resolution Order**:

1. `[[User Registration Feature.md]]` (feature)
2. `[[Authentication Backend.md]]` (up chain)
3. `[[🟢 Task 03 - Setup Database.md]]` (related)
4. Target task

#### Complex Chain

```text
🔴 Task 01 - Implement JWT Middleware.md
├── feature: [[Auth System Feature.md]]
│   ├── up: [[Authentication Backend.md]]
│   │   ├── up: [[Backend Architecture.md]]
│   │   └── related: [[Security Patterns.md]]
│   └── dependencies: [[Database Schema.md]]
│       └── up: [[Database Architecture.md]]
└── up: [[Authentication Backend.md]] (deduplicated)
```

**Resolution Order**:

1. `[[Database Schema.md]]` (deepest dependency)
2. `[[Database Architecture.md]]` (dependency up chain)
3. `[[Authentication Backend.md]]` (implementation patterns)
4. `[[Backend Architecture.md]]` (architecture up chain)
5. `[[Security Patterns.md]]` (related patterns)
6. `[[Auth System Feature.md]]` (feature context)
7. Target task

## Error Handling

### Missing Links

**Problem**: Referenced file doesn't exist

```yaml
up: "[[Missing Domain.md]]"  # ERROR: File not found
```

**Actions**:

- Skip link with warning in context
- Create placeholder file if critical
- Continue assembly with available links

### Circular Dependencies

**Problem**: File A links to File B, File B links to File A

```yaml
# File A.md
dependencies: "[[File B.md]]"

# File B.md  
dependencies: "[[File A.md]]"
```

**Actions**:

- Detect cycle during traversal
- Break cycle at detection point
- Include both files once in context
- Log warning about circular dependency

### Depth Limit Exceeded

**Problem**: Link chain exceeds maximum depth

```text
dependencies: A → B → C → D → E (exceeds depth 3)
```

**Actions**:

- Truncate chain at depth limit
- Include warning in assembled context
- Load files within limit only

### Invalid Link Format

**Problem**: Malformed wiki-style links

```yaml
up: "Invalid Link Format"  # Missing [[ ]]
related: [[Missing .md extension]]
```

**Actions**:

- Skip malformed links
- Log formatting error
- Continue with valid links

<<<<<<< HEAD
## Hierarchical Relationship Patterns

### Hierarchical Link Types

Enhanced link types that support sophisticated hierarchical structuring patterns:

#### Inheritance Relationships
- **`inherits`**: Child concepts inherit properties from parent domains
- **`specializes`**: Child represents specific implementation of parent concept  
- **`overrides`**: Child provides specialized behavior that replaces inherited patterns
- **`extends`**: Child adds capabilities while preserving parent functionality

#### Composition Relationships  
- **`composed-of`**: Parent contains child as integral component
- **`aggregates`**: Parent coordinates multiple independent children
- **`layers-on`**: Child builds on parent as foundational layer
- **`modules-into`**: Child can be recombined in different parent contexts

#### Cross-Hierarchical Relationships
- **`bridges-to`**: Creates connection between separate hierarchical trees
- **`cross-references`**: Lateral connection preserving primary hierarchy
- **`contextually-relates`**: Dynamic relationship activated by specific contexts
- **`mesh-integrates`**: Intersection point between hierarchical and network patterns

### Hierarchical Traversal Patterns

#### Inheritance Chain Traversal
Systematic navigation of conceptual inheritance relationships:

```yaml
# Inheritance traversal depth limits
inheritance_traversal:
  conceptual_inheritance: 5 levels  # Follow conceptual chains deeply
  behavioral_inheritance: 3 levels  # Implementation patterns moderate depth
  contextual_inheritance: 2 levels  # Environmental factors shallow depth
  selective_inheritance: 1 level    # Explicit overrides immediate only
```

#### Composition Hierarchy Navigation
Optimized paths through compositional structures:

- **Aggregative Composition**: Traverse all integral components at current level before descending
- **Associative Composition**: Follow independent component chains in dependency order  
- **Layered Composition**: Traverse layers in architectural order (foundation to application)
- **Modular Composition**: Dynamic traversal based on current assembly context

#### Cross-Hierarchical Path Finding
Navigation patterns that maintain hierarchical integrity while enabling lateral connections:

- **Bridge Traversal**: Follow bridge concepts to connect separate hierarchical trees
- **Network Overlay**: Navigate lateral connections without breaking primary hierarchical paths
- **Contextual Activation**: Dynamically include cross-hierarchical relationships based on implementation goals
- **Mesh Integration**: Balance hierarchical and network navigation at integration points

### Hierarchical Validation Rules

#### Relationship Consistency Validation
Ensuring hierarchical relationships maintain logical coherence:

- **Inheritance Validation**: Verify child concepts appropriately inherit from parent domains
- **Composition Validation**: Confirm compositional relationships reflect actual structural dependencies
- **Specialization Validation**: Ensure specialized concepts represent valid implementations of general patterns
- **Aggregation Validation**: Verify aggregated elements maintain appropriate independence levels

#### Depth Management Validation
Enforcing hierarchical depth management principles:

- **Three-Plus-One Compliance**: Validate hierarchies respect maximum depth guidelines
- **Cognitive Load Assessment**: Check that hierarchical depth doesn't exceed usability thresholds
- **Breadth-Depth Balance**: Ensure appropriate distribution between hierarchy width and depth
- **Dynamic Depth Appropriateness**: Validate depth matches domain complexity and user expertise

#### Cross-Hierarchical Integrity Validation
Maintaining hierarchical integrity while supporting lateral connections:

- **Bridge Concept Validation**: Verify bridge concepts appropriately connect separate hierarchical structures
- **Cross-Reference Coherence**: Ensure lateral links don't compromise primary hierarchical relationships
- **Contextual Overlay Integrity**: Validate dynamic relationships activate appropriately based on context
- **Mesh Integration Balance**: Confirm hierarchical-network integration points maintain structural coherence

### Advanced Assembly Algorithms

#### Hierarchical-Aware Context Assembly
Enhanced context assembly that leverages hierarchical structuring patterns:

1. **Inheritance Chain Resolution**: Resolve conceptual inheritance relationships following specialized traversal patterns
2. **Compositional Assembly**: Assemble compositional hierarchies respecting structural dependencies
3. **Cross-Hierarchical Integration**: Include lateral connections while preserving primary hierarchical context
4. **Dynamic Depth Adaptation**: Adjust traversal depth based on hierarchical complexity and user needs

#### Pattern-Specific Traversal Rules
Specialized traversal approaches for different hierarchical patterns:

```yaml
# Pattern-specific depth limits and traversal rules  
pattern_traversal_rules:
  inheritance_patterns:
    conceptual_inheritance: 
      max_depth: 5
      traversal_order: "breadth_first"
      include_siblings: true
    behavioral_inheritance:
      max_depth: 3  
      traversal_order: "dependency_first"
      include_overrides: true
      
  composition_patterns:
    aggregative_composition:
      max_depth: 4
      traversal_order: "integral_components_first"  
      include_dependencies: true
    modular_composition:
      max_depth: 3
      traversal_order: "context_driven"
      dynamic_assembly: true
      
  cross_hierarchical_patterns:
    bridge_concepts: 
      max_depth: 2
      traversal_order: "bridge_first"
      maintain_hierarchy: true
    contextual_overlays:
      max_depth: 1
      traversal_order: "context_activated"
      dynamic_inclusion: true
```

=======
>>>>>>> b7b8c36256179d4c310e1684da23819f4967b005
## Link Validation Rules

### Pre-Assembly Validation

#### Traditional Link Validation
- [ ] All linked files exist in filesystem
- [ ] Link format follows `[[Filename.md]]` pattern
- [ ] No circular dependencies detected
- [ ] Required frontmatter fields present
- [ ] Link depth limits respected

#### Semantic Relationship Type Validation
- [ ] Hierarchical relationship types are valid and consistent
- [ ] Inheritance chains maintain logical progression (no circular inheritance)
- [ ] Compositional relationships reflect actual structural dependencies
- [ ] Specialization relationships maintain behavioral substitutability
- [ ] Aggregation relationships preserve child independence
- [ ] Cross-hierarchical connections preserve hierarchical integrity

#### Bidirectional Relationship Consistency Validation
- [ ] Symmetric relationships maintain identical semantic meaning in both directions
- [ ] Asymmetric relationships have appropriate different meanings that maintain logical consistency
- [ ] Inverse relationships are properly paired with their semantic opposites
- [ ] Contextual reciprocity patterns adapt meaning appropriately based on navigation direction
- [ ] Automated reciprocal relationship creation functions correctly
- [ ] No orphaned one-way relationships exist where bidirectional relationships are expected

#### Semantic Relationship Conflict Detection
- [ ] No conflicting relationship types between same concept pairs
- [ ] Inheritance vs aggregation conflicts prevented
- [ ] Composition vs independence conflicts detected
- [ ] Similarity vs alternative conflicts identified
- [ ] Circular sequence dependencies prevented (A precedes B precedes A)
- [ ] Bidirectional semantic consistency maintained using automated validation
- [ ] Relationship strength compatibility verified across both directions
- [ ] Missing inverse relationships detected and reported

### Bidirectional Consistency Validation Mechanisms

#### Automated Bidirectional Link Detection
- **Orphaned Relationship Scanning**: Systematic identification of one-way relationships that should be bidirectional
- **Reciprocal Link Verification**: Automated checking that forward relationships have appropriate reverse counterparts
- **Semantic Consistency Checking**: Validation that bidirectional relationships maintain logical coherence
- **Type Mismatch Detection**: Identification of relationships where forward and reverse types don't properly align

#### Consistency Enforcement Algorithms
- **Symmetric Link Maintenance**: Automatic creation of reciprocal symmetric relationships (similar-to, alternative-to)
- **Asymmetric Pairing**: Automated generation of appropriate reverse relationships for asymmetric patterns (precedes/follows)
- **Inverse Relationship Creation**: Automatic pairing of inverse relationships (specializes/generalized-by, aggregates/part-of)
- **Update Propagation**: Ensuring relationship changes reflect appropriately in both directions

#### Conflict Resolution Patterns
- **Priority-Based Resolution**: Use relationship criticality and strength to resolve bidirectional conflicts
- **Context-Aware Resolution**: Apply implementation context to resolve ambiguous relationship conflicts
- **User-Guided Resolution**: Clear interfaces for manual resolution when automated approaches are insufficient
- **Validation Feedback**: Comprehensive reporting of detected conflicts and automated resolution actions

### Post-Assembly Validation

#### Traditional Assembly Validation
- [ ] Context includes all reachable files
- [ ] No duplicate content in assembly
- [ ] Dependency order maintained
- [ ] All required knowledge present
- [ ] Link warnings documented

#### Bidirectional Relationship Assembly Validation
- [ ] All bidirectional relationships properly represented in assembled context
- [ ] Symmetric relationships maintain consistent meaning throughout context assembly
- [ ] Asymmetric relationships provide appropriate different perspectives based on traversal direction
- [ ] Inverse relationships complement each other appropriately in assembled context
- [ ] Contextual reciprocity adapts appropriately to assembly context and navigation goals
- [ ] No bidirectional relationship conflicts present in final assembled context

#### Semantic Relationship Assembly Validation  
- [ ] Hierarchical patterns correctly assembled
- [ ] Inheritance chains properly resolved with appropriate depth
- [ ] Compositional structures maintain structural integrity
- [ ] Specialization relationships preserve conceptual coherence
- [ ] Aggregation collections maintain element independence
- [ ] Cross-hierarchical relationships appropriately integrated
- [ ] Depth management principles respected per relationship type

#### Semantic Context Assembly Quality
- [ ] Semantic relationship types enable precise knowledge representation
- [ ] Relationship traversal provides comprehensive but focused context
- [ ] Sequential dependencies respected in assembly order
- [ ] Complementary relationships enhance context synergy
- [ ] Similar concepts provide appropriate alternative perspectives
- [ ] Alternative approaches support informed decision-making
- [ ] Bidirectional navigation supports effective knowledge discovery and context understanding
- [ ] Overall semantic network supports effective AI comprehension with maintained bidirectional consistency
