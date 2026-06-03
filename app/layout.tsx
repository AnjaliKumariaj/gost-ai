import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "A collaborative system design workspace powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-base font-sans text-copy-primary">
        <ClerkProvider
          appearance={{
            theme: dark,
            options: {
              socialButtonsPlacement: "top",
              socialButtonsVariant: "blockButton",
            },
            variables: {
              colorBackground: "var(--bg-surface)",
              colorInput: "var(--bg-elevated)",
              colorInputForeground: "var(--text-primary)",
              colorPrimary: "var(--accent-primary)",
              colorPrimaryForeground: "var(--bg-base)",
              colorForeground: "var(--text-primary)",
              colorMuted: "var(--bg-subtle)",
              colorMutedForeground: "var(--text-secondary)",
              colorNeutral: "var(--text-muted)",
              colorDanger: "var(--state-error)",
              colorSuccess: "var(--state-success)",
              colorWarning: "var(--state-warning)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
            },
            elements: {
              rootBox: "font-sans",
              cardBox: "border border-surface-border bg-bg-surface shadow-none",
              card: "font-sans",
              footer: "bg-bg-surface",
              formButtonPrimary:
                "font-sans bg-brand text-bg-base hover:bg-brand/90 focus:ring-brand",
              formFieldInput: "font-sans bg-bg-elevated text-copy-primary",
              formFieldLabel: "font-sans text-copy-primary",
              headerTitle: "font-sans text-copy-primary",
              headerSubtitle: "font-sans text-copy-secondary",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
