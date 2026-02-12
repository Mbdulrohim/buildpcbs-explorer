# BuildPCBs Explorer

An AI-powered explorer for accessing and interacting with PCB designs, built with Next.js 16 and Tailwind CSS v4.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **AI**: Google Gemini API
- **Directives**: `robots.txt` & `ai.txt` for AI bot control

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is configured for **Cloudflare Pages** using `@cloudflare/next-on-pages`.

### Build Command

```bash
pnpm pages:build
```

### Output Directory

```
.vercel/output/static
```

### Cloudflare Configuration

Ensure the **Compatibility Flags** in your Cloudflare Pages project settings include:

- `nodejs_compat`

## 📂 Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/services`: API services (Gemini, etc.).
- `public`: Static assets, `robots.txt`, and `ai.txt`.
