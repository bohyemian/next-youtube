import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center items-center absolute inset-0">{children}</div>;
};

export default layout;