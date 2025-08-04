# generate-prp

Generate comprehensive DTF (Domains-Tasks-Features) documentation from initial specification with thorough research and context engineering.

## Initial File: $ARGUMENTS

If `$ARGUMENTS` is not provided, treat `$ARGUMENTS` as the document `PRPs/PROMPT.md`.

Read the specification file first to understand what needs to be created, which domains are involved, and what features/tasks need to be implemented. The implementing AI will only get the context you create in the DTF files and their frontmatter links. Assume the AI agent has access to the codebase and websearch capabilities.

## Generation Process

### Research Phase

#### 1. Codebase Analysis
- Search for similar features/patterns in the codebase
- Identify reusable knowledge patterns for domains
- Note existing conventions and implementation approaches
- Review existing PRPs structure for similar features
- Check test patterns for validation approach
- Scan `PRPs/Examples/UI/` for visual references (mockups, layouts)
- Extract layout patterns and UI structures from visual examples

#### 2. External Research
- Search for relevant documentation and best practices for mentioned technologies
- Find library documentation (include specific URLs for the AI agent)
- Locate implementation examples (GitHub/StackOverflow/blogs)
- Identify common pitfalls and gotchas
- Note version-specific issues or library quirks

#### 3. User Clarification (if needed)
- Specific patterns to mirror and where to find them?
- Integration requirements and constraints?
- Performance or security considerations?

### Planning Phase

- Map all domains needed and their hierarchical relationships
- Identify each distinct feature with clear scope boundaries
- Break features into atomic, executable tasks with proper severity
- Plan frontmatter linking strategy for optimal context assembly
- Design implementation blueprint with pseudocode approach
- Consider error handling strategies and validation gates
- For features involving UI, align implementation plan with patterns extracted from `Examples/UI/`
- For tasks, include mockup references in context snapshot if visually driven

*** CRITICAL AFTER YOU ARE DONE RESEARCHING AND EXPLORING THE CODEBASE BEFORE YOU START WRITING THE PRP ***
*** ULTRATHINK ABOUT THE PRP AND PLAN YOUR APPROACH THEN START WRITING THE PRP ***

### Generation Phase

Create the DTF files following exact structure and conventions:

#### 1. Domain Files in `PRPs/Domains/`

- **Naming**: `{Title}.md`
- **Content**: 
  - Comprehensive knowledge patterns and implementation approaches
  - Include URLs to documentation and best practices
  - Reference existing codebase patterns
  - Document common pitfalls and solutions
- **Frontmatter**: Proper `up`, `related` links

#### 2. Feature Files in `PRPs/Features/`

- **Naming**: `{Short Description} {Subject}.md`
- **Content**: 
  - Complete implementation context, scope, dependencies
  - Implementation blueprint with pseudocode
  - Acceptance criteria and validation approach
  - Error handling strategy
- **Frontmatter**: Required `up`, `dependencies`, optional `related` links

#### 3. Task Files in `PRPs/Tasks/`

- **Naming**: `Task {NN} - {Verb} {Description}.md`
- **Severity**: Assign appropriate level
  - `critical`, `major`, `medium`, `minor`
- **Status**: Set initial status
  - `todo`, `in-progress`, `review`, `done`, `blocked`
- **Content**: 
  - Specific implementation steps
  - Validation commands that are executable
  - Reference to patterns in codebase
  - Clear success criteria
  - If UI-related, include visual reference from `Examples/UI/` in context snapshot
- **Frontmatter**: Required `up`, `feature`, optional `related` links

### Context Engineering

Plan frontmatter links to ensure execute-prp can assemble complete context:

- **Dependencies first**: Link to required knowledge domains
- **Up chain**: Establish clear parent-child relationships  
- **Feature relationships**: Connect tasks to parent features
- **Related connections**: Create lateral knowledge networks

Include in context:
- **Documentation URLs**: With specific sections referenced
- **Code Examples**: Real snippets from codebase
- **Implementation Patterns**: Existing approaches to follow
- **Validation Gates**: Executable commands for self-validation
- **Visual Mockups**: Link mockups from `Examples/UI/` that inform visual implementation

### Quality Validation

#### Validation Checklist
- [ ] All frontmatter links resolve to existing files
- [ ] Context assembly paths provide complete implementation context
- [ ] All specification requirements covered by generated files
- [ ] Naming conventions match system standards
- [ ] Severity and status assignments are appropriate
- [ ] No circular dependencies in link structure
- [ ] Validation gates are executable by AI
- [ ] References to existing patterns included
- [ ] Clear implementation path defined
- [ ] Error handling documented

#### Quality Score
Score the generated PRP structure on a scale of 1-10 for confidence level to succeed in one-pass implementation using execute-prp.

## Success Criteria

The generated DTF structure should enable autonomous AI implementation through execute-prp by providing:
- Complete, linked context following dependency chains
- Executable validation gates for self-verification
- Clear references to existing patterns and documentation
- Comprehensive error handling strategies
- All necessary URLs and external resources

Remember: The goal is one-pass implementation success through comprehensive context engineering.