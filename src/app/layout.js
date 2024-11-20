import { useContext } from "react";
import localFont from "next/font/local";
import "@/styles/reset.scss";
import { LoaderProvider } from "@/providers/LoaderProvider/LoaderProvider";
import { Root } from "./root";

import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: "We're Creating For Emotions | Project #2",
  description: "365 Design Perseverance | 365 Ideas",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${roboto.variable}`}>
        <LoaderProvider>
          <Root>
            {children}
          </Root>
        </LoaderProvider>
      </body>
    </html>
  );
}
