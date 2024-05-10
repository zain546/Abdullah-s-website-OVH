import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BorcelleSolarServices",
  description: "BorcelleSolarServices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://abdurkhan11.github.io/solarenergy.github.io/Pics/logo.png" type="image/x-icon" />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
