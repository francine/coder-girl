# Advanced Task Template Guide

```yaml
---
type: guide
tags: [task-templates, advanced-metadata, relationship-tracking, validation-integration]
created: 2025-01-26
updated: 2025-01-26
status: active
up: "[[Template Design.md]]"
related: "[[task-template.md]], [[Semantic Relationships.md]]"
---
```

## Overview

This guide provides comprehensive instructions for leveraging the enhanced task template capabilities, including advanced metadata structures, semantic relationship tracking, validation integration, and progress monitoring. The advanced task template enables sophisticated task management while maintaining simplicity for basic use cases.

## Key Enhancements

### 1. Semantic Relationship Tracking

The enhanced template uses typed relationships with explicit weights to enable intelligent context assembly and dependency management.

#### Dependency Structure

```yaml
dependencies:
  - link: "[[Database Schema.md]]"
    type: "precedes"
    weight: 1.0  # critical dependency
    description: "API cannot function without schema definition"
  
  - link: "[[Authentication Patterns.md]]"
    type: "inherits"
    weight: 0.9  # near-critical
    description: "Implements standard auth patterns"
  
  - link: "[[Performance Guidelines.md]]"
    type: "complements"
    weight: 0.7  # supporting context
    description: "Enhances implementation with performance best practices"
```

**Key Concepts**:
- **Relationship Types**: Use semantic types from the relationship taxonomy (inherits, composed-of, precedes, complements, etc.)
- **Weight Values**: 
  - 1.0 = Critical (must have for understanding/implementation)
  - 0.7 = Supporting (significantly enhances quality)
  - 0.4 = Optional (nice to have for context)
- **Descriptions**: Always explain why the relationship exists

#### Related Tasks Structure

```yaml
related:
  - link: "[[Task 16 - Create Pattern Libraries.md]]"
    type: "follows"
    weight: 0.8
    description: "Pattern libraries build upon template enhancements"
  
  - link: "[[Task 14 - Enhance Feature Templates.md]]"
    type: "similar-to"
    weight: 0.5
    description: "Parallel template enhancement effort"
```

### 2. Progress Monitoring

Track task completion through well-defined milestones with verifiable criteria.

#### Milestone Definition

```yaml
milestones:
  - id: "requirements-analysis"
    description: "Requirements fully analyzed and documented"
    status: achieved
    completion_date: 2025-01-26
  
  - id: "core-implementation"
    description: "Core functionality implemented and tested"
    status: pending
    completion_date: null
  
  - id: "integration-complete"
    description: "All integrations verified and working"
    status: pending
    completion_date: null
```

**Best Practices**:
- Define 3-5 milestones per task
- Each milestone should be independently verifiable
- Use descriptive IDs that indicate the achievement
- Update completion dates when milestones are achieved

### 3. Validation Integration

Implement multi-stage validation with automated quality gates.

#### Validation Checkpoints

```yaml
validation:
  checkpoints:
    - stage: "pre-implementation"
      criteria: 
        - "All dependencies available and accessible"
        - "Design patterns identified and documented"
        - "Required permissions verified"
      status: passed
    
    - stage: "implementation"
      criteria:
        - "Unit tests written and passing (>80% coverage)"
        - "Integration tests implemented"
        - "Code review completed"
      status: pending
    
    - stage: "completion"
      criteria:
        - "All acceptance criteria met"
        - "Documentation updated"
        - "Dependent tasks unblocked"
      status: pending
```

#### Quality Gates

```yaml
quality_gates:
  - metric: "test_coverage"
    threshold: "85%"
    current: "92%"
  
  - metric: "performance"
    threshold: "<200ms response time"
    current: "145ms"
  
  - metric: "security_scan"
    threshold: "no critical vulnerabilities"
    current: "passed"
```

### 4. Implementation Tracking

Monitor effort, blockers, and risks throughout the task lifecycle.

```yaml
implementation:
  estimated_effort: "L"  # Large task (5-8 days)
  actual_effort: "6 days"
  blockers: 
    - "Waiting for database migration approval"
    - "Need clarification on authentication requirements"
  risks:
    - "Performance impact of new validation logic"
    - "Potential breaking changes for existing integrations"
```

## Usage Examples

### Example 1: Simple Enhancement Task

For straightforward tasks, use minimal metadata:

```yaml
---
type: task
tags: [enhancement, ui, minor]
created: 2025-01-26
updated: 2025-01-26
status: 🔵 todo
severity: 🟢 minor
up: "[[UI Components.md]]"
feature: "[[Dashboard Enhancement.md]]"
---
```

### Example 2: Complex Integration Task

For complex tasks with multiple dependencies:

```yaml
---
type: task
tags: [integration, api, authentication, critical]
created: 2025-01-26
updated: 2025-01-26
status: 🟡 in-progress
severity: 🔴 critical

# Hierarchical Relationships
up: "[[API Architecture.md]]"
feature: "[[OAuth Integration.md]]"

# Semantic Relationships with Weights
dependencies:
  - link: "[[Authentication Backend.md]]"
    type: "inherits"
    weight: 1.0
    description: "Core authentication framework required"
  
  - link: "[[OAuth 2.0 Specification.md]]"
    type: "composed-of"
    weight: 0.95
    description: "Must implement OAuth 2.0 flow correctly"
  
  - link: "[[Security Guidelines.md]]"
    type: "complements"
    weight: 0.8
    description: "Security best practices for token handling"

related:
  - link: "[[Task 08 - Setup JWT Tokens.md]]"
    type: "precedes"
    weight: 0.9
    description: "JWT implementation required for token management"

# Progress Monitoring
milestones:
  - id: "oauth-flow-design"
    description: "OAuth flow designed and approved"
    status: achieved
    completion_date: 2025-01-25
  
  - id: "provider-integration"
    description: "OAuth providers integrated"
    status: pending
    completion_date: null

# Validation Integration
validation:
  checkpoints:
    - stage: "pre-implementation"
      criteria: ["OAuth providers selected", "Security review completed"]
      status: passed
    
    - stage: "implementation"
      criteria: ["OAuth flow tested", "Token storage secure"]
      status: pending
  
  quality_gates:
    - metric: "security_audit"
      threshold: "passed"
      current: "pending"
---
```

## Best Practices

### 1. Relationship Management

- **Start with Critical Dependencies**: Always define weight 1.0 relationships first
- **Be Specific with Types**: Choose the most accurate semantic relationship type
- **Document the Why**: Every relationship description should explain its purpose
- **Maintain Bidirectionality**: Ensure referenced documents have appropriate reverse links

### 2. Progress Tracking

- **Define Clear Milestones**: Each milestone should represent a concrete achievement
- **Update Regularly**: Keep milestone status current throughout implementation
- **Link to Checkpoints**: Align milestones with validation checkpoints
- **Use for Planning**: Leverage milestones for sprint planning and estimation

### 3. Validation Strategy

- **Progressive Validation**: Start with pre-implementation checks
- **Automate Where Possible**: Use quality gates for automated metrics
- **Document Criteria**: Be specific about what constitutes "passing"
- **Track Continuously**: Update validation status as work progresses

### 4. Metadata Maintenance

- **Regular Updates**: Keep metadata current throughout task lifecycle
- **Remove Completed Blockers**: Clean up resolved blockers
- **Adjust Estimates**: Update actual effort for future planning
- **Capture Lessons**: Document risks that materialized for future reference

## Integration with AI Context Assembly

The advanced metadata enables sophisticated AI context assembly:

### Weight-Based Prioritization

```yaml
# AI will prioritize loading in this order:
1. Critical dependencies (weight ≥ 0.9)
2. Strong supporting context (weight 0.7-0.89)
3. Moderate context (weight 0.5-0.69)
4. Optional references (weight < 0.5)
```

### Semantic Type Understanding

The AI uses relationship types to understand:
- **Inheritance chains**: Following `inherits` relationships for complete context
- **Composition requirements**: Loading all `composed-of` components
- **Sequential dependencies**: Respecting `precedes/follows` ordering
- **Enhancement opportunities**: Considering `complements` relationships

### Validation-Aware Processing

The AI can:
- Check validation status before proceeding
- Suggest missing validation criteria
- Identify incomplete checkpoints
- Recommend quality gate thresholds

## Common Patterns

### Pattern 1: Feature Implementation Task

```yaml
dependencies:
  - link: "[[Feature Specification.md]]"
    type: "inherits"
    weight: 1.0
    description: "Implements specified requirements"
  
  - link: "[[Architecture Patterns.md]]"
    type: "complements"
    weight: 0.8
    description: "Follows established patterns"
```

### Pattern 2: Bug Fix Task

```yaml
dependencies:
  - link: "[[Bug Report.md]]"
    type: "addresses"
    weight: 1.0
    description: "Fixes reported issue"
  
  - link: "[[Test Cases.md]]"
    type: "validates"
    weight: 0.9
    description: "Ensures fix is verified"
```

### Pattern 3: Refactoring Task

```yaml
dependencies:
  - link: "[[Legacy Implementation.md]]"
    type: "replaces"
    weight: 0.9
    description: "Refactors existing code"
  
  - link: "[[Code Quality Standards.md]]"
    type: "implements"
    weight: 0.8
    description: "Applies quality improvements"
```

## Troubleshooting

### Common Issues

1. **Circular Dependencies**: Ensure no circular reference chains in relationships
2. **Weight Conflicts**: Verify weights accurately reflect importance
3. **Missing Bidirectional Links**: Check that referenced documents link back appropriately
4. **Validation Drift**: Keep validation criteria synchronized with acceptance criteria

### Validation Commands

Use these commands to verify template usage:

```bash
# Check for proper relationship structure
grep -A5 "dependencies:" task-file.md

# Verify milestone completion
grep -B2 "status: achieved" task-file.md

# Find incomplete validations
grep -B2 "status: pending" task-file.md | grep -A2 "checkpoint"
```

## Summary

The advanced task template provides powerful capabilities for:
- Tracking complex relationships with semantic meaning
- Monitoring progress through verifiable milestones
- Ensuring quality through integrated validation
- Managing implementation complexity

Use these features progressively - start simple and add complexity as needed. The template scales from basic tasks to complex, multi-dependency implementations while maintaining clarity and usability.