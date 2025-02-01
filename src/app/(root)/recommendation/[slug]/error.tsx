"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/inputs/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error('error - ', error);
  }, [error]);

  return (
    <main className="flex h-[90vh] w-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!!</h2>
      <div className="mt-4 flex gap-4">
        <Button onClick={reset} variant="solid">Try Again</Button>
        <Button onClick={() => router.back()} variant="outline">Go Back</Button>
      </div>
    </main>
  );
}
