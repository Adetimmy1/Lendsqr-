"use client";
import { Dashboard } from "@/components/Dashboard";
import SelectedUser from "@/components/SelectedUser";

export default function DashboardHome({searchParams}) {

  return (
    <div className="mt-6 font-work mb-20">
      {!searchParams.user ? <Dashboard /> : <SelectedUser />}
    </div>
  );
}
