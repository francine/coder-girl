# Domain Decomposition Guide

```yaml
---
type: domain
tags: [domain-decomposition, guide, decision-trees, examples]
created: 2025-07-25
updated: 2025-07-25
status: active
up: "[[PRP System.md]]"
related: "[[Knowledge Organization.md]], [[Methodology.md]]"
---
```

## Overview

This guide provides comprehensive, practical guidance for applying domain decomposition strategies within the PRP framework. Use this guide when complex knowledge areas need to be broken down into manageable, focused components that maintain coherent relationships and enable effective context assembly.

## When to Use Domain Decomposition

### Complexity Indicators

Apply domain decomposition when you encounter:

- **Knowledge Overload**: Single domain contains more information than can be effectively processed
- **Multiple Responsibilities**: Domain addresses several distinct concerns or capabilities
- **Team Boundaries**: Different teams need to work with different aspects of the knowledge area
- **Evolution Conflicts**: Different parts of the domain change at different rates or for different reasons
- **Context Assembly Issues**: Assembled context becomes too large or unfocused for effective AI processing

### Size Guidelines

Consider decomposition when:
- Domain files exceed 500 lines of content
- Context assembly for domain-related tasks consistently exceeds optimal AI context windows
- Domain serves more than 3-4 distinct use cases or user types
- Domain requires specialized knowledge from multiple technical areas

## Decomposition Strategy Decision Tree

### Primary Decision: Organizational Driver

**Question**: What is the primary organizing principle for this knowledge area?

#### Branch 1: Capabilities and Functions
**If knowledge is primarily organized around "what the system does"**
→ **Use Functional Decomposition**

Examples: User management, payment processing, content delivery, notification systems

#### Branch 2: Technical Implementation  
**If knowledge is primarily organized around "how the system is built"**
→ **Use Technical Decomposition**

Examples: Frontend components, API layers, database schemas, deployment configurations

#### Branch 3: User Goals and Workflows
**If knowledge is primarily organized around "what users want to accomplish"**
→ **Use User-Centric Decomposition**

Examples: Onboarding experience, purchasing workflow, content creation process, support interactions

#### Branch 4: Business Processes
**If knowledge is primarily organized around "how the organization operates"**
→ **Use Process Decomposition**

Examples: Development lifecycle, quality assurance procedures, customer support processes, compliance workflows

### Secondary Decision: Complexity Assessment

For each identified organizational driver, assess complexity:

**Low Complexity** (2-3 subdomains)
- Use single-level decomposition
- Maintain direct parent-child relationships
- Focus on clear separation of concerns

**Medium Complexity** (4-7 subdomains)
- Use two-level decomposition with logical groupings
- Create intermediate organizing domains
- Balance breadth and depth

**High Complexity** (8+ subdomains)
- Use three-level decomposition maximum
- Apply hybrid strategies combining multiple approaches
- Consider organizational constraints and team boundaries

### Tertiary Decision: Hybrid Strategy Selection

**When single strategy is insufficient:**

**Functional + Technical Hybrid**
- High-level functional decomposition (what)
- Technical decomposition within complex functional areas (how)
- Example: Authentication System → Login (Frontend + Backend + Database)

**User-Centric + Process Hybrid**
- User journey organization at top level (user goals)
- Process decomposition within complex workflows (operational steps)
- Example: Customer Support → Issue Resolution (Intake → Analysis → Resolution → Follow-up)

## Strategy Implementation Guides

### Functional Decomposition Implementation

#### Step-by-Step Process

1. **Capability Mapping**
   - List all capabilities mentioned in the knowledge area
   - Group related capabilities that share resources or dependencies
   - Identify high-level functional boundaries

2. **Feature Analysis**
   - Within each capability, identify distinct features
   - Determine which features can be developed independently
   - Map feature dependencies and interaction points

3. **Service Boundaries**
   - Define clear interfaces between functional domains
   - Establish service-level contracts and communication patterns
   - Ensure each domain can be understood and developed independently

4. **Hierarchy Construction**
   - Create parent domains for major capabilities
   - Create child domains for specific features within capabilities
   - Establish clear inheritance and composition relationships

#### Implementation Example: E-commerce Platform

```
E-commerce Platform (Original Complex Domain)
↓ Functional Decomposition
├── Product Management
│   ├── Product Catalog
│   ├── Inventory Management
│   └── Product Recommendations
├── Order Processing  
│   ├── Shopping Cart
│   ├── Checkout Process
│   └── Order Fulfillment
├── Customer Management
│   ├── User Accounts
│   ├── Customer Profiles
│   └── Loyalty Programs
└── Payment Processing
    ├── Payment Methods
    ├── Transaction Processing
    └── Refund Management
```

**Frontmatter Structure:**
```yaml
# Product Management.md
up: "[[E-commerce Platform.md]]"
related: "[[Order Processing.md]]"

# Shopping Cart.md  
up: "[[Order Processing.md]]"
related: "[[Product Catalog.md]], [[Payment Methods.md]]"
```

### Technical Decomposition Implementation

#### Step-by-Step Process

1. **Architecture Mapping**
   - Identify major architectural layers and components
   - Map technology stack and implementation boundaries
   - Determine component interaction patterns

2. **Layer Analysis**
   - Define clear responsibilities for each technical layer
   - Establish data flow and dependency relationships
   - Identify cross-cutting concerns and shared components

3. **Technology Grouping**
   - Group knowledge by specific technologies or frameworks
   - Create domains for technology-specific configurations and patterns
   - Establish technology migration and evolution paths

4. **Integration Patterns**
   - Document how different technical components interact
   - Define interface specifications and communication protocols
   - Establish testing and deployment relationships

#### Implementation Example: Web Application Architecture

```
Web Application (Original Complex Domain)
↓ Technical Decomposition
├── Frontend Layer
│   ├── React Components
│   ├── State Management (Redux)
│   └── UI/UX Patterns
├── API Layer
│   ├── REST Endpoints
│   ├── GraphQL Schema
│   └── Authentication Middleware
├── Business Logic Layer
│   ├── Domain Services
│   ├── Business Rules Engine
│   └── Data Validation
└── Data Layer
    ├── Database Schema
    ├── Data Access Patterns
    └── Caching Strategy
```

**Frontmatter Structure:**
```yaml
# API Layer.md
up: "[[Web Application.md]]"
dependencies: "[[Data Layer.md]]"
related: "[[Frontend Layer.md]]"

# REST Endpoints.md
up: "[[API Layer.md]]"
dependencies: "[[Business Logic Layer.md]]"
```

### User-Centric Decomposition Implementation

#### Step-by-Step Process

1. **User Journey Mapping**
   - Document complete user paths through the system
   - Identify distinct user goals and motivations
   - Map user decision points and interaction contexts

2. **Goal Analysis**
   - Define what users are trying to accomplish
   - Group related goals that share user context
   - Identify user success criteria and completion states

3. **Workflow Coherence**
   - Ensure each domain supports complete user workflows
   - Minimize context switching between domains for user tasks
   - Maintain user mental models and expectations

4. **Interaction Context**
   - Consider different user interaction modes (mobile, desktop, API)
   - Account for user expertise levels and experience contexts
   - Design for accessibility and diverse user needs

#### Implementation Example: Content Management System

```
Content Management System (Original Complex Domain)
↓ User-Centric Decomposition
├── Content Creation
│   ├── Writing and Editing
│   ├── Media Management
│   └── Collaboration Tools
├── Content Publishing
│   ├── Review and Approval
│   ├── Publishing Workflow
│   └── Distribution Channels
├── Content Discovery
│   ├── Search and Navigation
│   ├── Content Organization
│   └── Recommendation Engine
└── Performance Analytics
    ├── Usage Metrics
    ├── Engagement Analysis
    └── Performance Optimization
```

**Frontmatter Structure:**
```yaml
# Content Creation.md
up: "[[Content Management System.md]]"
related: "[[Content Publishing.md]]"

# Writing and Editing.md
up: "[[Content Creation.md]]"
related: "[[Media Management.md]], [[Review and Approval.md]]"
```

### Process Decomposition Implementation

#### Step-by-Step Process

1. **Process Mapping**
   - Document end-to-end business processes
   - Identify process phases and decision points
   - Map process ownership and responsibilities

2. **Workflow Analysis**
   - Break processes into logical phases or stages
   - Identify sequential dependencies and parallel activities
   - Define process inputs, outputs, and transformation steps

3. **Responsibility Alignment**
   - Align domains with organizational responsibilities
   - Consider process ownership and accountability structures
   - Account for cross-functional process coordination

4. **Lifecycle Management**
   - Address different phases of process execution
   - Consider process variations and exception handling
   - Plan for process improvement and evolution

#### Implementation Example: Software Development Process

```
Software Development Process (Original Complex Domain)
↓ Process Decomposition
├── Requirements Phase
│   ├── Stakeholder Analysis
│   ├── Requirements Gathering
│   └── Requirements Validation
├── Design Phase
│   ├── System Architecture
│   ├── Technical Design
│   └── Design Review
├── Implementation Phase
│   ├── Development Standards
│   ├── Code Implementation
│   └── Code Review
├── Testing Phase
│   ├── Test Planning
│   ├── Test Execution
│   └── Quality Assurance
└── Deployment Phase
    ├── Release Planning
    ├── Deployment Process
    └── Production Monitoring
```

**Frontmatter Structure:**
```yaml
# Requirements Phase.md
up: "[[Software Development Process.md]]"
related: "[[Design Phase.md]]"

# Requirements Gathering.md
up: "[[Requirements Phase.md]]"
related: "[[Stakeholder Analysis.md]], [[System Architecture.md]]"
```

## Validation and Quality Assurance

### Decomposition Validation Checklist

**Structural Validation:**
- [ ] Each subdomain has a single, clear responsibility
- [ ] Domain boundaries are well-defined with minimal overlap
- [ ] Hierarchy reflects actual relationships (conceptual, implementation, or organizational)
- [ ] All subdomains contribute meaningfully to parent domain purpose

**Relationship Validation:**
- [ ] Frontmatter links accurately represent domain relationships
- [ ] Dependencies are properly documented and acyclic
- [ ] Related domains are identified at appropriate relationship distances
- [ ] Up-chain relationships create logical hierarchical paths

**Context Assembly Validation:**
- [ ] Assembled context for domain-related tasks is appropriately sized
- [ ] Context maintains focus while providing necessary background
- [ ] Domain decomposition supports efficient AI context processing
- [ ] Related domains provide relevant context without information overload

**Usability Validation:**
- [ ] Developers can find relevant information efficiently
- [ ] Domain organization matches team mental models and workflow
- [ ] Documentation navigation follows logical patterns
- [ ] Cross-references support discovery of related information

### Common Decomposition Pitfalls

**Over-Decomposition:**
- Creating too many small domains that fragment knowledge unnecessarily
- Breaking atomic concepts that should remain unified
- Creating maintenance overhead without meaningful benefit

**Under-Decomposition:**
- Leaving domains too large and complex for effective use
- Combining unrelated concerns within single domains
- Creating bottlenecks where multiple teams need to modify the same domain

**Inconsistent Strategy Application:**
- Mixing decomposition strategies without clear rationale
- Applying different strategies at the same hierarchical level
- Creating confusing organizational patterns that don't match user expectations

**Poor Boundary Definition:**
- Creating overlapping domains with unclear responsibilities
- Establishing dependencies that create circular relationships
- Defining boundaries that don't align with actual implementation or organizational constraints

## Advanced Techniques

### Hybrid Strategy Patterns

**Layered Hybrid Approach:**
1. Use one strategy for high-level organization
2. Apply different strategies within complex subdomains
3. Maintain consistency within each organizational level

**Context-Sensitive Decomposition:**
1. Apply different strategies based on domain characteristics
2. Use functional decomposition for capability-focused areas
3. Use technical decomposition for implementation-heavy areas
4. Use user-centric decomposition for experience-focused areas

### Dynamic Decomposition Evolution

**Evolutionary Patterns:**
- Start with simple decomposition and evolve as complexity grows
- Monitor usage patterns to identify areas needing further decomposition
- Refactor domain boundaries based on team feedback and development experience

**Migration Strategies:**
- Plan decomposition changes to minimize disruption to existing links
- Use gradual migration approaches for large domain restructuring
- Maintain backward compatibility during transition periods

### Organizational Alignment

**Team Structure Considerations:**
- Align domain boundaries with team responsibilities where possible
- Consider Conway's Law implications for domain organization
- Account for team communication patterns and collaboration needs

**Governance and Ownership:**
- Establish clear ownership for each decomposed domain
- Define responsibilities for maintaining domain content and relationships
- Create governance processes for domain boundary changes and evolution

## Conclusion

Effective domain decomposition is essential for managing complex knowledge areas within the PRP framework. By systematically applying the appropriate decomposition strategy based on organizational drivers, complexity assessment, and team alignment, you can create manageable, focused domains that support efficient development and maintenance while enabling effective AI-driven context assembly and task execution.

Remember that decomposition is not a one-time activity but an evolving process that should adapt to changing requirements, team structures, and organizational needs. Regular validation and refinement of domain boundaries ensures continued effectiveness and alignment with project goals.