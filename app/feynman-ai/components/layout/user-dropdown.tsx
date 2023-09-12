"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { LayoutDashboard, LogOut } from "lucide-react";
import Image from "next/image";
import { Session } from "next-auth";

export default function UserDropdown({ session }: { session: Session }) {
  const { email, image } = session?.user || {};


  if (!email) return null;

  return (
    <div className="relative inline-block text-left">

    </div>
  );
}
