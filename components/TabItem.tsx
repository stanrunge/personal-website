"use client";

import { usePathname } from "next/navigation";

export default async function TabItem({ targetPath, text }: { targetPath: string, text: string}) {
  const currentPath = usePathname();

  return (
    <a
      href={targetPath}
      className={currentPath === targetPath ? "underline" : ""}
    >
      {text}
    </a>
  );
}
