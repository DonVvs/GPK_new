export default function PrivacyPolicy() {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-forest-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-forest max-w-none text-forest-700">
                    <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        At Gargi PaperKraft, we are committed to looking after your data. We respect your privacy and want to be transparent about the data we collect and how we use it.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and company details when you fill out contact forms or request quotes on our website.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>Process your orders and provide the products you request.</li>
                        <li>Communicate with you about your inquiries and quotes.</li>
                        <li>Improve our website and customer service.</li>
                        <li>Send you updates about our products (only if you opt-in).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">3. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sales@gargipaperkraft.com" className="text-kraft-600 hover:underline">sales@gargipaperkraft.com</a> or <a href="mailto:export@gargipaperkraft.com" className="text-kraft-600 hover:underline">export@gargipaperkraft.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
