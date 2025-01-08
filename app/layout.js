import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "BlackRise - Creative Web Design & Development Services",
  description:
    "BlackRise is a web and software development agency specializing in creative, high-performance websites and custom software solutions, helping businesses grow with innovative digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
       
        {children}
       
      </body>
    </html>
  );
}
