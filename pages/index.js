import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Index() {
    const router = useRouter();
    
    useEffect(() => {
        router.replace('/evelyn-e-samuel/convidado');
    })

    return (
    <div>
        <Head>
            <link rel="shortcut icon" href="/assets/img/heart-icon.ico" />
            <title>Meu Casamento</title>
        </Head>
    </div>
    );
}