import Head from 'next/head';

export default function page() {
    return (
        <>
          <Head>
            <title>Terms of Service - Budget Traveling</title>
            <meta name="description" content="Terms of service for Budget Traveling website." />
            <meta name="robots" content="noindex, follow" />
          </Head>
    
          <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-center mb-6">Terms of Service</h1>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
              <p className="mt-2 text-gray-700">
                Welcome to Budget Traveling. These terms of service govern your use of our website, services, and content. By using our site, you agree to comply with these terms.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">2. Use of the Website</h2>
              <p className="mt-2 text-gray-700">
                You agree to use this website only for lawful purposes and in accordance with these Terms. You may not use the site in a way that could damage, disable, or impair its functionality.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">3. Content Ownership</h2>
              <p className="mt-2 text-gray-700">
                All content on Budget Traveling, including articles, images, and videos, are owned by Budget Traveling or licensed to us. You may not use, copy, or distribute this content without permission.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">4. Advertising and Affiliate Links</h2>
              <p className="mt-2 text-gray-700">
                Our site may contain advertisements and affiliate links. We are not responsible for the content or accuracy of third-party sites.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
              <p className="mt-2 text-gray-700">
                Budget Traveling is not liable for any damages or losses resulting from the use or inability to use the site. We do not guarantee that the site will be free of errors or interruptions.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">6. Changes to Terms</h2>
              <p className="mt-2 text-gray-700">
                We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated terms.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">7. Governing Law</h2>
              <p className="mt-2 text-gray-700">
                These terms are governed by the laws of your jurisdiction. Any disputes will be resolved in the appropriate courts within that jurisdiction.
              </p>
            </section>
    
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">8. Contact Us</h2>
              <p className="mt-2 text-gray-700">
                If you have any questions about these terms, please contact us at <a href="mailto:budgettraveling8@gmail.com" className="text-blue-600 hover:underline">budgettraveling8@gmail.com</a>.
              </p>
            </section>
    
            <footer className="mt-12 text-center text-gray-600">
              <p>&copy; 2024 Budget Traveling. All rights reserved.</p>
            </footer>
          </main>
        </>
      );
}
