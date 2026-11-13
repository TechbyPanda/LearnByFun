import Layout from "../shared/Layout/Layout";

export const metadata = { title: "Next + React Learning" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}