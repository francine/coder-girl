# execute-prp

Execute a PRP (Procedural Reference Protocol) with appropriate context and process.

## PRP File: $ARGUMENTS

If no argument is provided, searches for the next task to execute:
1. First looks for any task with status `in-progress` (interrupted work)
2. If none found, looks for the next task with status `todo`
3. Executes the found task

### When PRP is a TASK

After reading the PRP file, determine if it is a task by checking if it's located in `PRPs/Tasks/` directory and follows the naming pattern `Task {NN} - {Description}.md`.

For task PRPs, first read and apply the **task-execution-blueprint.md** before proceeding with the execution process below.

## Execution Process

### 1. Context Assembly

- Read the specified PRP file and extract frontmatter links
- For task PRPs with embedded Context Engineering:
  - Use only the embedded context within the task file
  - Do not traverse external links or assemble external context
- For other PRPs:
  - Follow link traversal rules as needed
  - Assemble complete implementation context in dependency order

### 2. Planning Phase

**ULTRATHINK** before execution:

- Analyze all assembled context and requirements
- Create comprehensive implementation plan addressing all criteria
- Break down complex tasks into manageable steps using todos tools
- Identify implementation patterns from available context
- Use TodoWrite tool to create and track implementation plan
- Extend research with web searches and codebase exploration as needed

### 3. Status Management

Update status in PRP frontmatter when applicable:

```yaml
status: in-progress  # Update when starting implementation
```

### 4. Implementation

- Execute the planned implementation
- Follow patterns and approaches from context
- Reference specifications for scope and acceptance criteria
- Implement all required functionality per PRP specifications

### 5. Validation

- Run each validation command specified in PRP
- Execute acceptance criteria tests
- Fix any failures using error patterns from context
- Re-run validation until all tests pass
- Cross-reference with requirements

### 6. Completion

- Verify all acceptance criteria met
- Run final validation suite
- Update status:

```yaml
status: done         # Mark as completed
updated: 2025-01-20  # Update timestamp
```

- Report completion status with summary

## Context Re-Assembly

If additional context needed during implementation:

- Reference the original PRP file and any linked resources
- Follow link chains again for updated information
- Maintain awareness of complete context throughout process

## Error Handling

When validation fails:

- Consult error handling patterns from context
- Review acceptance criteria for specific requirements
- Use related files for implementation guidance
- Retry with corrected approach

## Success Criteria

PRP execution is complete when:

- [ ] All acceptance criteria from PRP met
- [ ] All validation commands pass
- [ ] Implementation follows established patterns
- [ ] Requirements satisfied
- [ ] Status updated to done
- [ ] Final validation suite passes