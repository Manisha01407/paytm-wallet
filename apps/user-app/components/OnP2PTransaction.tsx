import { P2PCard } from "@repo/ui/P2Pcard";
export const OnP2PTransaction = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <P2PCard title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </P2PCard>
    );
  }
  return (
    <P2PCard title="Recent Transactions">
      <div>
        {transactions.map((t) => (
          <div className="p-2 flex justify-between ">
            <div>
              <div className="text-sm ">Received INR</div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </P2PCard>
  );
};
