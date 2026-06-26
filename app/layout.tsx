import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "The PRIZM Design Studio | Luxury Interior Designers in Mumbai",
  description:
    "The PRIZM Design Studio creates refined Mumbai interiors, architecture, and turnkey apartments, villas, offices, and hospitality spaces. Established in 2012.",
  keywords: [
    "luxury interior designers Mumbai",
    "premium interior design Mumbai",
    "interior designers Bombay",
    "turnkey interior designers Mumbai",
    "luxury apartment interiors Mumbai",
    "villa interior design Alibaug",
    "hospitality interiors Mumbai"
  ],
  openGraph: {
    title: "The PRIZM Design Studio | ESTD 2012",
    description:
      "A premium Mumbai design studio for apartments, villas, offices, hospitality spaces, and turnkey interior commissions.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1000,
        alt: "Mumbai luxury interior designed living space"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The PRIZM Design Studio | Luxury Interior Designers in Mumbai",
    description: "Refined Mumbai interiors, architecture, and turnkey design. ESTD 2012."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
