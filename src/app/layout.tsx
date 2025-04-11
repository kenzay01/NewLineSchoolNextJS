import type { Metadata } from "next";
import RootLayout from "./RootLayout"; 

export const metadata: Metadata = {
  title: "New Study Line - Школа англійської мови",
  description: "Офіційний підготовчий центр Cambridge Assessment English. Навчання англійської мови для дітей, підлітків та дорослих. Онлайн та офлайн формати. Підготовка до міжнародних іспитів IELTS, Cambridge English.",
  keywords: "англійська мова, курси англійської, вивчення англійської, школа англійської, Cambridge English, IELTS, онлайн навчання, офлайн навчання, підготовка до іспитів, англійська для дітей, англійська для підлітків, англійська для дорослих",
  
  // Іконки
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  
  // Open Graph теги
  openGraph: {
    title: 'New Study Line - Школа англійської мови',
    description: 'Офіційний підготовчий центр Cambridge Assessment English. Навчання англійської мови для дітей, підлітків та дорослих.',
    url: 'https://newstudyline.com',
    siteName: 'New Study Line',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'New Study Line - Школа англійської мови',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  
  // Twitter теги
  twitter: {
    card: 'summary_large_image',
    title: 'New Study Line - Школа англійської мови',
    description: 'Офіційний підготовчий центр Cambridge Assessment English. Навчання англійської мови для дітей, підлітків та дорослих.',
    images: ['/twitter-image.jpg'],
  },
  
  // Додаткові метатеги
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Версія для друку
  alternates: {
    canonical: 'https://newstudyline.com',
  },
  
  // Мова сайту
  metadataBase: new URL('https://newstudyline.com'),

  // Додаткові SEO-елементи
  authors: [{ name: 'New Study Line' }],
  creator: 'New Study Line',
  publisher: 'New Study Line',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'ваш-google-verification-code'
  },
  category: 'education',
  classification: 'language school',
  applicationName: 'New Study Line',
  manifest: '/manifest.json',
  themeColor: '#BFA0BE',
  colorScheme: 'light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    title: 'New Study Line',
    statusBarStyle: 'default',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
