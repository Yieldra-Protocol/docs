# Yieldra Protocol Documentation

> Documentation site for Yieldra - A full-stack DeFi solution bringing together DEX, lending, launchpad, and more.

This documentation is built with [Docus](https://docus.dev) - a beautiful documentation theme powered by Nuxt.

## ✨ Features

- 🎨 **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design  
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Nuxt 4
- 🔧 **TypeScript** - Full TypeScript support

## 🚀 Quick Start

Use **Node.js 20.19+** (or a current LTS that satisfies `package.json` `engines`) so Nuxt and the toolchain install cleanly.

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Your documentation site will be running at `http://localhost:3000`

## 📁 Project Structure

```
docs/
├── content/
│   ├── index.md                    # Homepage
│   ├── 1.getting-started/          # Welcome, overview, capital efficiency
│   ├── 2.products/                 # Product docs (AMM, lending, alpha, USDY, Den, staking-as-a-service, …)
│   ├── 3.yra-token/                # Tokenomics, staking, buybacks, incentives, airdrops
│   └── 4.protocol-and-governance/  # Treasury, governance framework
├── app/                            # App configuration & components
│   ├── app.config.ts               # Docus configuration
│   └── components/
├── public/                         # Static assets
└── package.json
```

## 📝 Documentation Sections

- **Getting started** — Welcome, protocol overview, capital efficiency
- **Products** — AMM, lending, Alpha, USDY, Yieldra Den, staking-as-a-service, and related guides
- **YRA token** — Tokenomics, staking, buybacks, community incentives, airdrops
- **Protocol & governance** — Treasury and governance framework

## ⚡ Built with

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt UI](https://ui.nuxt.com) - UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Docus Layer](https://www.npmjs.com/package/docus) - Documentation theme

## 📖 Documentation

For detailed documentation on customizing your Docus project, visit the [Docus Documentation](https://docus.dev)

### 🤖 AI Assistant Skill

Get started quickly with Docus by adding specialized knowledge to your AI assistant:

```bash
npx skills add nuxt-content/docus
```

## 🚀 Deployment

Deployed to Vercel with automatic deployments from the main branch.

Build for production:

```bash
pnpm run build
```

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) 