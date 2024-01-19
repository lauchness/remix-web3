import type { MetaFunction } from "@remix-run/node";

import { Address } from "~/components/address";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  <Address />;
}
