import { useRouter } from "next/navigation";

import { useEffect } from "react";

export function useStorageNavigation(path: string, event: string) {
  const router = useRouter();
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === event) {
        router.push(path);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [router]);
}
