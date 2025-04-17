'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/dashboard'); // Redirect to login page if not authenticated
      }, 2000);
  
      // Cleanup
      return () => clearTimeout(timer);
  }, []);
  
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size={80} />
    </div>
  );
}
