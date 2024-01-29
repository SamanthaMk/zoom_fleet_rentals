
import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom Fleet Rentals",
  description: "Your Perfect Car Rental Service That Caters For Your Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
