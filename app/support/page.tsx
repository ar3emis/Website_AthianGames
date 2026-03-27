import { Metadata } from "next";
import SupportPortalClient from "./SupportPortalClient";

export const metadata: Metadata = {
  title: "Support Center | Athian Games",
  description: "Submit a support ticket or track your existing issues with Athian Games products.",
};

export default function SupportPage() {
  return <SupportPortalClient />;
}

