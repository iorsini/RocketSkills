import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="description" content="PathPort - passaportes de competências e jornadas internacionais de carreira" />
        <link rel="icon" href="/pathport-icon.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
