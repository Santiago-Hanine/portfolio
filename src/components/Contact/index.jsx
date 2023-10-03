import { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qxby7vm', 'template_ph7rewu', form.current, 'GCKojGqkdba6UAjIM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div id='contact' className="pb-20 lg:py-24 flex flex-col items-center max-w-[90%] lg:max-w-[70%] lg:pl-28 justify-center mx-auto">
        <h2 className="uppercase text-center font-kanit tracking-wider text-white text-6xl relative after:absolute after:bottom-[-40px] after:w-16 after:h-[8px] after:translate-x-[-50%] after:left-[50%] after:bg-strong-blue after:rounded-lg mb-20">Contact</h2>
        <p className="text-center text-white text-lg font-kanit max-w-[70%] mx-auto mb-12">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
    
        <form ref={form} onSubmit={sendEmail} className="md:w-3/4 w-full flex flex-col bg-skill-card p-8 rounded-lg gap-4">
            <div>
                <label className="text-white text-lg tracking-wider font-kanit" htmlFor="name">Name</label>
                <input required className="bg-skill-card text-white outline-none outline-offset-0 p-6 rounded-lg font-kanit text-lg w-full mt-2" type="text" name="name" placeholder="Enter Your Name" />
            </div>
            <div>
                <label className="text-white text-lg tracking-wider font-kanit" htmlFor="email">Email</label>
                <input required className="bg-skill-card text-white outline-none outline-offset-0 p-6 rounded-lg font-kanit text-lg w-full mt-2" type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div>
                <label className="text-white text-lg tracking-wider font-kanit" htmlFor="message">Message</label>
                <textarea required className="bg-skill-card text-white outline-none outline-offset-0 p-6 rounded-lg font-kanit text-lg w-full mt-2" name="message" rows="8" placeholder="Enter Your Message"></textarea>
            </div>

            <button type="submit" className="bg-strong-blue text-white w-full md:w-1/3 px-8 py-4 rounded-lg">Submit</button>
        </form>
    </div>
  )
}
