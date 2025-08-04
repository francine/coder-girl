# Quality Gates Pattern

```yaml
---
type: pattern
category: validation-pattern
tags: [quality-gates, automated-validation, quality-metrics, checkpoints]
created: 2025-01-26
updated: 2025-01-26
status: active
usage: "Standardized quality checkpoints for any implementation"
customization: "Adapt thresholds and metrics based on criticality and context"
---
```

## Pattern Description

Comprehensive quality gates pattern that provides standardized, measurable checkpoints for ensuring implementation quality. This pattern enables automated and manual quality validation with clear pass/fail criteria and escalation procedures.

## Quality Gate Framework

### Gate Categories

#### Functional Quality Gates
```yaml
functional_validation:
  unit_testing:
    metric: "test_coverage"
    threshold: "80%"
    measurement: "percentage of code covered by tests"
    validation_command: "npm run test:coverage"
    failure_action: "block_progression"
  
  integration_testing:
    metric: "integration_test_pass_rate"
    threshold: "100%"
    measurement: "percentage of integration tests passing"
    validation_command: "npm run test:integration"
    failure_action: "block_progression"
  
  acceptance_testing:
    metric: "acceptance_criteria_completion"
    threshold: "100%"
    measurement: "percentage of acceptance criteria met"
    validation_command: "npm run test:acceptance"
    failure_action: "block_progression"
```

#### Performance Quality Gates
```yaml
performance_validation:
  response_time:
    metric: "average_response_time"
    threshold: "<200ms"
    measurement: "milliseconds for typical request"
    validation_command: "npm run test:performance"
    failure_action: "conditional_progression"
  
  throughput:
    metric: "requests_per_second"
    threshold: ">1000"
    measurement: "concurrent requests handled"
    validation_command: "npm run test:load"
    failure_action: "conditional_progression"
  
  resource_usage:
    metric: "memory_consumption"
    threshold: "<512MB"
    measurement: "peak memory usage during operation"
    validation_command: "npm run test:memory"
    failure_action: "conditional_progression"
```

#### Security Quality Gates
```yaml
security_validation:
  vulnerability_scan:
    metric: "critical_vulnerabilities"
    threshold: "0"
    measurement: "number of critical security issues"
    validation_command: "npm audit --audit-level critical"
    failure_action: "block_progression"
  
  dependency_check:
    metric: "outdated_dependencies"
    threshold: "0 critical, 2 moderate"
    measurement: "vulnerable dependencies by severity"
    validation_command: "npm audit"
    failure_action: "conditional_progression"
  
  authentication_test:
    metric: "auth_bypass_attempts"
    threshold: "0 successful"
    measurement: "authentication bypass test results"
    validation_command: "npm run test:security"
    failure_action: "block_progression"
```

#### Code Quality Gates
```yaml
code_quality_validation:
  static_analysis:
    metric: "code_quality_grade"
    threshold: "A"
    measurement: "static analysis grade (A-F)"
    validation_command: "npm run lint:quality"
    failure_action: "conditional_progression"
  
  complexity_analysis:
    metric: "cyclomatic_complexity"
    threshold: "<10"
    measurement: "average cyclomatic complexity"
    validation_command: "npm run analyze:complexity"
    failure_action: "conditional_progression"
  
  documentation_coverage:
    metric: "documentation_completeness"
    threshold: "90%"
    measurement: "percentage of public APIs documented"
    validation_command: "npm run docs:coverage"
    failure_action: "conditional_progression"
```

### Gate Implementation Patterns

#### Automated Quality Gates
```yaml
automated_gate_structure:
  gate_definition:
    name: "descriptive_gate_name"
    description: "What this gate validates"
    metric: "measurable_aspect"
    threshold: "pass_fail_criteria"
    
  execution:
    trigger: "when_to_run_gate"
    command: "automated_validation_command"
    timeout: "maximum_execution_time"
    retry_policy: "how_to_handle_failures"
    
  result_handling:
    pass_action: "what_happens_on_success"
    fail_action: "what_happens_on_failure"
    escalation: "who_to_notify_on_failure"
    documentation: "where_to_record_results"
```

#### Manual Quality Gates
```yaml
manual_gate_structure:
  gate_definition:
    name: "descriptive_gate_name"
    description: "What requires human validation"
    criteria: ["specific_checkpoints"]
    reviewer_role: "who_can_approve"
    
  execution:
    trigger: "when_manual_review_needed"
    checklist: ["items_to_verify"]
    evidence: ["artifacts_to_review"]
    decision_framework: "how_to_make_pass_fail_decision"
    
  result_handling:
    approval_process: "how_approval_is_recorded"
    rejection_process: "what_happens_on_rejection"
    appeal_process: "how_to_escalate_disagreements"
    documentation: "where_decisions_are_recorded"
```

### Quality Gate Orchestration

#### Sequential Gates
```yaml
sequential_execution:
  description: "Gates must pass in specific order"
  pattern: "Gate A → Gate B → Gate C"
  
  implementation:
    - gate: "unit_testing"
      prerequisite: "code_completion"
      on_pass: "proceed_to_integration_testing"
      on_fail: "block_progression"
    
    - gate: "integration_testing"
      prerequisite: "unit_testing_passed"
      on_pass: "proceed_to_acceptance_testing"
      on_fail: "block_progression"
    
    - gate: "acceptance_testing"
      prerequisite: "integration_testing_passed"
      on_pass: "proceed_to_deployment"
      on_fail: "block_progression"
```

#### Parallel Gates
```yaml
parallel_execution:
  description: "Gates can run simultaneously"
  pattern: "Gate A + Gate B + Gate C"
  
  implementation:
    parallel_group:
      - gate: "performance_testing"
        independent: true
        duration: "10-15 minutes"
      
      - gate: "security_scanning"
        independent: true
        duration: "5-10 minutes"
      
      - gate: "code_quality_analysis"
        independent: true
        duration: "3-5 minutes"
    
    coordination:
      wait_for: "all_gates_in_group"
      proceed_when: "all_pass"
      fail_when: "any_critical_gate_fails"
```

#### Conditional Gates
```yaml
conditional_execution:
  description: "Gates apply based on context"
  pattern: "If condition then Gate A else Gate B"
  
  implementation:
    conditions:
      - condition: "feature_touches_security_code"
        gates: ["security_review", "penetration_testing"]
      
      - condition: "feature_affects_performance"
        gates: ["load_testing", "performance_profiling"]
      
      - condition: "feature_has_ui_changes"
        gates: ["accessibility_testing", "ui_regression_testing"]
    
    default_gates: ["unit_testing", "integration_testing"]
```

## Implementation Templates

### Basic Quality Gate Implementation

```bash
#!/bin/bash
# Basic Quality Gate Script Template

GATE_NAME="[Gate Name]"
THRESHOLD="[Success Threshold]"
COMMAND="[Validation Command]"

echo "Starting quality gate: $GATE_NAME"
echo "Threshold: $THRESHOLD"

# Execute validation
RESULT=$($COMMAND)
EXIT_CODE=$?

# Evaluate result
if [ $EXIT_CODE -eq 0 ]; then
    echo "✅ Quality gate PASSED: $GATE_NAME"
    echo "Result: $RESULT"
    exit 0
else
    echo "❌ Quality gate FAILED: $GATE_NAME"
    echo "Result: $RESULT"
    echo "Threshold: $THRESHOLD"
    exit 1
fi
```

### Advanced Quality Gate Implementation

```bash
#!/bin/bash
# Advanced Quality Gate Script Template

# Configuration
GATE_CONFIG="quality-gates.yaml"
GATE_NAME="$1"
CONTEXT="$2"

# Load configuration
source gate-config-loader.sh "$GATE_CONFIG" "$GATE_NAME"

# Pre-execution validation
validate_prerequisites() {
    echo "Validating prerequisites for $GATE_NAME..."
    
    # Check dependencies
    for dep in "${PREREQUISITES[@]}"; do
        if ! command -v "$dep" &> /dev/null; then
            echo "❌ Missing prerequisite: $dep"
            exit 1
        fi
    done
    
    # Check previous gates
    for prev_gate in "${REQUIRED_GATES[@]}"; do
        if ! check_gate_status "$prev_gate"; then
            echo "❌ Required gate not passed: $prev_gate"
            exit 1
        fi
    done
    
    echo "✅ Prerequisites validated"
}

# Execute gate
execute_gate() {
    echo "Executing quality gate: $GATE_NAME"
    echo "Context: $CONTEXT"
    echo "Threshold: $THRESHOLD"
    
    # Run with timeout
    timeout "$TIMEOUT" bash -c "$COMMAND"
    local exit_code=$?
    
    # Handle timeout
    if [ $exit_code -eq 124 ]; then
        echo "❌ Quality gate TIMEOUT: $GATE_NAME"
        record_failure "timeout" "$TIMEOUT"
        exit 1
    fi
    
    return $exit_code
}

# Evaluate results
evaluate_results() {
    local exit_code=$1
    local result="$2"
    
    if [ $exit_code -eq 0 ]; then
        if evaluate_threshold "$result" "$THRESHOLD"; then
            echo "✅ Quality gate PASSED: $GATE_NAME"
            record_success "$result"
            trigger_success_actions
            return 0
        else
            echo "❌ Quality gate FAILED: $GATE_NAME (threshold not met)"
            record_failure "threshold" "$result"
            trigger_failure_actions
            return 1
        fi
    else
        echo "❌ Quality gate FAILED: $GATE_NAME (execution error)"
        record_failure "execution" "$result"
        trigger_failure_actions
        return 1
    fi
}

# Main execution
main() {
    validate_prerequisites
    
    RESULT=$(execute_gate)
    EXIT_CODE=$?
    
    evaluate_results $EXIT_CODE "$RESULT"
}

# Run if called directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi
```

## Quality Gate Patterns by Context

### Development Phase Gates
```yaml
code_development:
  gates:
    - unit_testing: "Ensure component-level functionality"
    - code_review: "Peer validation of implementation"
    - static_analysis: "Automated code quality checking"
  
  thresholds:
    unit_testing: "80% coverage, 100% pass rate"
    code_review: "approved by 2 developers"
    static_analysis: "grade B or better"
```

### Integration Phase Gates
```yaml
system_integration:
  gates:
    - integration_testing: "Component interaction validation"
    - api_contract_testing: "Interface compliance verification"
    - data_flow_testing: "End-to-end data validation"
  
  thresholds:
    integration_testing: "100% critical path coverage"
    api_contract_testing: "100% contract compliance"
    data_flow_testing: "no data loss or corruption"
```

### Pre-Production Gates
```yaml
production_readiness:
  gates:
    - performance_testing: "Production-level performance validation"
    - security_testing: "Security vulnerability assessment"
    - operational_readiness: "Monitoring and alerting validation"
  
  thresholds:
    performance_testing: "meets SLA requirements"
    security_testing: "no critical vulnerabilities"
    operational_readiness: "monitoring covers 90% of failure modes"
```

## Quality Gate Customization

### Threshold Adaptation
```yaml
criticality_based_thresholds:
  critical_systems:
    test_coverage: "95%"
    performance_degradation: "0%"
    security_vulnerabilities: "0"
  
  standard_systems:
    test_coverage: "80%"
    performance_degradation: "5%"
    security_vulnerabilities: "0 critical, 2 moderate"
  
  experimental_systems:
    test_coverage: "60%"
    performance_degradation: "10%"
    security_vulnerabilities: "0 critical, 5 moderate"
```

### Context-Specific Gates
```yaml
domain_specific_gates:
  user_interface:
    - accessibility_compliance: "WCAG 2.1 AA standard"
    - visual_regression: "no unintended UI changes"
    - user_experience: "usability testing approval"
  
  data_processing:
    - data_integrity: "100% data accuracy"
    - processing_performance: "batch completion within SLA"
    - data_privacy: "PII handling compliance"
  
  api_services:
    - api_documentation: "100% endpoint documentation"
    - backwards_compatibility: "no breaking changes"
    - rate_limiting: "proper throttling implementation"
```

## Integration with Templates

### Task Template Integration
```yaml
task_quality_gates:
  pre_implementation:
    - dependency_verification
    - design_approval
    - resource_allocation_confirmation
  
  implementation:
    - milestone_checkpoints
    - incremental_validation
    - integration_verification
  
  completion:
    - acceptance_criteria_validation
    - handoff_readiness_check
    - documentation_completeness
```

### Feature Template Integration
```yaml
feature_quality_gates:
  design_phase:
    - user_story_completeness
    - technical_design_review
    - user_experience_validation
  
  development_phase:
    - functionality_implementation
    - integration_validation
    - performance_verification
  
  release_phase:
    - user_acceptance_testing
    - production_readiness
    - rollback_plan_validation
```

This quality gates pattern provides a comprehensive framework for ensuring consistent quality across all implementations while allowing for appropriate customization based on context, criticality, and specific requirements.