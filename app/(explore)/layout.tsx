import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Metadata } from "next";
import { archivo } from "../ui/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Atlas",
    default: "Atlas - The world at large",
  },
  description: "Atlas a platform to help you see the world at large",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${archivo}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
