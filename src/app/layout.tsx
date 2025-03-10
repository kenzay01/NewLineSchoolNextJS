import type { Metadata } from "next";
import RootLayout from "./RootLayout"; 
export const metadata: Metadata = {
  title: "NewLineSchool",
  description: "Сайт на Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
