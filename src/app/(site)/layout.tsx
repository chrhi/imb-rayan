import NavBar from "@/components/layout/nav-bar";
import Footer from "./footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" min-h-screen h-fit">
      <NavBar />
      <div className=" mt-[80px] h-fit flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
