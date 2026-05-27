"use client";

import { PanelLeftClose, PanelLeftOpen, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-surface-border bg-bg-surface/95 px-4 backdrop-blur md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          onClick={onToggleSidebar}
        >
          <ToggleIcon className="h-5 w-5" />
        </Button>
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-surface-border bg-accent-dim text-brand">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-copy-primary">
              Ghost AI
            </p>
            <p className="truncate text-xs text-copy-muted">
              System design workspace
            </p>
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-2 text-xs text-copy-muted sm:flex">
        Editor
      </div>
    </header>
  );
}
