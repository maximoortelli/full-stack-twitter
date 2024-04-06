import React from 'react';
import {getProviders, signIn} from "next-auth/react";

export default function LoginPage({providers}) {
  return (
    <div className='flex items-center justify-center h-screen'>
         {Object.values(providers).map(provider => (
            <div key={provider.name}> 
                <button 
                     onClick={async () => {await signIn(provider.id)}}
                     className='bg-twitterWhite pl-3 pr-5  px-5 py-2 text-black 
                     rounded-full flex items-center'>

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
