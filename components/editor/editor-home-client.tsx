import { Bot, LayoutPanelLeft, Network } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EditorHomeClient() {
  return (
    <section className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border border-surface-border bg-bg-subtle text-brand">
            <Network className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-copy-primary">
              Editor Workspace
            </h1>
            <p className="mt-1 text-sm text-copy-muted">
              Start a project from the sidebar to build a collaborative system map.
            </p>
          </div>
        </div>

        <div className="grid min-h-80 gap-4 rounded-2xl border border-dashed border-border-subtle bg-bg-surface/70 p-4 md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-xl bg-bg-elevated/70 p-5">
            <LayoutPanelLeft
              className="mb-3 h-5 w-5 text-brand"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-copy-primary">
              Project navigation
            </p>
            <p className="mt-2 text-sm leading-6 text-copy-muted">
              The left overlay keeps owned and shared workspaces close without covering the editor permanently.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-xl bg-bg-elevated/70 p-5">
            <Bot
              className="mb-3 h-5 w-5 text-accent-ai-text"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-copy-primary">
              AI-ready surface
            </p>
            <p className="mt-2 text-sm leading-6 text-copy-muted">
              This shell leaves room for canvas collaboration and assistant workflows in later feature units.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button type="button">
            <Network className="h-4 w-4" aria-hidden="true" />
            Create Workspace
          </Button>
        </div>
      </div>
    </section>
  );
}
