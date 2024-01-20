import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GAN Conferencing WebSite",
  description:
    "A premiere provider of audio conferencing solutions, focusing specifically on the operator assisted conferencing market.  We provide an outstanding level of service to our clients in the area of managed service calls, high touch client calls, operator led calls and much more.  We are a full service conferencing provider, offering a wide range of services to meet your conferencing needs.  We are a privately held company, with a focus on providing the best service in the industry.  We are not a reseller of conferencing services, but rather a full service provider.  We have been in business since 2001, and have a proven track record of providing the best service in the industry. We have the best human operators in the industry, and we use the latest in technology to ensure that your call goes off without a hitch.  We are a full service conferencing provider, offering a wide range of services to meet your conferencing needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
