# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

### Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production (also type checks)
- `pnpm start` - Start production server

### Code Quality
- `pnpm check` - Format and lint with Biome (auto-fixes issues)

### Database
- `pnpm db:up` - Start PostgreSQL with Docker Compose
- `pnpm db:down` - Stop PostgreSQL containers
- `pnpm db:reset` - Reset database (removes all data)

### Browser Automation
- Playwright MCP server available for browser automation tasks
- Can navigate to URLs, take screenshots, interact with web elements
- Useful for testing UI components and web scraping tasks

### Environment Setup
- Copy `.env` to `.env.local` and configure Google OAuth and database credentials
- Run `mise install` to install development tools (Node.js, pnpm)
- For production, use strong unique database credentials

## Architecture Overview

### Authentication Flow
- NextAuth.js v5 beta with Google provider configured in `auth.ts`
- Middleware exports auth function to protect routes
- Server actions in components use "use server" directive
- Session state checked server-side in page components

### Component Architecture
- shadcn/ui components in `components/ui/` with variant-based styling
- Custom components in `components/` root follow same patterns
- All components use `@/` path aliases for imports
- Button component demonstrates the standard pattern with `cn()` utility for className merging

### Styling System
- TailwindCSS v4 with shadcn/ui design system
- Custom fonts: Lato (Latin) and Noto Sans JP (Japanese) defined in layout
- `cn()` utility in `lib/utils.ts` combines clsx and tailwind-merge for className handling

### Database Setup
- PostgreSQL 16 running in Docker with docker-compose.yml
- Database connection via DATABASE_URL environment variable
- Development database: demo_app with user demo_user
- Credentials configured via environment variables for security

### File Organization
- App Router in `app/` directory with layout.tsx and page.tsx pattern
- API routes in `app/api/` following Next.js conventions
- Utilities in `lib/` directory
- UI components follow shadcn/ui structure and naming

## Code Conventions

### TypeScript
- Strict mode enabled with ES2017 target
- Import aliases: `@/*` maps to project root
- Interface/type definitions inline with components

### Styling
- Double quotes for strings (Biome configuration)
- Space indentation (Biome formatter)
- Organize imports automatically enabled

### Component Patterns
- Export default functions with PascalCase names
- Props interfaces defined inline or with component
- Server components by default, explicit "use client" when needed
- File names in kebab-case (e.g., `sign-in.tsx`)