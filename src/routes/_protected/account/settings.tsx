import { createFileRoute } from "@tanstack/react-router";

import DeleteAccountCard from "./-components/delete-account-card";

export const Route = createFileRoute("/_protected/account/settings")({
  component: AccountSettingsPage,
});

function AccountSettingsPage() {
  return (
    <>
      <section className="page-container">
        <DeleteAccountCard />
      </section>
    </>
  );
}
