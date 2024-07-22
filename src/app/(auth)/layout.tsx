export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100 min-h-screen h-fit">
      <div className="w-[calc(100%-80px)] ml-[80px] h-fit flex flex-col">
        {children}
      </div>
    </div>
  );
}
