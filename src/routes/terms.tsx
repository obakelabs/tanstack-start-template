import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Terms of Service</h1>

      <div className="space-y-6">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700">
            By accessing and using this website, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not
            agree to abide by the above, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">2. Use License</h2>
          <p className="text-gray-700">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on our website for personal,
            non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">3. User Account</h2>
          <p className="text-gray-700">
            If you create an account on the website, you are responsible for
            maintaining the security of your account and you are fully
            responsible for all activities that occur under the account.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">4. Disclaimer</h2>
          <p className="text-gray-700">
            The materials on our website are provided on an 'as is' basis. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">5. Limitations</h2>
          <p className="text-gray-700">
            In no event shall we or our suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on our website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            6. Revisions and Errata
          </h2>
          <p className="text-gray-700">
            The materials appearing on our website could include technical,
            typographical, or photographic errors. We do not warrant that any of
            the materials on our website are accurate, complete, or current.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            7. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Service, please
            contact us at terms@example.com.
          </p>
        </section>
      </div>
    </div>
  );
}
