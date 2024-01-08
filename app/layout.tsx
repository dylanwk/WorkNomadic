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

      <body data-theme='corporate' className={inter.className}>
        <Header />

        <div className="p-4 bg-base-200"></div>

          {children}
        <div className="p-4 bg-base-200"></div>
      </body>
    </html>
  );
}
