# task-execution-blueprint

First, load and follow `prp-execution-blueprint.md` for the base execution process. Then apply these task-specific instructions to properly manage task lifecycle, status, and metadata.

## Task Management Instructions

### Pre-Execution Task Validation

Before starting any task execution, verify these requirements:

1. **Location Check**: Confirm the task file is located in `PRPs/Tasks/` directory
2. **Naming Pattern**: Verify filename follows `Task {NN} - {Description}.md` format
3. **Status Check**: Read frontmatter and confirm `status: todo`
4. **Severity Check**: Confirm task has valid severity level (critical/major/medium/minor)
5. **Feature Link**: Verify task has `feature:` link to parent feature

If any validation fails, stop execution and report the issue.

### Status Management Throughout Execution

#### Starting Execution
When beginning task execution:
1. Update frontmatter `status: todo` → `status: in-progress`
2. Add `started: YYYY-MM-DD HH:MM` timestamp
3. Commit with message: `chore: start Task {NN} execution`

#### During Execution
Maintain status awareness:
- Keep status as `in-progress` throughout implementation
- If blocked by external dependency, update to `status: blocked` with reason
- If requiring review, update to `status: review` when implementation complete

#### Completing Execution
When task is successfully completed:
1. Update frontmatter `status: in-progress` → `status: done`
2. Add `completed: YYYY-MM-DD HH:MM` timestamp
3. Remove `started` timestamp (keep only completion)
4. Commit with message: `feat: complete Task {NN} - {description}`

### Sub-Task Management

When encountering sub-tasks in frontmatter:

```yaml
sub_tasks:
  - name: "Setup database"
    status: todo
  - name: "Create API"
    status: todo
```

First, use TodoWrite to create a tracking system for all sub-tasks. This provides clear visibility of progress and remaining work.

Execute each sub-task sequentially:

1. **Track with TodoWrite**: Create a TODO item for each sub-task to monitor progress
2. **Start Sub-task**: Update its status to `in-progress`
3. **Implement**: Complete the sub-task implementation
4. **Test**: Verify sub-task works independently
5. **Update Status**: Mark as `done` if successful, `blocked` if failed
6. **Update TodoWrite**: Check off completed sub-tasks in your TODO list
7. **Decision Point**: 
   - If `done`: Continue to next sub-task
   - If `blocked`: Stop main task execution, update main task to `blocked`

Never skip sub-tasks or execute them out of order. The TodoWrite tracking ensures you maintain awareness of overall progress and don't miss any sub-tasks.

### Severity-Based Execution

Adjust your approach based on task severity:

#### Critical Tasks
- Execute immediately with focus on fixing the issue
- Minimal documentation during execution
- Fix first, document after
- Accept temporary solutions if they resolve the critical issue

#### Major Tasks
- Balance speed with quality
- Include essential documentation
- Ensure no regression in other features
- Implement proper error handling

#### Medium Tasks
- Follow full quality process
- Complete documentation during implementation
- Write comprehensive tests
- Consider edge cases

#### Minor Tasks
- Focus on code quality and maintainability
- Extensive documentation
- Consider future extensibility
- Refactor related code if beneficial

### Task Metadata Management

Maintain accurate metadata in task frontmatter:

```yaml
type: task
status: in-progress
severity: major
feature: User Authentication.md
started: 2024-03-21 14:30
```

Update metadata at each significant event:
- Status changes
- Blocking issues discovered
- Implementation approach changes
- Completion milestones

### Integration with Base Execution

These task instructions enhance the base PRP execution:

1. **Pre-execution Validation** (base) + Task Validation (this)
2. **Context Understanding** (base) + Sub-task Planning (this)
3. **Implementation** (base) + Status Updates (this)
4. **Testing** (base) + Sub-task Testing (this)
5. **Documentation** (base) + Task Metadata (this)
6. **Cleanup** (base) + Final Status Update (this)

### Success Criteria for Tasks

A task is successfully completed when:
- All sub-tasks (if any) are marked `done`
- Base PRP execution criteria are met
- Task status is updated to `done`
- Metadata accurately reflects execution
- Parent feature is aware of task completion
- All commits reference the task number

### Failure Handling for Tasks

If task execution fails:
1. Update status to `blocked`
2. Document blocking reason in frontmatter
3. Add `blocked_reason: "Description of issue"` field
4. Commit current progress with clear message
5. Report issue with actionable next steps

Never leave a task in `in-progress` state when execution stops.