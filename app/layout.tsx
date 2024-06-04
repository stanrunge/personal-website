import { GeistSans } from "geist/font/sans";
import "./globals.css";
import TabItem from "@/components/TabItem";
import { MdiGithub } from "../components/MdiGithub";

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
            backgroundImage: `url(${metadata.metadataBase}/moon.jpg)`,
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
            <a href="https://github.com/stanrunge" className="text-blue-500">
              <MdiGithub />
            </a>
            <a
              href="https://linkedin.com/in/stanrunge"
              className="text-blue-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
