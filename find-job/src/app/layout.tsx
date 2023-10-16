import './globals.scss';
import { Noto_Sans_JP } from "@next/font/google";
import React from 'react';
import Header from "./components/layers/Header";
import Footer from "./components/layers/Footer";
import GoogleAnalytics from './components/GoogleAnalytics'

const notojp = Noto_Sans_JP({
  weight: '500', // あなたが必要とするウェイトを指定します
  subsets: ['latin'], // 必要なサブセットを指定します
  display: 'swap', // フォントの表示方法を指定します
});

export const metadata = {
  title: 'バイトの森',
  description: '佐賀大生向けのアルバイト掲示板サイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${notojp.className}`+" tracking-widest"}>
        <div className="flex flex-col min-h-screen justify-between">
          <Header></Header>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
