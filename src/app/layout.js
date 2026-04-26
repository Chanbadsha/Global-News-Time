import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProviders from "@/provider/ThemeProvider";
import AppProvider from "@/provider/AppProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Global News Times",
  description: "Stay updated with the latest global news",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable}  h-full antialiased`}
    >
      <body className="min-h-full font-inter ">
        <AppProvider>
          <ThemeProviders>{children}</ThemeProviders>
        </AppProvider>
      </body>
    </html>
  );
}
