"use client";

import { FolderKanban, Plus, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof FolderKanban;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-border-subtle bg-bg-elevated/50 px-6 text-center">
      <Icon className="mb-4 h-8 w-8 text-copy-faint" aria-hidden="true" />
      <p className="text-sm font-medium text-copy-primary">{title}</p>
      <p className="mt-2 text-sm leading-6 text-copy-muted">{description}</p>
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed bottom-3 left-3 top-20 z-30 flex w-[min(22rem,calc(100vw-1.5rem))] flex-col rounded-2xl border border-surface-border bg-bg-surface/95 shadow-2xl shadow-bg-base/40 backdrop-blur transition-transform duration-300 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]",
      )}
      aria-label="Projects"
      aria-hidden={!isOpen}
    >
      <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-copy-primary">Projects</h2>
          <p className="mt-1 text-xs text-copy-muted">
            Organize active architecture workspaces.
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Close project sidebar"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-hidden p-4">
        <Button type="button" className="w-full justify-center">
          <Plus className="h-4 w-4" aria-hidden="true" />
          New Project
        </Button>

        <Tabs defaultValue="mine" className="min-h-0 flex-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mine">My Projects</TabsTrigger>
            <TabsTrigger value="shared">Shared</TabsTrigger>
          </TabsList>
          <TabsContent value="mine" className="mt-4">
            <EmptyState
              icon={FolderKanban}
              title="No projects yet"
              description="Create a project to start mapping a system architecture."
            />
          </TabsContent>
          <TabsContent value="shared" className="mt-4">
            <EmptyState
              icon={Users}
              title="Nothing shared"
              description="Collaborative projects will appear here when teammates invite you."
            />
          </TabsContent>
        </Tabs>
      </div>
    </aside>
  );
}
