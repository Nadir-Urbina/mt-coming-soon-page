import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ministry Teams",
  description: "Privacy Policy for Ministry Teams mobile application",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 sm:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          PRIVACY POLICY
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Ministry Teams
        </h2>
        <p className="text-gray-600 mb-8">Last Updated: December 5, 2024</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            HizWayz, LLC ("we," "us," or "our") operates the Ministry Teams
            mobile application (the "App"). This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our App.
          </p>

          <p className="text-gray-700 mb-8">
            Please read this Privacy Policy carefully. By using the App, you
            agree to the collection and use of information in accordance with
            this policy.
          </p>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1. INFORMATION WE COLLECT
            </h3>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Personal Information You Provide:
            </h4>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Account Information:</strong> Name, email address, and
                password when you create an account
              </li>
              <li>
                <strong>Profile Information:</strong> Profile photo (optional),
                bio, skills, and availability preferences
              </li>
              <li>
                <strong>Organization Data:</strong> Organization name,
                description, and settings you create or join
              </li>
              <li>
                <strong>Volunteer Information:</strong> Team assignments, event
                participation, and scheduling preferences
              </li>
              <li>
                <strong>Communications:</strong> Messages and notifications
                within the App
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Automatically Collected Information:
            </h4>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Device Information:</strong> Device type, operating
                system, and unique device identifiers
              </li>
              <li>
                <strong>Push Notification Tokens:</strong> To send you
                notifications about events and assignments
              </li>
              <li>
                <strong>Usage Data:</strong> How you interact with the App,
                features used, and error logs
              </li>
              <li>
                <strong>Subscription Information:</strong> Purchase history and
                subscription status (processed by Apple/Google)
              </li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              2. HOW WE USE YOUR INFORMATION
            </h3>
            <p className="text-gray-700 mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and maintain the App's functionality</li>
              <li>Create and manage your account</li>
              <li>Enable volunteer scheduling and team management</li>
              <li>
                Send push notifications about events, reminders, and assignments
              </li>
              <li>Process subscriptions and payments (via App Store)</li>
              <li>Communicate with you about updates and support</li>
              <li>Improve and optimize the App</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              3. INFORMATION SHARING AND DISCLOSURE
            </h3>
            <p className="text-gray-700 mb-4">
              We may share your information in the following circumstances:
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Within Your Organization:
            </h4>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                Administrators can view volunteer profiles, availability, and
                contact information
              </li>
              <li>
                Team members may see other volunteers assigned to the same
                events (based on organization settings)
              </li>
              <li>
                Your name and assignment status are visible to event
                coordinators
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              With Service Providers:
            </h4>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Firebase (Google):</strong> Authentication, database,
                file storage, and analytics
              </li>
              <li>
                <strong>RevenueCat:</strong> Subscription management and payment
                processing
              </li>
              <li>
                <strong>Apple App Store / Google Play:</strong> Payment
                processing
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              We do NOT:
            </h4>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Sell your personal information to third parties</li>
              <li>Share your data with advertisers</li>
              <li>
                Use your data for purposes unrelated to the App's functionality
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Legal Requirements:
            </h4>
            <p className="text-gray-700">
              We may disclose information if required by law or in response to
              valid legal requests.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              4. DATA STORAGE AND SECURITY
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                Your data is stored securely using Google Firebase
                infrastructure
              </li>
              <li>
                We use industry-standard encryption for data in transit and at
                rest
              </li>
              <li>
                Access to personal data is restricted to authorized personnel
                only
              </li>
              <li>
                We implement security measures to protect against unauthorized
                access
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              While we strive to protect your information, no method of
              transmission over the Internet is 100% secure. We cannot guarantee
              absolute security.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              5. DATA RETENTION
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Account data is retained while your account is active</li>
              <li>
                You may request deletion of your account and associated data at
                any time
              </li>
              <li>Organization data is retained by the organization administrator</li>
              <li>
                We may retain certain information as required by law or for
                legitimate business purposes
              </li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              6. YOUR RIGHTS AND CHOICES
            </h3>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Delete your account and personal data
                via Settings &gt; Delete Account
              </li>
              <li>
                <strong>Opt-out:</strong> Disable push notifications in your
                device settings
              </li>
              <li>
                <strong>Data Portability:</strong> Request your data in a
                portable format
              </li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:support@ministryteams.life"
                className="text-purple-600 hover:text-purple-700 underline"
              >
                support@ministryteams.life
              </a>
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              7. PUSH NOTIFICATIONS
            </h3>
            <p className="text-gray-700 mb-3">
              We send push notifications for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                Event reminders (1 week, 1 day, and 1 hour before events)
              </li>
              <li>Assignment requests and confirmations</li>
              <li>Team invitations</li>
              <li>Administrative updates</li>
            </ul>
            <p className="text-gray-700">
              You can disable push notifications at any time through your device
              settings or within the App under Settings &gt; Notifications.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              8. CHILDREN'S PRIVACY
            </h3>
            <p className="text-gray-700">
              The App is not intended for children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If we discover that a child under 13 has provided us with personal
              information, we will delete it immediately.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              9. THIRD-PARTY SERVICES
            </h3>
            <p className="text-gray-700 mb-3">
              The App uses the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Firebase (Google):</strong>{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  https://firebase.google.com/support/privacy
                </a>
              </li>
              <li>
                <strong>RevenueCat:</strong>{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  https://www.revenuecat.com/privacy
                </a>
              </li>
              <li>
                <strong>Apple:</strong>{" "}
                <a
                  href="https://www.apple.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  https://www.apple.com/legal/privacy
                </a>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              These services have their own privacy policies governing the use
              of your information.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              10. INTERNATIONAL DATA TRANSFERS
            </h3>
            <p className="text-gray-700">
              Your information may be transferred to and processed in the United
              States and other countries where our service providers operate. By
              using the App, you consent to such transfers.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              11. CALIFORNIA PRIVACY RIGHTS (CCPA)
            </h3>
            <p className="text-gray-700 mb-3">
              California residents have additional rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Right to know what personal information is collected</li>
              <li>
                Right to know if personal information is sold or disclosed
              </li>
              <li>
                Right to opt-out of the sale of personal information (we do not
                sell data)
              </li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              12. CHANGES TO THIS PRIVACY POLICY
            </h3>
            <p className="text-gray-700 mb-3">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Posting the new Privacy Policy in the App</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending a notification for material changes</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              13. CONTACT US
            </h3>
            <p className="text-gray-700 mb-3">
              If you have questions about this Privacy Policy, please contact
              us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-semibold">HizWayz, LLC</p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:support@ministryteams.life"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  support@ministryteams.life
                </a>
              </p>
              <p className="text-gray-700">
                Website:{" "}
                <a
                  href="https://ministryteams.life/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  https://ministryteams.life/privacy
                </a>
              </p>
            </div>
          </section>

          <hr className="my-8 border-gray-300" />

          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
            <p className="text-gray-800 font-medium">
              By using Ministry Teams, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
