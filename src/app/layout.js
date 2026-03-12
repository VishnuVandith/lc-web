import './globals.css';

export const metadata = {
  title: 'La Caféine – Redefining the Coffee & Tea Experience',
  description: 'La Caféine is a premium healthy tea and coffee brand redefining café culture. Explore refined café franchise opportunities crafted for modern investors and discerning entrepreneurs.',
  keywords: 'La Cafeine, premium cafe franchise, healthy tea brand India, premium coffee franchise, cafe franchise opportunity, luxury cafe India, healthy beverages cafe',
  authors: [{ name: 'La Caféine' }],
  openGraph: {
    title: 'La Caféine – A Premium Café Franchise Opportunity',
    description: 'Invest in taste, wellness, and elegance. Discover La Caféine\'s premium healthy tea and coffee franchise, designed for refined growth and modern lifestyles.',
    images: ['https://www.thelacafeine.com/images/og-image.jpg'],
    type: 'website',
    url: 'https://www.thelacafeine.com',
  },
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/plugins.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/templete.css" />
        <link rel="stylesheet" href="/css/skin-1.min.css" />
        <link rel="stylesheet" href="/plugins/fontawesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/plugins/line-awesome/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/plugins/themify/themify-icons.css" />
      </head>
      <body id="bg">
        {children}
      </body>
    </html>
  );
}
