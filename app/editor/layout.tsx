import { EditorLayoutClient } from "@/components/editor/editor-layout-client";

export default function EditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <EditorLayoutClient>{children}</EditorLayoutClient>;
}
