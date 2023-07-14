import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfund",
  description: "Funding for your business",
};

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default GlobalLayout;
