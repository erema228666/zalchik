import { auth } from "@/server/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Page from "./page";
import Link from "next/link";
import { LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default async function Layout({children}: {children: React.ReactNode}) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session) {
        redirect("/")
    }

    return (
    <main className="flex flex-row w-screen h-screen notranslate">
      <div className="hidden md:block">
        <AdminSideBar />
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/30 border-b border-black text-white flex ">
        <MobileAdminMenu />
      </div>

      <div className="flex-1 md:my-8 mt-16 md:pr-8 px-4 overflow-y-auto">
        {children}
      </div>
    </main>
  );
}

const links = [
  { label: "For the commited", href: "/admin/forthecommited" },
  { label: "Guided by experts", href: "/admin/guidedbyexperts" },
  { label: "Dynamic open gym", href: "/admin/dynamicopengym" },
  { label: "Open hours", href: "/admin/openhours" },
  { label: "Social links", href: "/admin/sociallinks" },
  { label: "Contact", href: "/admin/contact" },
  { label: "Tap into your primal power", href: "/admin/tapinto" },
  { label: "Dynamic open gym", href: "/admin/dynamicopengymabout" },
];

function AdminSideBar() {
  return (
    <div className="bg-black/40 text-white p-10 h-screen w-64 border-r border-black/70 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-white hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="flex flex-row items-center gap-2 hover:underline"
      >
        <LogOut size={18} /> Выход
      </Link>
    </div>
  );
}

function MobileAdminMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-neutral-100 border-black/70 w-64 p-4 text-black"
      >
        <SheetHeader>
          <SheetTitle className="text-black">Навигация</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-10">
          <Link
            href="/"
            className="flex flex-row items-center gap-2 hover:underline"
          >
            <LogOut size={18} /> Выход
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}