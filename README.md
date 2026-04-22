<p align="center">
  <img src="ForgeFox_Logo.png" width="200" height="200" alt="ForgeFox Logo">
</p>

<h1 align="center">ForgeFox</h1>

<p align="center">
  <strong>An open-source AI coding assistant for VS Code — forged by the community, for the community.</strong>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-what-is-forgefox">What Is ForgeFox?</a> •
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-supported-providers">Providers</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>

---

## 🦊 What Is ForgeFox?

**ForgeFox** is an open-source, community-maintained fork of [Roo Code](https://github.com/RooCodeInc/Roo-Code), the popular AI-powered coding assistant for Visual Studio Code.

When Roo Code shifted toward a cloud-based approach, we forked the project to ensure the community continues to have access to a **powerful, local-first, provider-agnostic AI coding assistant** that puts developers first.

### Our Mission

ForgeFox is committed to:

- 🔓 **Remaining open source** — always Apache 2.0 licensed, always community-driven
- 🏠 **Local-first development** — your code stays on your machine, your API keys stay yours
- 🔌 **Provider freedom** — use any LLM provider you want: OpenAI, Anthropic, Google, Ollama, LM Studio, and dozens more
- 🛠️ **IDE-centric design** — built for the developer workflow, not the cloud
- 👥 **Community empowerment** — every contributor helps shape the future of AI-assisted coding

While Roo Code moved toward cloud services, **ForgeFox refines the experience with the developer and IDE in mind**. We believe the best AI coding tools should be open, flexible, and under your control.

---

## ⚡ Quick Start

1. **Install the extension** (see [Installation](#-installation) below)
2. **Configure an API key** for your preferred AI provider (OpenAI, Anthropic, Google, etc.)
3. **Start coding with AI** — open the ForgeFox sidebar and describe what you want to build

That's it. No cloud account needed. No sign-ups. Just you, your IDE, and your AI.

---

## ✨ Features

- **Autonomous Coding Agent** — ForgeFox can create files, edit code, execute terminal commands, and manage your project structure
- **Multi-Provider Support** — Connect to 20+ AI providers including OpenAI, Anthropic Claude, Google Gemini, AWS Bedrock, Azure OpenAI, Ollama, LM Studio, and more
- **Local Model Support** — Run completely offline with Ollama, LM Studio, or any OpenAI-compatible local server
- **Custom Modes** — Create specialized AI personas for different tasks (debugging, architecture, documentation, etc.)
- **MCP Tool Support** — Extend ForgeFox's capabilities with Model Context Protocol servers
- **Context Management** — Mention files, folders, URLs, or terminal output to give the AI precise context
- **Checkpoints** — Automatically save snapshots of your work so you can revert AI changes
- **Multi-Language** — Interface available in 18 languages
- **Git Worktree Support** — Work on multiple branches simultaneously
- **Custom Instructions** — Set global and per-project rules for how the AI should behave

---

## 📦 Installation

### Option 1: Install from VSIX (Recommended)

1. **Download** the latest `.vsix` file from the [Releases](https://github.com/seek4coherence/ForgeFox/releases) page
2. Open VS Code
3. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
4. Type **"Extensions: Install from VSIX..."**
5. Select the downloaded `.vsix` file
6. Reload VS Code

### Option 2: Build from Source

#### Prerequisites
- [Node.js](https://nodejs.org/) v22+ (check `.nvmrc` for exact version)
- [pnpm](https://pnpm.io/) v9+
- [Git](https://git-scm.com/)

#### Steps

```bash
# Clone the repository
git clone https://github.com/seek4coherence/ForgeFox.git
cd ForgeFox

# Install dependencies
pnpm install

# Build the extension
cd src
node esbuild.mjs

# Package as VSIX
npx @vscode/vsce package --no-dependencies
```

This produces a `forgefox-X.Y.Z.vsix` file you can install:

```bash
code --install-extension forgefox-*.vsix
```

#### Development Mode

To run the extension in development mode:

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. The extension will be available in the new VS Code window

---

## 🔌 Supported Providers

ForgeFox works with any LLM provider you choose. No cloud lock-in.

| Provider | Type | Setup |
|----------|------|-------|
| **OpenAI** | Cloud API | Paste your API key |
| **Anthropic (Claude)** | Cloud API | Paste your API key |
| **Google Gemini** | Cloud API | Paste your API key |
| **AWS Bedrock** | Cloud API | Configure AWS credentials |
| **Azure OpenAI** | Cloud API | Configure Azure endpoint |
| **OpenRouter** | Cloud API | Paste your API key |
| **DeepSeek** | Cloud API | Paste your API key |
| **Mistral** | Cloud API | Paste your API key |
| **Groq** | Cloud API | Paste your API key |
| **Together** | Cloud API | Paste your API key |
| **Fireworks** | Cloud API | Paste your API key |
| **xAI (Grok)** | Cloud API | Paste your API key |
| **SambaNova** | Cloud API | Paste your API key |
| **Ollama** | Local | Install Ollama and pull a model |
| **LM Studio** | Local | Install LM Studio and load a model |
| **VS Code Language Models** | Built-in | Use GitHub Copilot models through VS Code |
| **Any OpenAI-compatible** | Custom | Point to any compatible API endpoint |

---

## 🤝 Contributing

**We welcome and encourage contributions from everyone!** ForgeFox is a community project and we need your help to make it the best AI coding assistant possible.

### How to Contribute

1. **Fork** this repository
2. **Create a branch** for your feature or fix: `git checkout -b feature/my-awesome-feature`
3. **Make your changes** and commit them with clear messages
4. **Test your changes** — run `cd src && npx vitest run` and `cd webview-ui && npx vitest run`
5. **Submit a Pull Request** with a clear description of what you've done

### Ways to Contribute

- 🐛 **Bug Reports** — Found a bug? [Open an issue](https://github.com/seek4coherence/ForgeFox/issues/new)
- 💡 **Feature Requests** — Have an idea? Let us know!
- 🔧 **Code Contributions** — Fix bugs, add features, improve performance
- 📝 **Documentation** — Help improve guides, add examples, fix typos
- 🌐 **Translations** — Help translate ForgeFox into more languages
- 🧪 **Testing** — Try new features and report your experience

### Development Setup

```bash
git clone https://github.com/seek4coherence/ForgeFox.git
cd ForgeFox
pnpm install
```

Then open in VS Code and press `F5` to launch the development host.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed development guidelines.

---

## 📋 Project Structure

```
ForgeFox/
├── src/                    # Main VS Code extension source
│   ├── api/                # LLM provider integrations
│   ├── core/               # Core agent logic
│   ├── activate/           # Extension activation & commands
│   ├── services/           # MCP, checkpoints, etc.
│   ├── i18n/               # Backend internationalization
│   └── package.json        # Extension manifest
├── webview-ui/             # React-based UI (sidebar, panels)
│   ├── src/components/     # UI components
│   ├── src/i18n/           # Frontend internationalization
│   └── src/utils/          # Utilities
├── packages/               # Shared workspace packages
│   ├── types/              # Shared TypeScript types
│   ├── core/               # Core utilities
│   ├── cloud/              # Cloud services (disabled)
│   └── telemetry/          # Telemetry (disabled)
└── apps/                   # Additional apps (CLI, nightly, etc.)
```

---

## 🗺️ Roadmap

ForgeFox will continue to evolve with periodic updates focused on:

- 🔧 Stability improvements and bug fixes
- 🚀 Better local model support and performance
- 🧩 Enhanced MCP tool ecosystem
- 📱 Improved UI/UX for the sidebar experience
- 🔒 Privacy-first features
- 🌐 Community-requested features and integrations

We're building this together. [Join the conversation](https://github.com/seek4coherence/ForgeFox/discussions) and help shape the roadmap.

---

## 📜 License

ForgeFox is licensed under the [Apache License 2.0](LICENSE).

### Attribution

ForgeFox is a fork of [Roo Code](https://github.com/RooCodeInc/Roo-Code), which was originally developed by Roo Code, Inc. under the Apache 2.0 license. Roo Code was itself derived from [Cline](https://github.com/cline/cline) by Saoud Rizwan.

We gratefully acknowledge the work of the original Roo Code team and the Cline project. See the [NOTICE](NOTICE) file for full attribution details.

**ForgeFox is an independent project** and is not affiliated with, endorsed by, or sponsored by Roo Code, Inc. or any of its affiliates.

---

## 💬 Contact

- **GitHub Issues**: [github.com/seek4coherence/ForgeFox/issues](https://github.com/seek4coherence/ForgeFox/issues)
- **Email**: support@BusinessEdgeAnalytics.com
- **Website**: [www.BusinessEdgeAnalytics.com](https://www.BusinessEdgeAnalytics.com)

---

<p align="center">
  <em>Forged by the community. Powered by your choice of AI.</em>
</p>
