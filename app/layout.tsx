import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Nomad Page",
  description: "Destination Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <title>The Nomad Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head> 

      <body className={inter.className}>
        <Header />

        <div className="p-4"></div>

        <div className="flex flex-col items-center">
          <div className="max-w-screen-md min-h-[100vh] w-full flex flex-col">
            {children}
          </div>
        </div>
        <div className="p-4"></div>
      </body>
    </html>
  );
}
