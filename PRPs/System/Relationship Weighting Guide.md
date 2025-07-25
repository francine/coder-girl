# Relationship Weighting Guide

```yaml
---
type: guide
tags: [relationship-weighting, context-assembly, practical-application, weight-assignment]
created: 2025-01-25
updated: 2025-01-25
status: active
up: "[[Methodology.md]]"
related: "[[Semantic Relationships.md]], [[Linking System.md]]"
---
```

## Overview

This guide provides practical instructions for effectively assigning and using relationship weights to optimize context assembly and enable intelligent knowledge graph navigation. It translates the theoretical frameworks from [[Semantic Relationships.md]] into actionable procedures for content creators and system implementers.

## Quick Reference

### Weight Categories Summary

| Category | Weight Range | Usage | Context Budget |
|----------|--------------|-------|----------------|
| **Critical Dependencies** | 0.8 - 1.0 | Essential for understanding/implementation | 60% Primary |
| **Supporting Context** | 0.6 - 0.79 | Enhances quality and provides patterns | 30% Extended |
| **Optional References** | 0.4 - 0.59 | Additional insight, can be omitted | 10% Enrichment |
| **Contextual Relevance** | 0.3 - 0.8 | Dynamic based on current focus | Variable |

### Common Weight Assignments

| Relationship Type | Default Weight | Adjustment Range |
|-------------------|----------------|------------------|
| `inherits` → parent | 1.0 | 0.8 - 1.0 |  
| `composed-of` → component | 1.0 | 0.9 - 1.0 |
| `precedes` → next | 0.9 | 0.8 - 0.95 |
| `specializes` → general | 0.8 | 0.7 - 0.9 |
| `complements` → enhancement | 0.7 | 0.5 - 0.9 |
| `aggregates` → parts | 0.6 | 0.5 - 0.7 |
| `similar-to` | 0.5 | 0.3 - 0.7 |
| `alternative-to` | 0.4 | 0.2 - 0.8 |

## Step-by-Step Weight Assignment Process

### Step 1: Identify Relationship Type

**Process**: Analyze the semantic connection between source and target concepts.

**Decision Matrix**:
- **Is target essential for source to function?** → Critical Dependency (0.8-1.0)
- **Does target significantly enhance source quality?** → Supporting Context (0.6-0.79)  
- **Does target provide nice-to-have information?** → Optional Reference (0.4-0.59)
- **Does target importance vary by situation?** → Contextual Relevance (0.3-0.8)

**Example Analysis**:
```
Source: "JWT Authentication Implementation"
Target: "Authentication Backend Patterns"
Analysis: JWT cannot be properly implemented without understanding backend patterns
Result: Critical Dependency → Weight 0.9
```

### Step 2: Apply Semantic Relationship Modifiers

**Hierarchical Relationships**:

```
Inheritance: Child → Parent
Base Weight: 1.0 (child needs parent context)
Modifiers:
- Complex parent concept: +0.0 (maintain 1.0)
- Simple parent concept: -0.1 (reduce to 0.9)
- Expert user: -0.1 to -0.2 (assume existing knowledge)
```

```
Composition: Whole → Part  
Base Weight: 1.0 (whole needs part understanding)
Modifiers:
- Critical component: +0.0 (maintain 1.0)
- Standard component: -0.05 (reduce to 0.95)
- Optional component: -0.1 to -0.2 (reduce to 0.8-0.9)
```

**Lateral Relationships**:

```
Complementarity: Primary → Complement
Base Weight: 0.7
Modifiers:
- Tight integration required: +0.1 to +0.2 (increase to 0.8-0.9)
- Loose coupling sufficient: -0.1 to -0.2 (reduce to 0.5-0.6)
- Implementation phase: +0.2 (increase to 0.9)
```

### Step 3: Apply Contextual Adjustments

**User Expertise Multipliers**:
- **Novice**: Multiply supporting relationships by 1.2-1.4
- **Intermediate**: No adjustment (1.0 multiplier)
- **Expert**: Multiply supporting relationships by 0.7-0.9

**Implementation Phase Multipliers**:
- **Planning Phase**: Increase alternatives by 1.5x, reduce implementation details by 0.8x
- **Development Phase**: Increase critical dependencies by 1.2x, reduce alternatives by 0.5x
- **Testing Phase**: Increase validation relationships by 1.3x
- **Maintenance Phase**: Increase operational relationships by 1.4x

**Task Focus Multipliers**:
- **Direct relevance to current task**: 1.2-1.5x
- **Indirect relevance**: 0.9-1.1x  
- **Background information**: 0.6-0.8x
- **Currently irrelevant**: 0.3-0.5x

### Step 4: Validate Weight Assignment

**Consistency Checks**:

1. **Bidirectional Weight Balance**:
   ```
   A → B (weight 0.9) should correspond to B → A (weight 0.6-0.8)
   Higher weights should flow toward dependencies
   ```

2. **Hierarchy Validation**:
   ```
   Parent → Child weights should be lower than Child → Parent weights
   Critical components should have weights ≥ 0.8
   ```

3. **Context Budget Verification**:
   ```
   Critical Dependencies: Should account for ~60% of total relationship weights
   Supporting Context: Should account for ~30% of total relationship weights  
   Optional References: Should account for ~10% of total relationship weights
   ```

## Practical Application Examples

### Example 1: Authentication System Feature

**Context**: Implementing JWT authentication for a web application

**Initial Relationships**:
```yaml
JWT Implementation:
  inherits: "[[Authentication Backend.md]]"          # Weight: 1.0
  depends-on: "[[Security Patterns.md]]"           # Weight: 0.9  
  uses: "[[Token Management.md]]"                   # Weight: 0.85
  related-to: "[[Session Management.md]]"           # Weight: 0.6
  alternative: "[[OAuth Implementation.md]]"        # Weight: 0.4
```

**Contextual Adjustments** (Development Phase, Intermediate User):
```yaml
Adjusted Weights:
  Authentication Backend: 1.0 × 1.0 × 1.2 = 1.0 (capped at 1.0)
  Security Patterns: 0.9 × 1.0 × 1.2 = 1.0 (capped at 1.0)  
  Token Management: 0.85 × 1.0 × 1.2 = 1.0 (capped at 1.0)
  Session Management: 0.6 × 1.0 × 1.0 = 0.6
  OAuth Implementation: 0.4 × 1.0 × 0.5 = 0.2 (alternative reduced in dev phase)
```

**Context Assembly Result**:
1. Load Authentication Backend (Weight: 1.0) 
2. Load Security Patterns (Weight: 1.0)
3. Load Token Management (Weight: 1.0)  
4. Load Session Management (Weight: 0.6)
5. Skip OAuth Implementation (Weight: 0.2, below 0.3 threshold)

### Example 2: Complex Database Integration

**Context**: Designing database schema with performance optimization

**Initial Relationships**:
```yaml
Database Schema Design:
  inherits: "[[Database Architecture.md]]"          # Weight: 0.9
  requires: "[[Data Modeling Patterns.md]]"        # Weight: 0.85
  enhanced-by: "[[Performance Optimization.md]]"   # Weight: 0.7
  tested-by: "[[Schema Testing.md]]"               # Weight: 0.6
  documented-in: "[[API Documentation.md]]"        # Weight: 0.5
  similar-to: "[[NoSQL Alternatives.md]]"          # Weight: 0.4
```

**Contextual Adjustments** (Planning Phase, Expert User, High Performance Requirements):
```yaml
Adjusted Weights:
  Database Architecture: 0.9 × 1.0 × 0.8 × 1.0 = 0.72
  Data Modeling Patterns: 0.85 × 1.0 × 0.8 × 1.0 = 0.68  
  Performance Optimization: 0.7 × 1.4 × 0.8 × 1.0 = 0.78 (high performance context)
  Schema Testing: 0.6 × 1.0 × 0.8 × 0.8 = 0.38 (reduced priority in planning)
  API Documentation: 0.5 × 1.0 × 0.8 × 0.8 = 0.32
  NoSQL Alternatives: 0.4 × 1.0 × 0.8 × 1.5 = 0.48 (alternatives important in planning)
```

**Context Assembly Result** (Threshold: 0.6 for depth 1):
1. Load Database Architecture (Weight: 0.72)
2. Load Data Modeling Patterns (Weight: 0.68)  
3. Load Performance Optimization (Weight: 0.78)
4. Skip lower-weight relationships until later context expansion

## Weight Assignment Decision Trees

### For Hierarchical Relationships

```
Is the relationship inheritance-based?
├─ YES: Start with weight 0.9-1.0
│   ├─ Child → Parent: Use 1.0 (critical for understanding)
│   └─ Parent → Child: Use 0.7 (supporting for scope)
└─ NO: Is it compositional?
    ├─ YES: Start with weight 0.95
    │   ├─ Whole → Part: Use 0.95-1.0
    │   └─ Part → Whole: Use 0.8
    └─ NO: Check aggregation or specialization patterns
```

### For Lateral Relationships

```
Does the relationship represent alternatives?
├─ YES: Start with weight 0.4
│   ├─ In planning phase: Increase to 0.6-0.8
│   └─ In implementation phase: Reduce to 0.2-0.3  
└─ NO: Does it represent complementarity?
    ├─ YES: Start with weight 0.7
    │   ├─ Tight integration: Increase to 0.8-0.9
    │   └─ Loose coupling: Reduce to 0.5-0.6
    └─ NO: Apply similarity or sequence patterns
```

### For Dynamic Contextual Relationships

```
Is the relationship's importance situational?
├─ YES: Use contextual relevance category (0.3-0.8 base)
│   ├─ Calculate current relevance multiplier
│   ├─ Apply user expertise adjustment  
│   ├─ Apply implementation phase modifier
│   └─ Compute final weight using formula
└─ NO: Use fixed category assignment with standard adjustments
```

## Troubleshooting Common Weight Assignment Issues

### Issue: Context Overload

**Symptoms**: Too many relationships being included, cognitive overload during context assembly

**Solutions**:
1. **Increase Weight Thresholds**: Raise minimum weights for each depth level
   - Depth 1: 0.6 → 0.7
   - Depth 2: 0.7 → 0.8  
   - Depth 3: 0.8 → 0.9

2. **Apply Stricter Context Budget**: Reduce context allocation percentages
   - Primary: 60% → 50%
   - Extended: 30% → 30%  
   - Enrichment: 10% → 20% (maintain for essential variety)

3. **Review Relationship Classifications**: Ensure relationships aren't over-weighted
   - Move supporting context relationships to optional references
   - Reduce contextual relevance multipliers

### Issue: Context Insufficiency  

**Symptoms**: Missing important context, implementation guidance inadequate

**Solutions**:
1. **Lower Weight Thresholds**: Reduce minimum weights to include more context
   - Depth 1: 0.6 → 0.5
   - Depth 2: 0.7 → 0.6
   - Depth 3: 0.8 → 0.7

2. **Increase Context Budget**: Expand context allocation for supporting information
   - Primary: 60% → 70%
   - Extended: 30% → 25%
   - Enrichment: 10% → 5%

3. **Review Weight Assignments**: Ensure critical relationships aren't under-weighted
   - Upgrade supporting context to critical dependencies where appropriate
   - Increase contextual relevance multipliers for current focus areas

### Issue: Inconsistent Bidirectional Weights

**Symptoms**: Forward and reverse relationship weights don't align properly

**Solutions**:
1. **Apply Bidirectional Validation Rules**:
   ```
   If A → B = 0.9 (critical), then B → A should be 0.6-0.8 (supporting)
   If A → B = 0.7 (supporting), then B → A should be 0.4-0.6 (optional)
   ```

2. **Use Asymmetric Weight Patterns**:
   ```
   Dependency relationships: Higher weight toward dependency
   Inheritance relationships: Higher weight from child to parent
   Composition relationships: Higher weight from whole to part
   ```

3. **Implement Automated Consistency Checking**:
   - Validate weight relationships during context assembly
   - Flag weight imbalances for manual review
   - Suggest weight adjustments based on relationship patterns

## Integration with Context Assembly Tools

### Pre-Assembly Configuration

**Weight Profile Setup**:
```yaml
user_profile:
  expertise_level: intermediate  # novice, intermediate, expert
  context_preference: balanced   # minimal, balanced, comprehensive  
  current_focus: implementation  # planning, implementation, testing, maintenance

task_context:
  complexity: high              # low, medium, high
  time_pressure: moderate       # low, moderate, high  
  cognitive_budget: standard    # limited, standard, extended
```

**Dynamic Weight Calculation**:
```python
def calculate_final_weight(base_weight, context_multipliers):
    final_weight = base_weight
    final_weight *= context_multipliers['relevance']     # 0.3-1.5
    final_weight *= context_multipliers['expertise']     # 0.7-1.4  
    final_weight *= context_multipliers['phase']         # 0.5-1.5
    final_weight *= context_multipliers['cognitive']     # 0.8-1.2
    
    return min(final_weight, 1.0)  # Cap at maximum weight
```

### Assembly Process Integration

**Filtering Implementation**:
```python
def filter_relationships_by_weight(relationships, depth, thresholds):
    threshold = thresholds.get(depth, 0.3)  # Default minimum threshold
    
    filtered = []
    for rel in relationships:
        if rel['final_weight'] >= threshold:
            filtered.append(rel)
    
    return sorted(filtered, key=lambda x: x['final_weight'], reverse=True)
```

**Context Budget Management**:
```python
def manage_context_budget(relationships, budget_allocation):
    total_weight = sum(rel['final_weight'] for rel in relationships)
    
    primary_budget = budget_allocation['primary'] * total_weight
    extended_budget = budget_allocation['extended'] * total_weight  
    enrichment_budget = budget_allocation['enrichment'] * total_weight
    
    return allocate_relationships_to_budgets(relationships, 
                                           primary_budget, 
                                           extended_budget, 
                                           enrichment_budget)
```

## Performance Monitoring and Optimization

### Key Metrics to Track

**Context Assembly Efficiency**:
- Average context assembly time
- Number of relationships included per assembly  
- Cognitive load indicators (user feedback on information overload)
- Task completion success rate with different weight configurations

**Weight Effectiveness Indicators**:
- Percentage of assembled context actively used during implementation
- User navigation patterns through assembled context
- Correlation between relationship weights and actual context utilization
- Quality of implementation outcomes with different weight strategies

### Continuous Improvement Process

**Data Collection**:  
1. **Usage Analytics**: Track which relationships are accessed during task completion
2. **Success Metrics**: Monitor task completion rates and quality outcomes
3. **User Feedback**: Collect qualitative feedback on context relevance and utility
4. **Performance Data**: Measure context assembly time and cognitive load indicators

**Weight Optimization Cycle**:
1. **Analyze Performance Data**: Identify patterns in weight effectiveness
2. **Adjust Base Weights**: Modify default weights based on usage patterns  
3. **Refine Multipliers**: Optimize contextual adjustment factors
4. **Test Changes**: A/B test weight modifications with sample user groups
5. **Deploy Improvements**: Implement validated weight optimizations
6. **Monitor Impact**: Track changes in context assembly effectiveness

**Feedback Integration**:
- **Expert Review**: Regular evaluation by domain experts on weight appropriateness
- **Community Input**: Leverage collective usage patterns to refine weight assignments  
- **Machine Learning**: Use ML algorithms to identify optimal weight patterns from historical data
- **Adaptive Learning**: Implement systems that learn and adjust weights based on user behavior and outcomes

## Conclusion

Effective relationship weighting requires balancing theoretical frameworks with practical application needs. By following these guidelines and continuously monitoring performance, you can create context assembly systems that provide relevant, appropriately-scoped information that enhances rather than overwhelms the implementation process.

The key to success lies in starting with well-established base weights, applying contextual adjustments thoughtfully, and continuously refining the system based on actual usage patterns and outcomes. Remember that relationship weighting is a tool to enhance human and AI comprehension, not a rigid constraint that limits access to important information.