# Management Guidelines

```yaml
---
type: domain
tags: [management, best-practices, workflow, maintenance]
created: 2025-01-20
updated: 2025-01-20
status: active
up: "[[PRP System.md]]"
related: "[[File Structure.md]], [[Linking System.md]]"
---
```

## Task Status Management

### Status Values

- **🔵 `todo`** - Not yet started, ready for implementation
- **🟡 `in-progress`** - Currently being worked on
- **🟣 `review`** - Awaiting review or approval
- **🟢 `done`** - Completed successfully
- **🔴 `blocked`** - Cannot proceed due to dependencies

### Status Update Rules

- **Status changes**: Update `status` field in frontmatter only
- **Filename stability**: Do not modify filename when status changes
- **Link preservation**: Status changes must not break existing links
- **Timestamp updates**: Update `updated` field when status changes

### Status Workflow

```text
      ┌───────────────┐
      │     todo      │
      └───────┬───────┘
              │
┌─────────────▼────────────┐
│        in-progress       │
└─────┬───────────────┬────┘
      │               │
┌─────▼─────┐  ┌──────▼─────┐
│  review   │  │  blocked   │◄──┐
└───────┬───┘  └────┬───────┘   │
        │           │           │
      ┌─▼───────────▼─┐         │
      │     done      │         │
      └───────┬───────┘         │
              │                 │
              └─────────────────┘
```

## Severity Classification

### Severity Levels

- **🔴 `critical`** - Emergency response required, system breaking issues
- **🟠 `major`** - Important but not emergency, significant impact
- **🟡 `medium`** - Standard development work, moderate impact
- **🟢 `minor`** - Low priority, cosmetic or optimization tasks

### Severity Usage

- **Visual indication**: Emoji in filename for immediate identification
- **Frontmatter storage**: Severity stored in frontmatter for querying
- **Synchronization**: Keep filename emoji and frontmatter severity aligned
- **Priority queuing**: Use severity for work prioritization

### Severity Update Process

1. Update frontmatter `severity` field
2. Update filename emoji to match
3. Update `updated` timestamp
4. Verify links remain intact

## Tag Taxonomy

### Technology Tags

```yaml
tags: [backend, frontend, database, api, security, devops, testing]
```

### Priority Tags

```yaml
tags: [urgent, high, medium, low, critical]
```

### Scope Tags

```yaml
tags: [mvp, enhancement, refactor, bug, feature, spike]
```

### Domain Tags

```yaml
tags: [auth, payment, user-management, notification, analytics]
```

### Status Tags

```yaml
tags: [active, draft, archived, deprecated]
```

## Best Practices

### File Creation Guidelines

#### Content Quality

- Provide concrete examples over abstract descriptions
- Include validation criteria for all tasks
- Link related concepts explicitly
- Update timestamps when modifying content

#### Naming Conventions

- Use Title Case for readability
- Keep descriptions concise but specific
- Include severity emoji in task names
- Maintain consistent formatting

#### Context Linking

- Establish clear hierarchies using `up` relationships
- Create lateral connections with `related` fields  
- Define explicit dependencies for features
- Enable context discovery through comprehensive tagging

### Maintenance Procedures

#### Regular Maintenance Tasks

- Review and update task statuses weekly
- Archive completed tasks quarterly  
- Validate link integrity monthly
- Update tag taxonomy as needed
- Clean orphaned files regularly

#### Content Updates

- Update `updated` timestamp for all changes
- Maintain link consistency when moving files
- Preserve historical context in archived files
- Document breaking changes in related files

#### Quality Assurance

- Verify frontmatter completeness
- Check link format consistency
- Validate severity and status alignment
- Ensure tag taxonomy compliance

## Workflow Guidelines

### Creating New Files

1. **Determine type** (Domain/Task/Feature)
2. **Copy appropriate template** from `System/Templates/`
3. **Follow naming convention** exactly
4. **Add required frontmatter** fields
5. **Link to parent** using `up` field
6. **Tag appropriately** for discoverability

### Updating Existing Files

1. **Modify content** as needed
2. **Update `updated` timestamp**
3. **Verify link integrity**
4. **Update related files** if necessary
5. **Maintain frontmatter accuracy**

### Archiving Workflow

1. **Change status** to `archived`
2. **Update related files** to remove dependencies
3. **Move to archive folder** if desired
4. **Preserve link history** for reference
5. **Update parent contexts**

## File Lifecycle Management

### Active Files

- Regular content updates
- Status tracking enabled
- Full link participation
- Tag maintenance required

### Draft Files

- Work in progress content
- Limited link exposure
- Reduced discoverability
- Temporary status

### Archived Files

- Completed work preserved
- Historical reference value
- Reduced link participation
- Read-only maintenance

### Deprecated Files

- Outdated or replaced content
- Migration path documented
- Link redirection needed
- Scheduled for removal

## Integrated Quality Standards

### Content Quality Requirements

Comprehensive quality standards aligned with established quality criteria:

#### Clarity Standards Integration
- **Readability Compliance**: Content must meet Flesch-Kincaid grade level requirements (≤ grade 12 for general, ≤ grade 10 for user-facing)
- **Terminology Consistency**: All domain-specific terms defined on first use and used consistently (100% compliance required)
- **Actionable Descriptions**: Clear, specific instructions with average sentence length ≤ 20 words
- **Active Voice Usage**: ≥ 70% active voice for actionable content

#### Completeness Standards Integration
- **Requirement Coverage**: All acceptance criteria addressed (100% coverage validation required)
- **Context Sufficiency**: Adequate background information for target audience understanding
- **Concrete Examples**: At least one example per abstract concept (≥ 1:1 ratio)
- **Reference Completeness**: All factual claims supported by authoritative sources

#### Accuracy Standards Integration
- **Source Verification**: All claims verified against authoritative sources (100% for critical information)
- **Currency Compliance**: Content updated within freshness thresholds (critical: 30 days, standard: 90 days)
- **Update Documentation**: All changes documented with timestamps and rationale

#### Relevance Standards Integration
- **Goal Alignment**: Content directly supports stated objectives (≥ 90% direct relevance)
- **Use Case Coverage**: All primary scenarios addressed (100% coverage required)
- **Information Density**: High value-to-word ratio with minimal filler (≥ 80% essential information)

### Structural Quality Requirements

Enhanced structural standards incorporating comprehensive quality criteria:

#### Relationship Integrity Requirements
- **Link Validity**: All internal links functional and accessible (100% link validity required)
- **Bidirectional Consistency**: Reciprocal relationships properly maintained (100% consistency)
- **Semantic Accuracy**: Relationship types accurately reflect content relationships (≥ 95% correctness)
- **Relationship Completeness**: All logical relationships documented (≥ 90% explicit relationships)

#### Hierarchy Consistency Requirements
- **Logical Ordering**: Parent-child relationships follow logical patterns (100% logical consistency)
- **Depth Management**: Hierarchy depth appropriate for content type (3-5 levels maximum)
- **Navigation Efficiency**: Related content accessible within 3 steps (≥ 90% scenarios)

#### Template Compliance Requirements
- **Structure Compliance**: All required template sections present (100% compliance)
- **Metadata Completeness**: All required frontmatter fields populated (100% completion)
- **Formatting Consistency**: Consistent formatting across similar content (≥ 95% consistency)
- **Pattern Adherence**: Content follows established patterns (≥ 90% pattern compliance)

#### Semantic Coherence Requirements
- **Conceptual Consistency**: Consistent definitions across linked content (100% consistency)
- **Logical Coherence**: Arguments follow logical progression (≥ 95% logical validity)
- **Cross-Reference Accuracy**: Accurate content references (100% accuracy)

### Usability Quality Requirements

User experience standards integrated into management processes:

#### Comprehensibility Requirements
- **Cognitive Load Management**: Information in digestible chunks (≤ 7±2 items per section)
- **Learning Effectiveness**: Content enables efficient knowledge transfer (≥ 80% user success)
- **Mental Model Alignment**: Organization matches user expectations (validated through research)

#### Accessibility Requirements
- **Universal Design**: Full accessibility guideline compliance (100% compliance)
- **Technology Compatibility**: Cross-platform accessibility (≥ 95% compatibility)
- **Inclusive Language**: Content uses inclusive, accessible language (validated through review)

#### Navigation Effectiveness Requirements
- **Findability**: Users locate content efficiently (≥ 90% success within 2 minutes)
- **Navigation Efficiency**: Minimal steps to related content (≤ 3 clicks for 90% paths)
- **Orientation Maintenance**: Clear user location awareness (≥ 95% orientation success)

#### Task Completion Requirements
- **Success Rate**: High task completion success (≥ 95% completion rate)
- **Time Efficiency**: Reasonable completion time (≤ 150% expert baseline)
- **Error Prevention**: Minimal user errors (≤ 5% error rate)
- **Satisfaction**: Positive user experience (≥ 4.0/5.0 satisfaction rating)

### Quality-Integrated Maintenance Standards

Enhanced maintenance procedures incorporating systematic quality management:

#### Quality-Driven Status Updates
- **Quality Gate Integration**: Status changes require passing relevant quality gates
- **Criteria Validation**: Status progression validated against quality criteria
- **Quality Metrics Tracking**: Quality improvements tracked with status changes

#### Enhanced Link Integrity Management
- **Automated Monitoring**: Daily automated link validation with quality criteria integration
- **Relationship Quality**: Link integrity includes semantic relationship validation
- **Quality Impact Assessment**: Link changes evaluated for quality impact

#### Comprehensive Quality Maintenance
- **Multi-dimensional Quality Tracking**: Content, structural, and usability quality monitoring
- **Quality Trend Analysis**: Systematic tracking of quality improvements over time
- **Quality Standard Evolution**: Regular review and refinement of quality standards

## Quality-Integrated Validation Checklist

### Pre-Creation Quality Validation

#### Template and Structure
- [ ] Appropriate template selected based on content type and complexity
- [ ] Naming convention followed per established standards
- [ ] Required frontmatter fields identified and planned
- [ ] Parent context identified and validated for logical hierarchy
- [ ] Tags assigned appropriately for discoverability

#### Quality Criteria Pre-Planning
- [ ] Target audience identified for readability requirements
- [ ] Acceptance criteria defined for completeness validation
- [ ] Source requirements identified for accuracy standards
- [ ] Use case coverage planned for relevance assessment
- [ ] Accessibility requirements considered for universal design

### Post-Creation Quality Validation

#### Content Quality Validation
- [ ] **Clarity Compliance**: Readability score within target thresholds (≤ grade 12 general, ≤ grade 10 user-facing)
- [ ] **Terminology Consistency**: Domain terms defined and used consistently (100% compliance)
- [ ] **Completeness Verification**: All acceptance criteria addressed (100% coverage)
- [ ] **Accuracy Validation**: Claims verified against authoritative sources
- [ ] **Relevance Assessment**: Content aligns with stated objectives (≥ 90% relevance)

#### Structural Quality Validation
- [ ] **Link Integrity**: All internal links functional and accessible (100% validity)
- [ ] **Relationship Consistency**: Bidirectional relationships properly maintained
- [ ] **Template Compliance**: Required sections present and properly formatted
- [ ] **Hierarchy Logic**: Parent-child relationships follow logical patterns
- [ ] **Semantic Coherence**: Content integrates meaningfully with broader context

#### Usability Quality Validation
- [ ] **Cognitive Load**: Information presented in manageable chunks (≤ 7±2 items per section)
- [ ] **Navigation Effectiveness**: Related content accessible within 3 steps
- [ ] **Accessibility Compliance**: Universal design principles followed
- [ ] **Task Completion Support**: Content enables successful task completion

#### Technical Validation
- [ ] File saves without errors
- [ ] Metadata validation passes automated checks
- [ ] Cross-references resolve correctly
- [ ] Discoverability enabled through proper tagging
- [ ] Related files updated with reciprocal relationships

### Ongoing Quality Maintenance Validation

#### Regular Quality Monitoring
- [ ] **Content Currency**: Information within freshness thresholds (critical: 30 days, standard: 90 days)
- [ ] **Link Validity**: Automated daily link validation passes
- [ ] **Relationship Integrity**: Bidirectional consistency maintained
- [ ] **Usage Analytics**: Content usage patterns indicate effectiveness
- [ ] **User Feedback**: Satisfaction ratings meet quality thresholds (≥ 4.0/5.0)

#### Quality Trend Tracking
- [ ] **Quality Metrics**: Improvement trends documented and analyzed
- [ ] **Standard Evolution**: Quality standards reviewed and refined
- [ ] **Best Practice Integration**: Emerging best practices incorporated
- [ ] **Quality Training**: Team knowledge updated with quality improvements

#### Maintenance Standards Validation
- [ ] Status reflects current state and quality level
- [ ] Tags remain relevant and accurate
- [ ] Timestamps updated with quality-driven changes
- [ ] Quality impact of changes assessed and documented

### Quality Gate Integration

#### Content Creation Gates
- [ ] **Planning Gate**: Quality requirements defined and approved
- [ ] **Creation Gate**: Initial content meets baseline quality criteria
- [ ] **Review Gate**: Expert review confirms quality compliance
- [ ] **Publication Gate**: Final quality validation before release

#### Maintenance Gates
- [ ] **Update Gate**: Changes maintain or improve quality levels
- [ ] **Review Cycle Gate**: Periodic quality assessment completed
- [ ] **Archive Gate**: Archival decision based on quality and relevance
- [ ] **Evolution Gate**: Quality standard updates implemented
