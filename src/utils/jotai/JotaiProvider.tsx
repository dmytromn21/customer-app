import { Provider } from "jotai";
import { ReactNode } from "react";

export default function JotaiProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
