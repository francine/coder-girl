# Overview

Product Requirements Prompts (PRPs) is a structured documentation system for organizing development knowledge, tasks, and features using a DFT (Domains-Features-Tasks) framework. The system transforms human specifications into distributed documentation that can be dynamically reassembled for AI implementation. The system also supports interface generation using visual examples. The Examples/UI/ folder is a critical input: it should contain mockups, wireframes, or screenshots representing intended interfaces. During the Research Phase of the generate-prp command, these visuals are scanned and interpreted to extract reusable layout and UI patterns. These patterns are automatically embedded into relevant Features and Tasks.

## Directory Structure and Purpose

```text
PRPs/
├── Domains/          # Knowledge and context files
├── Tasks/           # Action items with severity and status tracking  
├── Features/        # Development efforts with energy classification
├── Examples/        # Visual and contextual references (UI, data samples)
│   └── UI/          # 🔥 Critical folder: mockups used for interface generation
├── System/          # Framework documentation and templates
│   └── Templates/   # File templates for creating new documents
├── README.md        # This navigation index
└── PROMPT.md        # Project specifications for AI processing
```

### Folders Explained

**Domains/** - Contains reusable knowledge and context patterns. Store implementation approaches, architectural decisions, technical patterns, and any domain-specific knowledge that can be referenced across multiple features and tasks.

**Tasks/** - Houses specific action items with severity tracking. Each task represents executable work that links to its parent feature and implementation domain for complete context assembly.

**Features/** - Contains development efforts that group related tasks. Define scope, dependencies, acceptance criteria, and serve as organizational units for complex functionality.

**Examples/** - Visual and contextual references used by the system.  
The folder `Examples/UI/` is especially critical: it stores mockups and design assets that the system analyzes automatically to generate layout-aware PRPs.

**System/** - Framework documentation, methodology guides, and file templates. This is where you learn how PRP works and find resources for creating new files.

**System/Templates/** - Starter templates for domain, task, and feature files with proper frontmatter structure

## Project Specification File

**[[PROMPT.md]]** - This is where you write your project requirements and specifications in natural language. The file serves as input for Claude Code commands that automatically generate your entire PRP structure.

### How to Use with Claude Commands

1. **Write your specifications** in PROMPT.md using natural language
2. **Run generate-prp command** in Claude Code to process your specifications
    - It will also scan `Examples/UI/` for visual references to guide interface implementation
3. **Claude automatically creates** Features, Tasks, and Domains with proper linking
4. **Use execute-prp command** with any generated task to get full context for implementation

**Example workflow:**

```text
┌────────────────────┐  ┌───────────┐  ┌──────────────┐  ┌───────────────────────┐
│ Human writes specs ├──► PROMPT.md ├──► generate-prp ├──► PRP structure created │
└────────────────────┘  └───────────┘  └──────────────┘  └───────────────────────┘

┌─────────────────┐  ┌─────────────┐  ┌────────────────────────┐  ┌───────────────┐
│ Select any task ├──► execute-prp ├──► Full context assembled ├──► AI implements │
└─────────────────┘  └─────────────┘  └────────────────────────┘  └───────────────┘
```

The system is designed to work seamlessly with Claude Code's agentic capabilities, transforming your high-level requirements into actionable, linked documentation.

## Documentation Index

### Framework Overview

- **[[System/PRP-SYSTEM.md]]** - Internal documentation of the PRP generation framework
- **[[System/prp-generation-blueprint.md]]** - Generation process executed by `generate-prp`
- **[[System/prp-execution-blueprint.md]]** - Execution logic behind `execute-prp`
- **[[System/task-execution-blueprint.md]]** - How task execution works and is validated

### Implementation Documentation

- **[[System/Methodology.md]]** - Context engineering, generate-prp/execute-prp commands, assembly examples
- **[[System/File Structure.md]]** - Directory organization, naming conventions, frontmatter rules, templates
- **[[System/Linking System.md]]** - Link types, context assembly algorithm, error handling
- **[[System/Management Guidelines.md]]** - Task workflows, severity levels, tags, best practices

### Templates and Resources

- **[[System/domain-template.md]]**
- **[[System/task-template.md]]**
- **[[System/feature-template.md]]**

## Quick Navigation

**New to PRP?** → Start with [[System/README.md]]  
**Creating files?** → Use templates in [[System/Templates/]]  
**Understanding links?** → Read [[System/Linking System.md]]  
**Managing tasks?** → See [[System/Management Guidelines.md]]  
**Need methodology details?** → Check [[System/Methodology.md]]
