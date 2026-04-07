import Header from './components/header';
import Podval from './components/podval';

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex justify-center w-full">
        <div className="w-full max-w-7xl">{children}</div>
      </div>
      <Podval />
    </>
  );
}