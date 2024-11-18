import { useContext } from "react";
import localFont from "next/font/local";
import "@/styles/reset.scss";
import { LoaderProvider } from "@/providers/LoaderProvider/LoaderProvider";
import { Root } from "./root";

const inter = localFont({
  src: [
    {
      path: './fonts/Inter_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Inter_ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Inter_Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-inter'
});

export const metadata = {
  title: "We'a Creating For Emotions",
  description: "We'a Creating For Emotions | Project #",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${inter.variable}`}>
        <LoaderProvider>
          <Root>
            {children}
          </Root>
        </LoaderProvider>
      </body>
    </html>
  );
}
