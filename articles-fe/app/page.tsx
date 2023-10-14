"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import localStorageService from './services/localStorageService';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorageService.get('token');

    if (token) {
      return router.replace('/articles');
    }

    return router.replace('/auth/login');
  }, [router])

  return null;
}
