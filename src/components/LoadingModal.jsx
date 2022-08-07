import React from 'react'

export default function LoadingModal() {
  return (
    <div className='fixed top-0 z-10 w-full h-screen flex justify-center items-center'>
        <div className='animate-spin w-32 h-20 border-2 border-primary rounded-[100%]'></div>
    </div>
  )
}
