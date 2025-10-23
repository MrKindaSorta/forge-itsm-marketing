# Forge ITSM - Marketing Site

Marketing and signup website for Forge ITSM. This site will be deployed to **forge-itsm.com** while the main application remains at **forge-itsm.pages.dev**.

## Tech Stack

- **React** + **TypeScript**
- **Vite** - Fast build tool
- **Tailwind CSS v4** - Utility-first CSS
- **Lucide React** - Icon library
- **React Router** - Navigation (to be added)
- **Stripe** - Payment processing (to be integrated)

## Project Structure

```
forge-marketing/
├── src/
│   ├── components/
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Page components
│   │   └── Landing.tsx  # Main landing page
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Root component
│   └── index.css        # Tailwind imports
├── public/              # Static assets
└── dist/                # Build output
```

## Development

### Prerequisites
- Node.js 20.19+ or 22.12+ (currently have 18.20.8 - consider upgrading)
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173`

## Features

### Currently Implemented
✅ Landing page with hero section
✅ Features grid showcasing platform benefits
✅ Pricing teaser with 3 tiers
✅ Call-to-action sections
✅ Footer with navigation
✅ Responsive design (mobile & desktop)
✅ Modern UI with Tailwind CSS

### Planned Features
🔜 Full pricing page with competitor comparison
🔜 Multi-step signup flow
🔜 Stripe payment integration
🔜 Customer billing portal
🔜 About page
🔜 Features detail page
🔜 Terms & Privacy pages
🔜 Contact/Support page

## Deployment

### Cloudflare Pages Setup

1. **Create new Cloudflare Pages project:**
   - Go to Cloudflare Dashboard → Pages
   - Connect your GitHub repository
   - Project name: `forge-itsm-marketing` (or similar)

2. **Build configuration:**
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

3. **Environment variables:**
   (Add these in Cloudflare Pages settings when ready)
   ```
   VITE_STRIPE_PUBLIC_KEY=pk_test_...
   VITE_API_URL=https://itsm-backend.joshua-r-klimek.workers.dev
   ```

4. **Custom domain:**
   - Add custom domain: `forge-itsm.com`
   - Cloudflare will handle DNS and SSL automatically

### Deployment Flow

```bash
# Commit changes
git add .
git commit -m "Update marketing site"
git push origin main

# Cloudflare Pages auto-deploys on push
# View deployment status in Cloudflare dashboard
```

## Integration with Main App

The marketing site and main ITSM application are **completely separate**:

| Aspect | Marketing Site | Main ITSM App |
|--------|---------------|---------------|
| **Domain** | forge-itsm.com | forge-itsm.pages.dev |
| **Codebase** | `/var/www/forge-marketing` | `/var/www/itsm-frontend` |
| **Purpose** | Public marketing, signup | Application for customers |
| **Repo** | (To be created) | `git@github.com:MrKindaSorta/forge-itsm.git` |

### Linking Between Sites

- Marketing site **"Get Started"** button → Signup flow → Provisions instance → Redirects to `forge-itsm.pages.dev/auth/login`
- ITSM app can link back to marketing site for billing/account management

## Next Steps

### Phase 2: Pricing Page
- [ ] Create `/pricing` route with React Router
- [ ] Add full competitor comparison table
- [ ] Include savings calculator
- [ ] Feature comparison matrix

### Phase 3: Signup Flow & Stripe
- [ ] Create multi-step signup form
- [ ] Integrate Stripe Checkout
- [ ] Build provisioning backend Worker
- [ ] Set up Stripe webhooks
- [ ] Test full signup → provision → login flow

### Phase 4: Customer Portal
- [ ] Billing management page
- [ ] Stripe Customer Portal integration
- [ ] Subscription upgrade/downgrade
- [ ] Account settings

## Environment Setup

### Required Accounts
- **Cloudflare** - Pages hosting, DNS, Workers
- **Stripe** - Payment processing
- **SendGrid/Mailgun** - Transactional emails (optional for Phase 1)

### Stripe Setup Checklist
- [ ] Create Stripe account
- [ ] Create products for 3 pricing tiers
- [ ] Generate API keys (test & production)
- [ ] Set up webhook endpoint
- [ ] Configure customer portal

## Troubleshooting

### Build Errors

**Node version warning:**
```
You are using Node.js 18.20.8. Vite requires Node.js version 20.19+ or 22.12+.
```
While it shows a warning, the build still works. Consider upgrading Node.js for better performance.

**Tailwind CSS errors:**
We're using Tailwind CSS v4 with the new `@import "tailwindcss"` syntax. If you see CSS errors, ensure `@tailwindcss/postcss` is installed.

### Development Tips

- Use `npm run dev` for hot-reload during development
- Changes to Tailwind classes rebuild instantly
- Components are in `/src/components/ui/` for reusability
- Keep marketing-specific code separate from UI library

## Support

For questions or issues:
- Check Cloudflare Pages documentation
- Review Stripe integration docs
- Contact: [your-email]

---

**Built with ❤️ by a solo developer**
