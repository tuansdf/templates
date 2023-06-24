import { PropsWithChildren } from "react";
import { Providers } from "~/app/providers";
import "~/env";
import "~/styles/index.scss";

export const metadata = {
  title: "Next App",
  description: "Next App",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
