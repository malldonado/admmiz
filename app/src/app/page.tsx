"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrigido para useRouter
import Loading from '@/pages/loading';
import Dashboard from '@/pages/dashboard/page';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [router]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default Home;
