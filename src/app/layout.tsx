import "./globals.css";

export const metadata = {
  title: "Desenvolvedor Back-End",
  description: "Portfólio profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-[#0F1115] text-gray-200 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}