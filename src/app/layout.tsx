import '~/styles/globals.css';
import type { PropsWithChildren } from 'react';

import { Providers } from '~/components/providers';

export { metadata } from '~/configs/site';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
