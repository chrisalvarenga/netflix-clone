import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import useCurrentUser from '@/hooks/useCurrentUser';

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <p>Netflix clone </p>
      <p className='text-white'>Logged in as : { user?.name}</p>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>Logout</button>
    </>
  )
}
