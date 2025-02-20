import React from "react";

interface SingnInLayoutProps {
  children: React.ReactNode;
}

const SingnInLayout = ({ children }: SingnInLayoutProps) => {
  return <div>{children}</div>;
};

export default SingnInLayout;
