"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { Next13ProgressBar } from "next13-progressbar";

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Next13ProgressBar
        height="3px"
        color="#005EA7"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
