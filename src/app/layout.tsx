import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SectionProvider } from "@/contexts/SectionContext";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Portfolio", template: "%s | Portfolio" },
  description: "Portfolio — design and build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen h-[100dvh] overflow-hidden font-sans flex flex-col bg-background-primary">
        <div id="scroll-container" className="h-full overflow-y-auto overflow-x-hidden">
          <SectionProvider>
            <Header />
            <main className="bg-background-primary">{children}</main>
          </SectionProvider>
        </div>
      </body>
    </html>
  );
}
