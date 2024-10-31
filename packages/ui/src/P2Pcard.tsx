import React from "react";

export function P2PCard({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="w-86 pt-2 border bg-white rounded-xl bg-[#ededed]">
      <h1 className="text-xl border-b p-4 ">{title}</h1>
      <p className="p-2">{children}</p>
    </div>
  );
}
