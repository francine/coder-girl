# PRP Project Template

**An opinionated implementation of Context Engineering for autonomous AI development**

## What is PRP?

**Product Requirements Prompts (PRPs)** is a context engineering methodology for autonomous application development using AI agents. The methodology transforms human specifications into structured, intermediate documentation that enables complete implementation by AI using Claude Code.

Instead of traditional prompt engineering (crafting clever one-shot instructions), PRP builds comprehensive context systems that provide AI agents with everything needed to autonomously develop complete applications.

## Why Use PRP?

Traditional AI development faces critical challenges that PRP solves:

| **Challenge**            | **Traditional Approach**             | **PRP Solution**                        |
|--------------------------|--------------------------------------|-----------------------------------------|
| **Context Loss**         | AI forgets previous decisions        | Persistent architectural blueprints     |
| **Fragmented Knowledge** | Scattered prompts and conversations  | Centralized, structured documentation   |
| **Implementation Gaps**  | Manual translation of specs to code  | Direct autonomous implementation        |

### Core Benefits

✅ **Complete Autonomy**: AI implements entire applications without human intervention  
✅ **Architectural Consistency**: Modular blueprints ensure coherent system design  
✅ **Context Preservation**: Critical insights crystallized for reuse  
✅ **Quality Assurance**: Built-in validation and testing workflows  
✅ **Team Scalability**: Standardized methodology for collaborative development  

## Quick Start

### Prerequisites

1. **Claude Code CLI** installed and authenticated
2. Clone this template repository
3. Your requirements written in natural language

### Basic Usage Flow

**For New Projects:**
```bash
# 1. Write your requirements
echo "Build a task management app with user auth" > PRPs/PROMPT.md

# 2. Generate modular specifications
claude /PRPs:generate-prp

# 3. Implement the entire application
claude /PRPs:execute-prp

# 4. Create development scripts
claude /make-scripts

# 5. Run your application
./run.sh
```

**For Existing Systems:**
```bash
# 1. Analyze existing codebase first
claude /PRPs:update-state

# 2. Add new requirements
echo "Add real-time notifications" >> PRPs/PROMPT.md

# 3. Generate features respecting existing architecture
claude /PRPs:generate-prp

# 4. Implement changes
claude /PRPs:execute-prp
```

## Core Commands

### 🎯 generate-prp
Transforms requirements into modular specifications with autonomous research and architectural design.

### ⚡ execute-prp
Implements features with full context awareness and validation.

**Execution Modes:**
- `execute-prp` - Execute all tasks automatically
- `execute-prp -n` - Execute only the next task
- `execute-prp -i` - Interactive mode with confirmation
- `execute-prp "Feature"` - Execute specific feature

### 📊 update-state
Analyzes existing codebase and generates comprehensive system signatures map.

### 🛠️ make-scripts
Creates intelligent development (`run.sh`) and distribution (`make-dist.sh`) scripts.

### 📝 git-commit
Generates standardized conventional commit messages.

## Project Structure

```text
/your-project
│
├── .claude/                    # Claude Code configuration
│   └── commands/               # PRP methodology commands
│       └── PRPs/              # Core system commands
│
└── PRPs/                      # Main PRP workspace
    ├── PROMPT.md              # 📝 Your requirements (input)
    ├── BLUEPRINT.md           # 🏗️ Conceptual architecture (generated)
    ├── STATE.md               # 📊 System signatures map (generated)
    ├── TASKS.md               # ✅ Execution roadmap (generated)
    ├── Features/              # 📋 Feature specifications (generated)
    ├── Examples/              # 💎 Reusable patterns & code
    └── .metadata/             # 📋 Generation templates
```

## Key Concepts

### Context Engineering vs Prompt Engineering

```
Traditional Prompt Engineering:
┌─────────────┐
│ Clever      │ → AI → Output
│ Prompt      │
└─────────────┘

PRP Context Engineering:
┌─────────────────────────────────────────┐
│ BLUEPRINT.md + STATE.md + Examples/     │
│ + TASKS.md + Feature Specs + History    │ → AI → Complete
│ + Templates + Validation Rules          │      │ Application
└─────────────────────────────────────────┘      │
                    ↑                            │
                    └─────── Feedback ───────────┘
```

### The BLUEPRINT Contract

BLUEPRINT.md is the **conceptual architectural contract** between all commands:
- Documents **WHAT** modules exist (conceptual units)
- Describes **WHY** they exist (responsibilities)
- Defines **HOW** they relate (logical connections)
- Never specifies implementation details

This enables complete implementation freedom while maintaining architectural consistency.

## Example: Your First PRP Project

### Step 1: Define Requirements
```markdown
# PRPs/PROMPT.md

Build a blog platform with:
- User registration and authentication
- Create, edit, delete posts
- Comments with moderation
- Categories and tags
- Search functionality
- Admin dashboard
- Mobile-responsive design

Tech preferences: Modern web stack
Target: Small to medium blogs
```

### Step 2: Generate & Execute
```bash
# Generate architecture and features
claude /PRPs:generate-prp

# Review generated BLUEPRINT.md and Features/

# Implement everything
claude /PRPs:execute-prp

# Create dev environment
claude /make-scripts

# Launch application
./run.sh
```

## Best Practices

### Writing Effective Requirements

✅ **Good Examples:**
- "Build a customer support ticketing system with email integration"
- "Create a URL shortener like bit.ly with analytics"
- "Develop a real-estate listing platform with virtual tours"

❌ **Avoid:**
- Too vague: "Make a good website"
- Over-constrained: Specifying exact libraries and implementation details

### Crystallization Philosophy

Only preserve discoveries that would cause **critical failures** if lost:
- Security vulnerabilities
- Silent production bugs
- Performance disasters
- Undocumented API quirks

Skip common patterns that can be rediscovered.

## Integration with Teams

### Repository Setup
```bash
# Version control PRP methodology
git add .claude/commands/
git add PRPs/.metadata/
git add PRPs/Examples/

# Generated files (not versioned)
echo "PRPs/STATE.md" >> .gitignore
echo "PRPs/TASKS.md" >> .gitignore
```

### Team Workflow
1. Collaborate on requirements in `PROMPT.md`
2. Review generated `BLUEPRINT.md` before implementation
3. Use interactive mode for collaborative execution
4. Share valuable patterns in `Examples/`
5. Keep `STATE.md` current with regular updates

## Getting Started

1. **Clone this template**
   ```bash
   git clone https://github.com/your-org/prp-project-template my-project
   cd my-project
   ```

2. **Install Claude Code**
   ```bash
   npm install -g @anthropic-ai/claude-code
   claude auth login
   ```

3. **Write your requirements** in `PRPs/PROMPT.md`

4. **Let PRP handle the rest** with the commands above

## Learn More

- Read the full methodology in `PRPs/METHODOLOGY.md`
- Explore command documentation in `.claude/commands/`
- Check templates in `PRPs/.metadata/`

---

**Remember**: PRP isn't about replacing your development skills—it's about amplifying them. You remain the architect, defining requirements and making strategic decisions. The methodology ensures your architectural vision gets implemented completely and consistently, every time.

*PRP represents a fundamental shift from prompt crafting to context engineering, enabling truly autonomous AI development that scales with your ambitions.*