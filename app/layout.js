import './globals.css';

export const metadata = {
  title: 'Muthuraman S | SDET | QA Automation Engineer',
  description:
    'Portfolio of Muthuraman S, SDET and QA Automation Engineer with experience in manual testing, Selenium, Playwright, REST API testing, TestNG, Maven, Git, GitHub, and Jenkins.',
  openGraph: {
    title: 'Muthuraman S | SDET | QA Automation Engineer',
    description:
      'Portfolio of Muthuraman S, SDET and QA Automation Engineer with experience in manual testing, Selenium, Playwright, REST API testing, TestNG, Maven, Git, GitHub, and Jenkins.',
    images: [
      {
        url: '/placeholder-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Muthuraman S - QA Automation Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muthuraman S | SDET | QA Automation Engineer',
    description:
      'Portfolio of Muthuraman S, SDET and QA Automation Engineer',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}