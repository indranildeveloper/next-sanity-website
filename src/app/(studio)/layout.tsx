import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My awesome site",
  description: "Generated by Next and Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
