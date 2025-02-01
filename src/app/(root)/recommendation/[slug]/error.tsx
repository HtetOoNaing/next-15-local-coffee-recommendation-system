"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
          onClick={reset}
        >
          Try Again
        </button>
        <button
          className="rounded-md bg-gray-100 px-4 py-2 text-sm text-blue-500 transition-colors hover:bg-blue-100 border border-blue-500"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
