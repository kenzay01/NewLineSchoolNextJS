import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "NewLineSchool",
  description: "Сайт на Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="content-container">{children}</main>
        <Footer background={true} />
      </body>
    </html>
  );
}
