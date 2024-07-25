export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F1F3FF] min-h-screen h-fit">
      <div className="w-[calc(100%-80px)] ml-[80px] h-fit flex flex-col">
        {children}
      </div>
    </div>
  );
}
