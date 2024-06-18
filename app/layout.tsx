import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientOnly from "./Components/ClientOnly";



export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
