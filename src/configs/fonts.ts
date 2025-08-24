import { DM_Serif_Display, Inter, Manrope } from 'next/font/google';

export const DMSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-display',
});

export const ManropeFont = Manrope({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-manrope',
});

export const InterFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});
