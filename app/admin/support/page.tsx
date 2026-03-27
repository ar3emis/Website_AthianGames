import { Metadata } from "next";
import AdminSupportClient from "./AdminSupportClient";

export const metadata: Metadata = {
  title: "Support Tickets — Admin",
};

export default function AdminSupportPage() {
  return <AdminSupportClient />;
}

