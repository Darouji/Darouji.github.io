import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://darouji.github.io"),
  title: "Fabián García Ríos | Desarrollo frontend y full stack",
  description: "Portafolio de Fabián García Ríos: desarrollo web, análisis funcional, Clarity Software y un caso de estudio ERP/CRM.",
  authors: [{ name: "Fabián García Ríos", url: "https://github.com/Darouji" }],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Fabián García Ríos | Desarrollo frontend y full stack",
    description: "Entender el problema. Construir claridad.",
    url: "https://darouji.github.io",
    siteName: "FG. · Portafolio",
    type: "website",
    locale: "es_CL",
    images: [{ url: "/og-cyberpunk.png", width: 1536, height: 1024, alt: "FG. — Portafolio de Fabián García Ríos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabián García Ríos | Desarrollo frontend y full stack",
    description: "Entender el problema. Construir claridad.",
    images: ["/og-cyberpunk.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}