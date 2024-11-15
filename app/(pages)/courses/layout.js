import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "VLSI Courses | IcLabs.in",
  description: "IcLabs created by Venkat using Next.js",
};

export default function CoursesLayout({ children }) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-200 ${font.className}`}>
      {/* <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> */}
        {children}
      {/* </div> */}
    </div>
  );
}
