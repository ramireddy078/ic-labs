import localFont from "next/font/local";
import {Space_Grotesk} from "next/font/google"
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import { courseData } from "@/data/courseData";

const font = Space_Grotesk({
  weight: ["300","400","500","600","700"],
  subsets: ["latin"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home Page | ICLabs",
  description: "ic labs created by venkat using next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponsiveNav />
        {children}
        <Footer courses={courseData} />
      </body>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent text-black`}
//       >
//         <ResponsiveNav />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
