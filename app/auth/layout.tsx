
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto lg:px-0 px-4">
      {children}
    </div>
  );
}
