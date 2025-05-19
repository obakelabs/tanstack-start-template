import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. Information We Collect
          </h2>
          <p className="text-gray-700">
            We collect information that you provide directly to us, including
            when you create an account, use our services, or communicate with
            us. This may include your name, email address, and other contact
            information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to protect our users and
            the public.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            3. Information Sharing
          </h2>
          <p className="text-gray-700">
            We do not share your personal information with third parties except
            as described in this privacy policy. We may share information with
            service providers who assist us in operating our services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">4. Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">5. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal
            information. You may also have the right to restrict or object to
            certain processing of your information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@example.com.
          </p>
        </section>
      </div>
    </div>
  );
}
