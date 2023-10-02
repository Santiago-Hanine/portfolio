import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className='flex flex-col items-center max-w-[90%] lg:max-w-[70%] lg:pl-28 justify-center mx-auto'>
        {children}
    </div>
  )
}
