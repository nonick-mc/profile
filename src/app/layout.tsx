import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
});

const title = 'NoNICK';
const description = 'インディーゲームとTypeScriptが好きな学生。';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://nonick-mc.com',
    siteName: 'NoNICK',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://github.com/nonick-mc.png',
        width: 600,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['https://github.com/nonick-mc.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className={`${notoSansJP.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
