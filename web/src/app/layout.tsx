import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";
import { AuthProvider } from "./_context/AuthContext";
import InfoButton from "./_components/infoButton/infoButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "페이지데이",
  description: "페이지데이와 함께 평생가는 독서 습관을 만들어 보세요.",
  keywords: ["독서", "독서 습관", "책 읽기", "독서 팁", "독서 방법", "독서 모임", "페이지데이"],
  robots: "index,follow",
  openGraph: {
    title: "페이지데이",
    description: "페이지데이와 함께 평생가는 독서 습관을 만들어 보세요",
    url: "https://pageday.today",
    type: "website",
    images: [
      {
        url: "https://pageday.today/og/image.png",
        width: 800,
        height: 600,
        alt: "페이지데이 이미지",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div className={"mainContainer"}>
            <div className="mainSection">
              <Header />
              <main className={"mainContentSection"}>
                {children}
              </main>
              <InfoButton/>
            </div>
            <Footer/>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
