import { createFileRoute, redirect } from "@tanstack/react-router";
import { getSession } from "~/utils/session";

import DeleteAccountCard from "./-components/delete-account-card";

export const Route = createFileRoute("/_protected/account/settings")({
  component: AccountSettingsPage,
});

function AccountSettingsPage() {
  return (
    <>
      <section className="page-container py-12">
        <DeleteAccountCard />
      </section>
    </>
  );
}
