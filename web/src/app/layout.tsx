import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./_context/AuthContext";
import MainLeftSection from "./_components/mainLeftSection/mainLeftSection";

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
        height: 400,
        alt: "페이지데이 이미지",
      },
    ],
  },
};


const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin', 'latin-ext'],
});

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
      <body className={notoSansKR.className}>
        <AuthProvider>
          <div className={"mainContainer"}>
            <div className={"mainLeftSection"}>
              <MainLeftSection />
            </div>
            <div className="{mainRightSection}">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
