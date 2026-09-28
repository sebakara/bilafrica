import { BookOpen, FileText, LayoutDashboard, LogOut, Mail, Users, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", end: true, icon: LayoutDashboard },
  { href: "/admin/content", label: "Site content", end: false, icon: FileText },
  { href: "/admin/insights", label: "Insights", end: false, icon: BookOpen },
  { href: "/admin/contacts", label: "Messages", end: false, icon: Mail },
  { href: "/admin/subscribers", label: "Subscribers", end: false, icon: Users },
];

export function AdminSidebar({
  open,
  onNavigate,
  onLogout,
}: {
  open: boolean;
  onNavigate: () => void;
  onLogout: () => void;
}) {
  return (
    <aside
      id="admin-sidebar"
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-ink text-white transition-transform duration-200",
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-5">
        <div className="flex items-center gap-3">
          <Logo variant="mark" theme="light" className="h-9 w-9" linked={false} />
          <div>
            <p className="text-sm font-semibold tracking-wide">BIL</p>
            <p className="text-xs text-haze">Admin</p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-md p-1 text-foam hover:text-white md:hidden"
          onClick={onNavigate}
          aria-label="Close menu"
        >
          <X className="size-5" />
        </button>
      </div>

      <nav aria-label="Admin" className="flex-1 px-3 py-4">
        <p className="px-3 pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-haze">Workspace</p>
        <ul className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.end}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-semibold",
                      isActive ? "bg-white/10 text-white" : "text-foam hover:bg-white/5 hover:text-white",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={cn("size-4", isActive ? "text-aqua" : "text-haze")} aria-hidden="true" />
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-1 border-t border-white/10 p-3">
        <a href="/" className="flex items-center rounded-md px-3 py-2.5 text-sm font-semibold text-foam hover:bg-white/5 hover:text-white">
          View site
        </a>
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-semibold text-foam hover:bg-white/5 hover:text-white"
        >
          <LogOut className="size-4 text-haze" aria-hidden="true" />
          Log out
        </button>
      </div>
    </aside>
  );
}
