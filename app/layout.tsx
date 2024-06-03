import { GeistSans } from "geist/font/sans";
import "./globals.css";
import TabItem from "@/components/TabItem";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Stan Runge",
  description: "Stan Runge's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <div className="flex justify-center gap-5 my-5 font-bold">
          <TabItem targetPath="/" text="Home" />
          <TabItem targetPath="/projects" text="Projects" />
          <TabItem targetPath="/publications" text="Publications" />
          <TabItem targetPath="/certificates" text="Certificates" />
        </div>

        {children}
      </body>
    </html>
  );
}
