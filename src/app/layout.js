import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css';
import CustomCursor from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"]
});

export const metadata = {
  title: "Good Doctor — Clínica Dental Premium | Dr. Kevin Sancho",
  description: "Good Doctor es la clínica dental premium del Dr. Kevin Sancho, especialista en carillas dentales (veneers). Transformamos sonrisas con tecnología de punta y trato personalizado.",
  keywords: "carillas dentales, veneers, clínica dental, Dr. Kevin Sancho, Good Doctor, blanqueamiento dental, implantes dentales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-ivory text-obsidian antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
