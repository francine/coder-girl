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
claude /PRPs:gerar-prp

# 3. Implement the entire application
claude /PRPs:executar-prp
```

**For Existing Systems:**
```bash
# 1. Add new requirements
echo "Add real-time notifications" >> PRPs/PROMPT.md

# 2. Generate features respecting existing architecture
claude /PRPs:gerar-prp

# 3. Implement changes
claude /PRPs:executar-prp
```

## Core Commands

### 🎯 gerar-prp
Transforms requirements into modular specifications with autonomous research and architectural design.

### ⚡ executar-prp
Implements features with full context awareness and validation.

### 📝 git-commit
Generates standardized conventional commit messages.

## Project Structure

```text
/your-project
│
├── .claude/                    # Claude Code configuration
│   └── commands/               # PRP methodology commands
│       └── PRPs/              # Core system commands
│           ├── gerar-prp.md   # Command to generate PRPs
│           └── executar-prp.md # Command to execute PRPs
│
└── PRPs/                      # Main PRP workspace
    ├── PROMPT.md              # 📝 Your requirements (input)
    ├── examples/              # 💎 Reusable patterns & code
    └── metodologia/             # 📋 PRP generation templates
        └── template-prp.md    # Template for generating new PRPs
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
│ PRP Templates + Examples + Project      │
│ Context + Requirements + History        │ → AI → Complete
│ + Implementation Patterns               │      │ Application
└─────────────────────────────────────────┘      │
                    ↑                            │
                    └─────── Feedback ───────────┘
```

### The PRP Template Contract

The PRP template (`PRPs/metodologia/template-prp.md`) provides the **structured framework** for all generated PRPs:
- Documents **WHAT** needs to be built (requirements)
- Describes **WHY** it's needed (problem statement)
- Defines **HOW** to implement it (step-by-step plan)
- Includes validation and testing criteria

This enables consistent implementation while maintaining flexibility in technical choices.

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
# Generate PRP from requirements
claude /PRPs:gerar-prp

# Review generated PRP file

# Implement everything
claude /PRPs:executar-prp
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
git add PRPs/metodologia/
git add PRPs/examples/

# Generated PRP files can be versioned or not, depending on team preference
# To exclude them:
# echo "PRPs/*.prp.md" >> .gitignore
```

### Team Workflow
1. Collaborate on requirements in `PROMPT.md`
2. Review generated PRP files before implementation
3. Execute PRPs to implement features
4. Share valuable patterns in `examples/`
5. Update `PROMPT.md` as requirements evolve

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

- Explore command documentation in `.claude/commands/PRPs/`
- Check PRP templates in `PRPs/metodologia/`
- Review examples in `PRPs/examples/`
- Read `NEXT-STEPS.md` for advanced patterns and context management

---

**Remember**: PRP isn't about replacing your development skills—it's about amplifying them. You remain the architect, defining requirements and making strategic decisions. The methodology ensures your architectural vision gets implemented completely and consistently, every time.

*PRP represents a fundamental shift from prompt crafting to context engineering, enabling truly autonomous AI development that scales with your ambitions.*