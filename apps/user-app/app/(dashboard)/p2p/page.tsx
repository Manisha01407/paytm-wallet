import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { OnP2PTransaction } from "../../../components/OnP2PTransaction";

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
  }));
}

export default async function () {
  const transactions = await getOnRampTransactions();
  return (
    <div className="w-full">
      <div className="flex items-baseline gap-x-10">
        <div className="w-full justify-items-center">
          <SendCard />
        </div>
        <div className="w-full m-10 justify-items-center ">
          <OnP2PTransaction transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
