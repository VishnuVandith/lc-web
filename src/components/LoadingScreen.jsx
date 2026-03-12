'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loaded) return null;

    return <div id="loading-area"></div>;
}
