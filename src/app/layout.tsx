/* eslint-disable @next/next/no-page-custom-font */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="author" content="Yayasan Bestari Nurul Quran" />
        <meta name="description" content="Yayasan Bestari Nurul Quran" />
        {/* Font Imports */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/images/logo-yayasan-bestari.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo-yayasan-bestari.png" />
        <link
          rel="mask-icon"
          href="/images/logo-yayasan-bestari.png"
          color="#5bbad5"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@400;700&family=Merriweather&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Document Title */}
        <title>Yayasan Bestari Nurul Quran</title>
      </head>
      <body className="stretched">{children}</body>
      <script async src="/js/functions.js"></script>
    </html>
  );
}
