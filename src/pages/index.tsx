import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, []);

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/assets/img/heart-icon.ico" />
        <title>Meu Casamento Eternizado</title>
      </Head>
    </div>
  );
}