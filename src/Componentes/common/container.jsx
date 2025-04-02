import { cn } from "../../lib/units";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-screen-xl px-2.5 mx-auto", className)}>
      {children}
    </div>
  );
};
