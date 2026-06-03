## Clerk GitHub Sign-In

- Request: add GitHub as a sign-in/sign-up option.
- Code status: Clerk social buttons are configured to render as top block buttons.
- Required Clerk setting: enable GitHub under the Clerk app's social connections. The app is currently using Clerk Keyless mode, so providers must be configured from the Clerk dashboard/configuration flow rather than hardcoded in the Next.js app.
- Security note: do not commit the generated `.clerk/` directory because it contains keyless instance secrets.
