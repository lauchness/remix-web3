import { FC } from "react";
import { useReadErc20BalanceOf } from "~/abi/generated";

export const Dummy: FC = () => {
  const { data } = useReadErc20BalanceOf({
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    args: ["0xA0Cf798816D4b9b9866b5330EEa46a18382f251e"],
  });

  return (
    <>{typeof data === "bigint" ? BigInt(data).toLocaleString("en-US") : ""}</>
  );
};
