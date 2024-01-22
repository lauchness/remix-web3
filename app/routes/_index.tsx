import type { MetaFunction } from "@remix-run/node";

import { Address } from "~/components/address";
import { Dummy } from "~/components/test-balance";

export const meta: MetaFunction = () => {
  return [
    { title: "Sentiment" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Hi I&apos;m an app</h1>
      <Address />
      <Dummy />
    </>
  );
}
