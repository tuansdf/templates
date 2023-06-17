import { PropsWithChildren } from "react";
import "~/styles/index.scss";

export const metadata = {
  title: "Next Template",
  description: "Next Template",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
