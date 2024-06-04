import { GeistSans } from "geist/font/sans";
import "./globals.css";
import TabItem from "@/components/TabItem";
import { Icon } from "../components/Icon";

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
      <body
        style={{
          position: "relative",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        <div
          style={{
            backgroundImage: `url(moon.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
            position: "fixed", // Changed from 'absolute' to 'fixed'
            top: 0,
            left: -46,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div className="flex justify-between my-5 font-bold mx-5">
          <div>
            <h1 className="text-2xl">
              <a href="/">Stan Runge</a>
            </h1>
          </div>
          <div className="flex justify-center gap-5">
            <TabItem targetPath="/projects" text="Projects" />
            <TabItem targetPath="/publications" text="Publications" />
            <TabItem targetPath="/certificates" text="Certificates" />
            <TabItem targetPath="/cokno" text="CoKno" />
          </div>
          <div className="flex justify-center gap-5">
            <a href="https://github.com/stanrunge">
              <Icon d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </a>
            <a href="https://linkedin.com/in/stanrunge">
              <Icon d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </a>
            <a href="https://x.com/stanrunge">
              <Icon d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
            </a>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
