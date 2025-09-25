"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';
import LoginPage from '@/app/pages/auth/login/page';

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
        <LoginPage />
      )}
    </>
  );
};

export default Home;
