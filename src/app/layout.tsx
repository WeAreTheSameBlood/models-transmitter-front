import "../globals.css";
import "@styles/header/header.css";
import { Header } from "@components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pageBg min-h-screen">
        <Header isLoggedIn={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
