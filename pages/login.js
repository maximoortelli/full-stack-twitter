/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {getProviders, signIn, useSession} from "next-auth/react";

export default function LoginPage({providers}) {
  const {data, status} = useSession();
  console.log({data, status});
  return (
    <div className='flex items-center justify-center h-screen'>
         {Object.values(providers).map(provider => (
            <div key={provider.name}> 
                <button 
                     onClick={async () => {await signIn(provider.id)}}
                     className='bg-twitterWhite pl-3 m-3 pr-5 gap-3 px-5 py-2 text-black 
                     rounded-full flex items-center justify-between'>

                    <img src='/google.png' alt='' className='h-8' />
                     Sign in with {provider.name}
                </button>
            </div>
         ))}
    </div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: {providers},
    }
}
