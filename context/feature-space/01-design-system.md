Read `AGENTS.md` before starting.

we're adding the design system and UI primitive components.
 
Install and configure `shadcn/ui`.

Add these shadcn components:
-Button
-Card
-Dialog
-Input
-Tabs
-Textarea
-ScrollArea

Don not modify the generated `components/ui/*` files after installation.

Also Install `licide-react`.

Create `lib/utils.ts` with a reusable `cn()` helper for merging Tailwind classes.

Ensure all compnents match the existing dark them in ` globals.css`.

### Check when done
- All components import without errors
- `cn()` works properly
- No default light styling appears