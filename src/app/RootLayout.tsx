"use client";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { TestProvider } from "./context/TestContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdults = pathname === "/forAdults";
  const isTestPage = pathname.startsWith("/testPage");

  return (
    <html lang="en">
      <body>
        <TestProvider>
          {!isTestPage && <Header />}
          <main className="content-container">{children}</main>
          {!isAdults && !isTestPage && <Footer background={true} />}
        </TestProvider>
      </body>
    </html>
  );
}
