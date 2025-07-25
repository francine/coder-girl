# Categorization Strategy Guide

```yaml
---
type: domain
tags: [categorization, guide, practical-application, knowledge-organization]
created: 2025-07-25
updated: 2025-07-25
status: active
up: "[[Knowledge Organization.md]]"
related: "[[File Structure.md]], [[Management Guidelines.md]]"
---
```

## Overview

This guide provides practical instructions for applying knowledge categorization strategies across different content types within the PRP framework. It translates the theoretical frameworks from [[Knowledge Organization.md]] into actionable procedures for creating, organizing, and maintaining well-categorized content.

## Strategy Selection Decision Tree

### Step 1: Content Analysis

**Ask these questions about your content:**

1. **Complexity Assessment**:
   - Is this content simple with clear relationships? → Consider Hierarchical Taxonomy
   - Does content have multiple independent characteristics? → Consider Multi-Dimensional Classification
   - Are relationships unclear or evolving? → Consider Folksonomy or Dynamic approaches

2. **User Context Assessment**:
   - Will this content serve users with consistent needs? → Hierarchical or Multi-Dimensional
   - Do users have diverse perspectives on this content? → Folksonomy approaches
   - Do user needs change frequently? → Dynamic classification

3. **Evolution Assessment**:
   - Is this content relatively stable? → Hierarchical taxonomy
   - Does content change moderately? → Multi-dimensional with some folksonomy
   - Does content evolve rapidly? → Dynamic tagging frameworks

### Step 2: Strategy Mapping

**Primary Strategy Selection:**

| Content Characteristics | Recommended Primary Strategy | Secondary Strategy |
|-------------------------|-----------------------------|--------------------|
| Clear hierarchical relationships, stable content | Hierarchical Taxonomy | Multi-Dimensional for filtering |
| Multiple independent attributes, diverse user needs | Multi-Dimensional Classification | Folksonomy for user perspectives |
| User-driven content, community-based | Folksonomy | Dynamic for evolution |
| Rapidly changing, usage-driven | Dynamic Tagging | Hierarchical for core structure |

## Implementation Procedures

### Hierarchical Taxonomy Implementation

**For Domain Files:**

1. **Identify Parent-Child Relationships**:
   ```yaml
   # Parent Domain Example
   type: domain
   up: "[[Higher Level Domain.md]]"  # Parent in hierarchy
   related: "[[Sibling Domain.md]]"  # Same level domains
   ```

2. **Establish Taxonomic Tags**:
   ```yaml
   tags: [parent-category, specific-area, complexity-level, domain-type]
   ```

3. **Content Structure**:
   - Start with broad conceptual overview
   - Progress to more specific implementations
   - Include inheritance patterns from parent domains
   - Link to child domains at appropriate points

**For Task Files:**

1. **Taxonomic Classification in Naming**:
   ```
   🟡 Task 04 - Document Knowledge Categorization Strategies.md
   [severity] Task [number] - [Taxonomic Category] [Specific Action].md
   ```

2. **Hierarchical Relationships**:
   ```yaml
   up: "[[Implementation Domain.md]]"     # Domain providing patterns
   feature: "[[Parent Feature.md]]"       # Feature context
   related: "[[Related Task.md]]"         # Same level tasks
   ```

### Multi-Dimensional Classification Implementation

**Facet Identification:**

1. **Standard Facets for PRP Content**:
   - **Topic**: What subject area (authentication, deployment, testing)
   - **Complexity**: How difficult (beginner, intermediate, advanced, expert)
   - **Type**: What kind of content (domain, task, feature, guide)
   - **Status**: What state (active, pending, completed, archived)
   - **Priority**: How urgent (critical, major, medium, minor)

2. **Custom Facets by Domain**:
   - **Technical Content**: technology, architecture-layer, integration-type
   - **Process Content**: phase, stakeholder, approval-level
   - **User Content**: user-type, journey-stage, interaction-mode

**Tagging Implementation:**

```yaml
# Multi-dimensional tagging example
tags: [
  # Topic facet
  authentication, security, backend,
  # Complexity facet  
  intermediate,
  # Technology facet
  jwt, middleware, api,
  # Process facet
  implementation, testing, deployment
]
```

**File Organization:**

- Use primary facet for directory placement (Domains/, Tasks/, Features/)
- Use secondary facets for file naming and linking
- Create cross-references between content sharing facet values

### Folksonomy Implementation

**User-Driven Tagging Setup:**

1. **Tag Creation Guidelines**:
   - Users can add tags to existing tag arrays
   - Tags should be descriptive and meaningful to community
   - Avoid duplicate tags (check existing tags first)
   - Use lowercase with hyphens for multi-word tags

2. **Tag Evolution Tracking**:
   ```yaml
   # Track tag changes in file updates
   updated: 2025-07-25  # Update when tags change
   tags: [
     # Original structured tags
     knowledge-organization, methodology,
     # Community-added tags
     user-suggested-tag, community-insight, practical-application
   ]
   ```

3. **Emergent Pattern Recognition**:
   - Monitor tag usage across files
   - Identify frequently used tag combinations
   - Consider promoting successful folksonomy patterns to formal taxonomy

**Community Validation Process:**

1. **Tag Review Cycles**:
   - Monthly review of new tags for consistency
   - Quarterly analysis of tag effectiveness
   - Annual taxonomy evolution based on folksonomy insights

2. **Conflict Resolution**:
   - Similar tags → merge or clarify differences
   - Inappropriate tags → community discussion and removal
   - Emerging categories → formalize into taxonomic structure

### Dynamic Tagging Implementation

**Usage-Based Evolution Setup:**

1. **Analytics Implementation**:
   - Track which tags are actually used in searches
   - Monitor file access patterns and tag effectiveness
   - Identify tags that aren't providing value

2. **Adaptive Mechanisms**:
   ```yaml
   # Example of evolving tag structure
   tags: [
     # Stable core tags
     authentication, backend,
     # Evolving contextual tags
     jwt-implementation,  # evolved from 'jwt' + 'implementation'
     security-middleware, # emerged from usage patterns
   ]
   ```

3. **Context-Aware Application**:
   - Different tag prominence for different user contexts
   - Seasonal or project-based tag emphasis
   - Adaptive categorization based on current development focus

## Practical Application Examples

### Example 1: Creating a New Domain File

**Content**: Authentication best practices and patterns

**Step 1: Analysis**
- Content has clear hierarchical relationships (general → specific practices)
- Multiple user types (developers, architects, security experts)
- Relatively stable but with some evolution

**Step 2: Strategy Selection**
- Primary: Hierarchical Taxonomy (clear structure)
- Secondary: Multi-Dimensional Classification (multiple user types)
- Tertiary: Folksonomy (allow community insights)

**Step 3: Implementation**
```yaml
---
type: domain
tags: [
  # Hierarchical taxonomy
  authentication, security, backend, best-practices,
  # Multi-dimensional facets
  intermediate, architectural-patterns, implementation-guide,
  # Folksonomy space for community additions
]
created: 2025-07-25
updated: 2025-07-25
status: active
up: "[[Security Architecture.md]]"
related: "[[Authorization Patterns.md]], [[API Security.md]]"
---
```

### Example 2: Organizing Complex Feature Documentation

**Content**: Multi-service payment integration feature

**Step 1: Analysis**
- Multiple independent attributes (services, payment types, regions)
- Different stakeholder perspectives
- Moderate evolution expected

**Step 2: Strategy Selection**
- Primary: Multi-Dimensional Classification (multiple attributes)
- Secondary: Folksonomy (stakeholder perspectives)

**Step 3: Implementation**
```yaml
---
type: feature
tags: [
  # Service facet
  payment-gateway, order-service, notification-service,
  # Payment type facet
  credit-card, bank-transfer, digital-wallet,
  # Region facet
  north-america, europe, asia-pacific,
  # Complexity facet
  advanced,
  # Stakeholder facet (folksonomy)
  product-requirements, technical-architecture, compliance-review
]
up: "[[Payment Systems.md]]"
dependencies: "[[Service Architecture.md]]"
related: "[[Transaction Processing Feature.md]]"
---
```

### Example 3: Task with Dynamic Classification

**Content**: Performance optimization task that may evolve

**Step 1: Analysis**
- Task scope may change based on investigation results
- Different optimization approaches possible
- Usage patterns will inform best approach

**Step 2: Strategy Selection**
- Primary: Dynamic Tagging (evolving scope)
- Secondary: Hierarchical (basic structure)

**Step 3: Implementation**
```yaml
---
type: task
severity: major
tags: [
  # Core stable tags
  performance, optimization, backend,
  # Dynamic tags that may evolve
  database-queries,     # may become 'query-optimization'
  response-times,       # may become 'latency-reduction'
  initial-investigation # will evolve based on findings
]
up: "[[Performance Engineering.md]]"
feature: "[[System Optimization.md]]"
---
```

## Quality Assurance for Categorization

### Validation Checklist

**Before Publishing Content:**

- [ ] Strategy selection documented and justified
- [ ] All required tags present for chosen strategy
- [ ] Taxonomic relationships properly established
- [ ] Multi-dimensional facets are independent and complete
- [ ] Folksonomy elements follow community guidelines
- [ ] Dynamic elements have evolution criteria defined

**Regular Maintenance:**

- [ ] Monthly tag effectiveness review
- [ ] Quarterly categorization strategy assessment
- [ ] Annual taxonomy evolution planning
- [ ] Community feedback integration

### Common Categorization Problems

**Problem: Tag Sprawl**
- Symptoms: Too many similar tags, inconsistent naming
- Solution: Regular tag consolidation, naming conventions
- Prevention: Clear tagging guidelines, community review

**Problem: Classification Conflicts**
- Symptoms: Content fits multiple categories equally well
- Solution: Multi-dimensional classification, clear decision criteria
- Prevention: Better strategy selection, clearer category definitions

**Problem: Evolution Stagnation**
- Symptoms: Tags don't reflect current usage, outdated categories
- Solution: Implement dynamic classification elements
- Prevention: Regular analytics review, community feedback loops

**Problem: User Confusion**
- Symptoms: Inconsistent application, multiple interpretations
- Solution: Clear documentation, examples, training
- Prevention: User testing, clear guidelines, regular communication

## Integration with PRP Workflow

### File Creation Process

1. **Content Planning**: Determine categorization strategy during planning phase
2. **Template Selection**: Choose template that supports selected strategy
3. **Implementation**: Apply categorization following this guide
4. **Validation**: Check categorization against quality criteria
5. **Publication**: Release with proper categorization metadata
6. **Evolution**: Monitor and adapt categorization based on usage

### Linking Strategy Integration

**Hierarchical Links:**
- `up` field follows taxonomic parent relationships
- `related` field connects taxonomic siblings
- Cross-references bridge different taxonomic trees

**Multi-Dimensional Links:**
- Links reflect multiple facet relationships
- Provide navigation paths for different user contexts
- Enable filtering and discovery across dimensions

**Folksonomy Links:**
- Community-identified relationships in `related` field
- Emergent patterns captured through cross-references
- User-driven connection discovery

**Dynamic Links:**
- Adaptive relationship emphasis based on context
- Usage-driven link prominence
- Evolving relationship patterns

## Tools and Resources

### Categorization Tools

**Analysis Tools:**
- Content complexity assessment worksheet
- Strategy selection decision matrix
- Multi-dimensional facet identification template

**Implementation Tools:**
- Tag consistency checker commands
- Relationship validation scripts
- Template selection guide

**Maintenance Tools:**
- Tag usage analytics queries
- Community feedback collection forms
- Evolution tracking spreadsheets

### Reference Resources

- [[Knowledge Organization.md]] - Theoretical foundations
- [[File Structure.md]] - Implementation in file system
- [[Management Guidelines.md]] - Status and workflow integration
- [[Quality Assurance.md]] - Validation and maintenance procedures

## Future Evolution

This guide will evolve based on:
- Community usage patterns and feedback
- Effectiveness of different categorization strategies
- Emerging best practices and new approaches
- Integration with new tools and technologies

Regular updates will ensure the guide remains practical and effective for the PRP community's knowledge organization needs.