/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import '../index.css';
import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

export function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bmlq4vq', 'template_v4bzinq', form.current, 'N4ObmLcyeKEP-ybQl')
            .then((result) => {
                console.log(result.text);
                alert('¡Enviado correctamente!.');
                location.reload()
            }, (error) => {
                console.log(error.text);
                alert('¡Error al enviar el correo!.')
                location.reload()
            });
    }; 


    return (
        <section id="contacto" class="w-full mb-10 cel:mt-28 cel:h-full lg:h-full xl:h-full xl:mt-20 h-screen flex-col bg-black flex items-center justify-center text-white lg:mt-20">
            <div class="w-10/12 cel:h-full h-screen lg:h-full xl:h-full xl:flex-col flex items-center justify-center cel:flex-col lg:flex-col">
                <form ref={form} onSubmit={sendEmail} class="cel:w-full w-6/12 h-full ">
                    <div class="cel:w-full cel:items-start cel:text-center w-full flex items-start h-full justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400 cel:w-full cel:text-center">Contacto</h2>
                        <div class="mt-10 w-full flex items-start justify-start flex-col">
                            <label class="text-2xl tracking-widest font-thin text-teal-400 cel:w-full cel:text-center">Nombre y apellido</label>
                            <input type='text' name="user_name" required class="w-full p-3 h-12 rounded-lg mt-2 text-black text-xl font-thin tracking-widest" placeholder='Completa tu nombre y apellido aqui.' />
                        </div>
                        <div class="mt-10 w-full flex items-start justify-start flex-col">
                            <label class="text-2xl tracking-widest font-thin text-teal-400 cel:w-full cel:text-center">Correo electronico</label>
                            <input type='email' name="user_email" required class="w-full p-3 h-12 rounded-lg mt-2 text-black text-xl font-thin tracking-widest" placeholder='Coloca tu correo electronico aqui.' />
                        </div>
                        <div class="mt-10 w-full flex items-start justify-start flex-col">
                            <label class="text-2xl tracking-widest font-thin text-teal-400 cel:w-full cel:text-center">Mensaje completo</label>
                            <textarea name="message" class="w-full h-48 p-3 resize-none rounded-lg mt-2 text-black text-xl font-thin tracking-widest" placeholder='Escribe tu mensaje aqui.' />
                        </div>
                        <input value="Enviar" type="submit" class="w-full mt-10 cursor-pointer active:bg-teal-500 h-12 rounded-lg text-white text-xl font-thin tracking-widest bg-teal-400"></input>
                    </div>
                </form>
                <div class="cel:w-full cel:mt-10 w-6/12 flex items-center h-full justify-center flex-col cel:gap-10 gap-32 cel:flex-col lg:mt-20 xl:mt-20">
                    <div class="w-11/12 cel:h-full cel:flex-col flex items-center justify-center lg:gap-32 xl:gap-32">
                        <div class="w-full h-full flex items-center justify-center cel:flex-col lg:flex-col xl:flex-col">
                            <div class="w-24 h-24 bg-teal-400 grid place-items-center">
                                <i class="fa-solid fa-envelope text-4xl"></i>
                            </div>
                            <div class="w-48 ml-3 cel:ml-0 h-28 flex flex-col items-start lg:items-center xl:items-center justify-center cel:items-center">
                                <h2 class="text-xl font-semibold text-white">Correo electronico</h2>
                                <span class="text-normal tracking-widest font-thin text-white">Benjavallory@hotmail.com</span>
                            </div>
                        </div>
                        <div class="w-full h-full flex items-center justify-center cel:flex-col lg:flex-col xl:flex-col">
                            <div class="w-24 h-24 bg-teal-400 grid place-items-center">
                                <i class="fa-brands fa-linkedin text-4xl"></i>
                            </div>
                            <div class="w-48 ml-3 cel:ml-0 h-28 flex flex-col items-start lg:items-center xl:items-center justify-center cel:items-center">
                                <h2 class="text-xl font-semibold text-white">Linkedin</h2>
                                <span class="text-normal tracking-widest font-thin text-white">Diego Benjamin Vallory</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-11/12 cel:h-full cel:flex-col flex items-center justify-center lg:gap-32 xl:gap-32">
                        <div class="w-full h-full flex items-center justify-center cel:flex-col lg:flex-col xl:flex-col">
                            <div class="w-24 h-24 bg-teal-400 grid place-items-center">
                                <i class="fa-brands fa-github text-4xl"></i>
                            </div>
                            <div class="w-48 ml-3 cel:ml-0 h-28 flex flex-col items-start lg:items-center xl:items-center justify-center cel:items-center">
                                <h2 class="text-xl font-semibold text-white">Github</h2>
                                <span class="text-normal tracking-widest font-thin text-white">iBxnja</span>
                            </div>
                        </div>
                        <div class="w-full h-full flex items-center justify-center cel:flex-col lg:flex-col xl:flex-col">
                            <div class="w-24 h-24 bg-teal-400 grid place-items-center">
                                <i class="fa-solid fa-envelopes-bulk text-4xl"></i>
                            </div>
                            <div class="w-48 ml-3 cel:ml-0 h-28 flex flex-col items-start lg:items-center xl:items-center justify-center cel:items-center">
                                <h2 class="text-xl font-semibold text-white">Gmail</h2>
                                <span class="text-normal tracking-widest font-thin text-white">benjaminvallory41@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}