# Feature Name

```yaml
---
type: feature
tags: [domain, technology, scope, complexity-level, implementation-phase]
created: 2025-01-20
updated: 2025-01-20
status: todo # 🔵 todo|🟡 in-progress|🟣 review|🟢 done|🔴 blocked
up: "[[Primary Domain.md]]"
related: "[[Related Feature.md]]"
dependencies: "[[Required Context.md]]"
# Pattern Library Integration
pattern_complexity: standard # minimal|standard|comprehensive
architectural_patterns: [] # List applicable patterns from pattern library
validation_frameworks: [] # List validation approaches to integrate
reusable_components: [] # List reusable components to leverage
# AI Optimization Metadata
ai_context_weight: supporting # critical|supporting|optional
implementation_readiness: practical # theoretical|practical|production
cognitive_load: medium # low|medium|high
---
```

## Purpose

[Write one clear paragraph describing exactly what this feature accomplishes and what specific problem it solves for users.]

### Problem Context

[Describe the specific problem domain and why existing solutions are insufficient:]

- **Current State**: [What limitations exist in current approach]
- **User Pain Points**: [Specific difficulties users experience]
- **System Constraints**: [Technical or business constraints that must be addressed]
- **Success Definition**: [Clear criteria for what constitutes a successful solution]

### Solution Approach

[Outline the high-level approach this feature takes to solve the identified problems:]

- **Core Strategy**: [Primary approach or methodology being employed]
- **Key Innovations**: [Novel aspects that differentiate this solution]
- **Integration Philosophy**: [How this feature fits within the broader system architecture]
- **Quality Principles**: [Standards and principles that guide implementation decisions]

## Scope

[List the specific functionalities included in this feature:]

- [Specific capability 1]
- [Specific capability 2]
- [Specific user action supported]
- [Specific data operation performed]

## User Flow

[Describe the complete user interaction sequence:]

1. [Initial user action that triggers this feature]
2. [System response or processing step]
3. [Intermediate user actions if any]
4. [Final outcome user observes]

**Success State**: [Describe what user sees when feature works correctly]

**Error Handling**: [Describe how errors are presented to user]

## Data Models

[Define the specific data structures needed for this feature:]

```yaml
[# Include data model definitions in appropriate format]
[# Examples: database schemas, API models, data structures]
[# Be specific about field types, constraints, relationships]
```

## API Specification

[Define the specific endpoints/interfaces for this feature:]

```yaml
[# Include API contracts, endpoint definitions, request/response formats]
[# Examples: REST endpoints, GraphQL queries, function signatures]
[# Be specific about parameters, return types, status codes]
```

## Technical Implementation

### Architectural Pattern Application

[Apply relevant architectural patterns from the pattern library:]

#### Pattern Selection

- **Primary Pattern**: [Main architectural pattern - e.g., MVC, Repository, Factory, Observer]
  - **Rationale**: [Why this pattern fits the problem domain]
  - **Implementation Notes**: [Specific adaptations needed for this context]
  - **Quality Benefits**: [How this pattern supports maintainability and scalability]

- **Supporting Patterns**: [Additional patterns that complement the primary approach]
  - **[Pattern Name]**: [Application context and integration approach]
  - **[Pattern Name]**: [Application context and integration approach]

#### Pattern Integration Strategy

[Describe how multiple patterns work together in this implementation:]

- **Pattern Hierarchy**: [How patterns layer and interact]
- **Boundary Management**: [Clear separation of pattern responsibilities]
- **Composition Rules**: [Guidelines for combining pattern elements]
- **Evolution Strategy**: [How patterns can be adapted as requirements change]

### Core Components

[List the specific technical components that must be built with pattern context:]

- **[Component Name]**: [filepath/filename.ext] - [Specific responsibility and pattern role]
  - **Pattern Role**: [How this component implements chosen architectural patterns]
  - **Reusable Elements**: [Parts that can be reused across similar features]
  - **Quality Attributes**: [Performance, maintainability, testability considerations]

- **[Service Name]**: [filepath/filename.ext] - [Specific functionality and integration approach]
  - **Pattern Integration**: [How this service fits within architectural patterns]
  - **Interface Design**: [API contracts that support pattern implementation]
  - **Error Boundaries**: [How this service handles and propagates errors]

- **[Model Name]**: [filepath/filename.ext] - [Data structure definition and validation rules]
  - **Schema Patterns**: [Data modeling patterns applied]
  - **Validation Framework**: [Built-in quality checking and constraint enforcement]
  - **Evolution Support**: [How data models can adapt to changing requirements]

### Integration Points

[Describe how this feature connects to existing systems:]

- **[System/Component A]**: [Specific integration requirement and data exchange]
- **[System/Component B]**: [Specific API calls or service dependencies]

### Implementation Patterns

[Specify the exact patterns this feature should follow with comprehensive guidance:]

#### Design Patterns

- **[Design Pattern Name]**: [Reference to domain pattern and detailed application]
  - **Context**: [When and why to apply this pattern]
  - **Implementation Guide**: [Step-by-step application instructions]
  - **Quality Checkpoints**: [Validation criteria for correct pattern implementation]
  - **Common Pitfalls**: [Known issues and how to avoid them]

- **[Integration Pattern Name]**: [Specific pattern for system integration]
  - **Integration Strategy**: [How this pattern manages external dependencies]
  - **Interface Contracts**: [Clear API definitions and interaction protocols]
  - **Failure Handling**: [How integration failures are detected and managed]
  - **Performance Considerations**: [Impact on system performance and mitigation strategies]

#### Quality Assurance Patterns

- **[Validation Pattern Name]**: [Systematic approach to input validation and data integrity]
  - **Validation Layers**: [Multi-tier validation strategy (client, service, data)]
  - **Error Classification**: [Systematic categorization of different error types]
  - **Recovery Strategies**: [Automated and manual recovery approaches]
  - **Monitoring Integration**: [How validation integrates with system monitoring]

- **[Testing Pattern Name]**: [Comprehensive testing strategy and automation]
  - **Test Pyramid Structure**: [Unit, integration, and end-to-end testing layers]
  - **Test Data Management**: [Strategies for test data creation and maintenance]
  - **Automation Framework**: [Tools and approaches for automated testing]
  - **Quality Gates**: [Criteria that must be met before deployment]

#### Performance Patterns

- **[Performance Pattern Name]**: [Specific approach to performance optimization]
  - **Optimization Strategy**: [Systematic approach to identifying and addressing bottlenecks]
  - **Monitoring Points**: [Key metrics and measurement approaches]
  - **Scaling Considerations**: [How performance patterns support system scaling]
  - **Resource Management**: [Efficient use of system resources]

## Complexity Management

[This section adapts based on the feature's complexity level and implementation context]

### Complexity Assessment

[Evaluate feature complexity to determine appropriate template depth and detail level:]

**Complexity Indicators:**
- **Domain Complexity**: [Simple/Moderate/Complex - based on domain knowledge requirements]
- **Technical Complexity**: [Low/Medium/High - based on implementation difficulty]
- **Integration Complexity**: [Minimal/Standard/Extensive - based on system integration requirements]
- **User Complexity**: [Basic/Intermediate/Advanced - based on user interaction sophistication]

### Adaptive Template Configuration

[Based on complexity assessment, configure template sections appropriately:]

#### For Simple Features (Low complexity across dimensions)
- **Streamlined Sections**: Focus on essential Purpose, Scope, and basic Implementation
- **Simplified Patterns**: Use standard patterns without extensive customization
- **Basic Validation**: Standard unit and integration testing approaches
- **Minimal Documentation**: Core requirements with essential examples

#### For Moderate Features (Mixed complexity levels)
- **Balanced Sections**: Include all standard sections with moderate detail
- **Pattern Selection**: Choose appropriate patterns based on specific complexity areas
- **Enhanced Validation**: Add performance testing and user acceptance validation
- **Comprehensive Documentation**: Detailed examples and implementation guidance

#### For Complex Features (High complexity in multiple dimensions)
- **Extended Sections**: Include all sections with comprehensive detail and additional subsections
- **Advanced Patterns**: Implement sophisticated architectural and performance patterns
- **Comprehensive Validation**: Full testing pyramid with chaos engineering and resilience testing
- **Rich Documentation**: Multiple examples, edge cases, and advanced usage scenarios

### Dynamic Section Adaptation

[Sections that automatically adjust based on complexity and context:]

#### Context-Sensitive Content Guidelines

**For Domain-Complex Features:**
- Expand **Purpose** section with detailed problem context and domain analysis
- Enhance **Technical Implementation** with domain-specific patterns and approaches
- Add specialized validation focusing on domain rule compliance

**For Technical-Complex Features:**
- Expand **Technical Implementation** with detailed architectural analysis
- Enhance **Integration Points** with comprehensive system architecture details
- Add performance benchmarking and scalability analysis

**For Integration-Complex Features:**
- Expand **Integration Points** with detailed external system analysis
- Enhance **Error Scenarios** with comprehensive failure mode analysis
- Add monitoring and observability requirements

**For User-Complex Features:**
- Expand **User Flow** with detailed interaction scenarios and edge cases
- Enhance **Examples** with comprehensive user journey demonstrations
- Add accessibility and usability validation requirements

### Progressive Disclosure Framework

[Hierarchical information presentation that reveals complexity incrementally:]

#### Level 1 - Essential Information (Always Present)
- Core purpose and basic scope
- Primary user flow and success criteria
- Essential technical components
- Basic validation approach

#### Level 2 - Implementation Detail (Added for Moderate+ Complexity)
- Detailed architectural patterns and design decisions
- Comprehensive integration requirements
- Advanced error handling and recovery strategies
- Performance and quality metrics

#### Level 3 - Advanced Considerations (Added for High Complexity)
- Sophisticated architectural analysis and trade-offs
- Comprehensive failure mode analysis and resilience strategies
- Advanced monitoring, observability, and operational requirements
- Extensive testing strategies including chaos engineering

#### Level 4 - Expert Content (Added for Expert-Level Implementation)
- Cutting-edge patterns and experimental approaches
- Advanced performance optimization and scaling strategies
- Research-level analysis and future evolution considerations
- Comprehensive knowledge transfer and team development strategies

## Examples

[Create or reference implementation examples in PRPs/Features/Examples/. Example complexity adapts based on feature complexity level.]

### Implementation References

[List specific examples that demonstrate this feature:]

- **[example-folder/](Examples/example-folder/)** - [Description of complex implementation example]
- **[example-file.ext](Examples/example-file.ext)** - [Description of specific code example]
- **[user-provided-example/](Examples/user-provided-example/)** - [Reference to existing user example]

### Example Content Guidelines

[When creating new examples in Examples/ folder:]

- [Create complete, working implementations that can be executed/tested]
- [Include README.md explaining how to run/use the example]
- [Follow patterns established in dependencies domains]
- [Include error handling and edge cases]
- [Provide both success and failure scenarios]

## Error Scenarios

[Define specific error cases and handling for this feature:]

- **[Error Type 1]**: [When it occurs] → [How to handle] → [User feedback]
- **[Error Type 2]**: [When it occurs] → [How to handle] → [User feedback]
- **[Error Type 3]**: [When it occurs] → [How to handle] → [User feedback]

## Acceptance Criteria

[List specific, measurable outcomes that verify feature success:]

- [ ] [Specific functional requirement that can be tested]
- [ ] [Specific performance requirement with metrics]
- [ ] [Specific user experience requirement]
- [ ] [Specific integration requirement]
- [ ] [Specific data integrity requirement]
- [ ] [Specific error handling requirement]

## Validation

### Comprehensive Testing Strategy

[Multi-layered approach to verifying feature quality and functionality:]

#### Pattern Validation Testing

- **Architectural Pattern Compliance**: [Verify correct implementation of chosen patterns]
  - **Pattern Structure Tests**: [Validate that components follow pattern contracts]
  - **Pattern Interaction Tests**: [Verify correct pattern composition and integration]
  - **Pattern Evolution Tests**: [Ensure patterns support system evolution and extension]

- **Quality Attribute Testing**: [Systematic validation of non-functional requirements]
  - **Performance Benchmarks**: [Specific performance criteria and measurement approaches]
  - **Maintainability Metrics**: [Code quality measures and technical debt assessment]
  - **Reliability Testing**: [Error handling, recovery, and system resilience validation]

#### Functional Testing Layers

- **Unit Tests**: [Component-level testing with pattern-aware verification]
  - **Component Isolation**: [Test individual components within pattern boundaries]
  - **Mock Integration**: [Simulate dependencies while testing pattern implementation]
  - **Edge Case Coverage**: [Systematic testing of boundary conditions and error cases]
  - **Pattern Compliance**: [Verify each component correctly implements its pattern role]

- **Integration Tests**: [System-level testing focusing on pattern interactions]
  - **Pattern Boundary Testing**: [Verify correct communication across pattern boundaries]
  - **End-to-End Workflows**: [Complete user scenarios that exercise full pattern stack]
  - **Data Flow Validation**: [Verify correct data transformation across system layers]
  - **Error Propagation**: [Test error handling across integrated components]

- **User Acceptance Tests**: [User-focused validation with quality-aware scenarios]
  - **User Experience Validation**: [Verify that patterns support intended user workflows]
  - **Performance User Testing**: [Validate that pattern implementation meets user performance expectations]
  - **Error Recovery Testing**: [Verify that users can effectively recover from error conditions]
  - **Accessibility Compliance**: [Ensure pattern implementation supports diverse user needs]

#### Advanced Validation Frameworks

- **Automated Quality Gates**: [Continuous validation integrated into development workflow]
  - **Code Quality Metrics**: [Automated assessment of pattern implementation quality]
  - **Performance Regression Testing**: [Continuous monitoring of performance characteristics]
  - **Security Vulnerability Scanning**: [Automated detection of security issues in pattern implementation]
  - **Documentation Validation**: [Automated verification that implementation matches documented patterns]

- **Chaos Engineering**: [Systematic resilience testing under adverse conditions]
  - **Failure Injection**: [Controlled introduction of component and integration failures]
  - **Load Testing**: [Performance validation under realistic and extreme conditions]
  - **Recovery Validation**: [Systematic testing of system recovery and restoration capabilities]
  - **Pattern Degradation**: [Testing how patterns behave when individual components fail]

### Verification Commands

```bash
# Pattern Implementation Validation
grep -r "architectural.*pattern\|design.*pattern" [implementation-files]
grep -r "pattern.*library\|reusable.*component" [implementation-files]

# Quality Framework Integration
grep -r "validation.*framework\|quality.*checkpoint" [implementation-files]
grep -r "error.*handling\|recovery.*strategy" [implementation-files]

# Comprehensive Testing Execution
[# Unit test commands with pattern-aware coverage]
[test-framework] --pattern-validation --coverage-threshold=90%

[# Integration test commands focusing on pattern boundaries]
[integration-test-framework] --pattern-integration --cross-boundary-validation

[# Performance testing with pattern-specific metrics]
[performance-test-tool] --pattern-performance --benchmark-compliance

[# User acceptance test automation]
[acceptance-test-framework] --user-workflow-validation --pattern-user-impact

# Advanced Validation Commands
[# Automated quality gate validation]
[quality-gate-tool] --pattern-compliance --comprehensive-validation

[# Security and resilience testing]
[security-scanner] --pattern-security-analysis
[chaos-testing-tool] --pattern-resilience-validation

[# Documentation and knowledge validation]
[doc-validator] --pattern-documentation-compliance
[knowledge-validator] --implementation-pattern-alignment
```

### Success Metrics

[Define measurable success indicators across multiple quality dimensions:]

#### Pattern Implementation Metrics

- **Pattern Compliance Score**: [≥95% adherence to chosen architectural patterns]
- **Component Reusability Index**: [≥80% of components designed for multi-context reuse]
- **Pattern Integration Efficiency**: [<200ms overhead for cross-pattern communication]
- **Quality Checkpoint Pass Rate**: [100% automated quality gates must pass]

#### Functional Quality Metrics

- **Feature Completeness**: [100% of acceptance criteria implemented and validated]
- **Error Handling Coverage**: [≥98% of potential error conditions handled gracefully]
- **Performance Benchmarks**: [All response times within 95th percentile targets]
- **User Experience Satisfaction**: [≥4.5/5.0 in user acceptance testing]

#### Technical Excellence Metrics

- **Code Quality Score**: [≥A grade in automated code quality assessment]
- **Test Coverage**: [≥95% line coverage, ≥90% branch coverage]
- **Documentation Completeness**: [100% of public interfaces documented with examples]
- **Maintainability Index**: [≥85 on standard maintainability scales]

#### System Integration Metrics

- **Integration Reliability**: [≥99.9% successful integration with existing systems]
- **Backward Compatibility**: [100% compatibility with existing feature interfaces]
- **Deployment Success Rate**: [≥99% successful deployments across environments]
- **Monitoring Coverage**: [100% of critical paths monitored with appropriate alerting]

#### Innovation and Evolution Metrics

- **Pattern Extensibility**: [New requirements accommodated without pattern redesign]
- **Knowledge Transfer Effectiveness**: [≥90% team comprehension of implemented patterns]
- **Future-Proofing Score**: [Implementation supports anticipated evolution scenarios]
- **Best Practice Alignment**: [100% compliance with organizational development standards]
