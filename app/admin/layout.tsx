import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <div className="bg-black min-h-screen w-full">{children}</div>;
}
