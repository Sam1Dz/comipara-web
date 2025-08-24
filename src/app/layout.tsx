import type { PropsWithChildren } from 'react';
import '~/styles/globals.css';

import { Providers } from '~/components/providers';
import { DMSerifDisplay, InterFont, ManropeFont } from '~/configs/fonts';

export { metadata } from '~/configs/site';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="id">
      <body
        aria-label="Comic Paradise Web Application"
        className={`${DMSerifDisplay.variable} ${ManropeFont.variable} ${InterFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
