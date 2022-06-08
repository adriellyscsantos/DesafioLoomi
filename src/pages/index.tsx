import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  const { pathname } = router

  useEffect(() => {
    if (pathname === '/') {
      router.push('/login')
    }
  }, [router, pathname])

  return (
    <Head>
      <title>Dashboard</title>
    </Head>
  )
}

export default Home
