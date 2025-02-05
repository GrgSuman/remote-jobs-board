"use client";

import { useState } from "react";
import {
  Briefcase,
  Building,
  BarChart2,
  Bell,
  Menu,
  X,
  User,
} from "lucide-react";
import Link from "next/link";
import type React from "react"; // Added import for React
import EmployerNav from "@/components/employer/EmployerNav";
import TopNav from "@/components/employer/TopNav";

export default function EmployerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <EmployerNav children={children} />
    </div>
  );
}
