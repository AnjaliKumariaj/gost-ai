import { Sparkles } from "lucide-react";

interface AuthShellProps {
  children: React.ReactNode;
}

const featureItems = [
  "Create and organize architecture projects",
  "Collaborate on shared system design canvases",
  "Generate technical specs from your final graph",
];

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-bg-base font-sans text-copy-primary lg:grid-cols-2">
      <section className="hidden border-r border-brand/30 bg-accent-dim px-12 py-12 lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-brand/30 bg-bg-surface text-brand">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-copy-primary">Ghost AI</p>
            <p className="text-xs text-copy-secondary">System design workspace</p>
          </div>
        </div>

        <div className="max-w-md space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-brand">
              Collaborative architecture, signed in.
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-copy-primary">
              Map systems, refine with your team, and turn the canvas into specs.
            </h1>
          </div>
          <ul className="space-y-3 text-sm text-copy-secondary">
            {featureItems.map((item) => (
              <li key={item} className="border-l border-brand/30 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-copy-secondary">
          Secure access is handled by Clerk.
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-bg-base px-4 py-8 sm:px-6">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </main>
  );
}
