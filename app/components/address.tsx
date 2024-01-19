import { FC } from "react";
import { useAccount, useEnsName } from "wagmi";

interface AddressProps {}

export const Address: FC<AddressProps> = ({}) => {
  const { address } = useAccount();
  const { data, error, status } = useEnsName({ address });
  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  return (
    <div className="auto-cols-max text-3xl text-blue-50 first-line:text-blue-100">
      ENS name: {data}
    </div>
  );
};
