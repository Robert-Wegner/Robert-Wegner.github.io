import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Robert Wegner — Mathematics',
  description: 'Research and publications of Robert Wegner, PhD, at Karlsruhe Institute of Technology.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
