import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
});

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
