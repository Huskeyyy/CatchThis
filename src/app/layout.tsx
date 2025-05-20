import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { GameProvider } from "./context/GameContext";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "CatchThis()",
  description:
    "Test your debugging skills by identifying error causes from stack traces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-gray-900 text-white min-h-screen`}
      >
        <GameProvider>
          <div className="container mx-auto px-4 py-8">
            <Link href="/">
              <header className="mb-8 cursor-pointer">
                <h1 className="text-2xl md:text-3xl font-bold text-center">
                  <span className="text-blue-400">Catch</span>
                  <span className="text-white">This()</span>
                </h1>
              </header>
            </Link>

            <main>{children}</main>
            <footer className="mt-12 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CatchThis() - Created with
              Boredom by Huskeyyy.
            </footer>
          </div>
        </GameProvider>
      </body>
    </html>
  );
}
