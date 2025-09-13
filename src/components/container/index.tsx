import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 xl:px-0 pt-4 xl:pt-6">
      {children}
    </div>
  );
};

export default Container;
