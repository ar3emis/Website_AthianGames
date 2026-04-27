import { Metadata } from "next";
import { SupportTicketPageClient } from "@/components/support/SupportTicketPageClient";

interface SupportTicketPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    email?: string;
    token?: string;
    created?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Track Support Ticket | Athian Games",
  description: "View the latest status of your Athian Games support ticket and continue the conversation.",
};

export default async function SupportTicketPage({ params, searchParams }: SupportTicketPageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <SupportTicketPageClient
      ticketId={id}
      initialEmail={resolvedSearchParams.email}
      initialToken={resolvedSearchParams.token}
      justCreated={resolvedSearchParams.created === "1"}
    />
  );
}

