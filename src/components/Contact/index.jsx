import React, { useState } from 'react';
import copyIcon from '../../../public/copy-icon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [email, setEmail] = useState('santihanine@gmail.com');
  const [isCopied, setIsCopied] = useState(false);

  const notify = () => toast.info('Email copied to clipboard', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });;

  const handleCopyClick = () => {
    notify();
    navigator.clipboard.writeText(email);
    setIsCopied(true);

    // Reset the copied state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div id='contact' className='flex flex-col justify-center items-center space-y-14 bg-skill-card py-14'>
        <h2 className='text-center md:text-6xl text-5xl tracking-wider text-white font-kanit uppercase'>Contact</h2>
        
        <div className='flex justify-center gap-x-12 w-full'>
            <a id="contact" className='border-2 rounded-xl p-4 text-lg md:text-xl border-white text-white transition duration-500 hover:border-strong-blue hover:text-strong-blue' href={`mailto:${email}`}>{email}</a>

        <button onClick={handleCopyClick} disabled={isCopied}>
            <div className='w-10'>
            <img src={copyIcon} alt='Copy Icon'/>
            </div>
        <ToastContainer />
        </button>
        </div>
    </div>
  );
};

