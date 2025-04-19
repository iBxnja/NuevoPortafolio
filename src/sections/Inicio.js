/* eslint-disable jsx-a11y/anchor-is-valid */
import '../index.css';
import BenjaminVallory from '../assets/BenjaminValloryCv.png';

export function Inicio() {
    return (
        <section id="#inicio" class="w-10/12 h-full flex-col bg-black flex items-center justify-center text-white">
            <div class="2xl:w-full xl:w-full lg:w-full h-full flex items-center justify-center text-white mt-20">
                <div class="w-6/12 cel:w-full sm:w-full sm:h-full sm:items-center cel:h-full h-full flex items-start gap-3 justify-center flex-col font-bold cel:items-center">
                    <span class="w-56 h-1 bg-teal-400"></span>
                    <h2 class="text-start text-7xl cel:text-4xl sm:text-4xl">HOLA<br />
                        SOY BENJAMIN<br />
                        PROGRAMADOR<br />
                        FULL STACK Y<br />
                        MOBILE<br />
                        </h2>
                    <div class="cel:flex-col sm:flex-col sm:gap-0 flex items-center justify-center cel:gap-0 gap-20">
                        <a href='#contacto' class="transition duration-200 ease-in-out hover:bg-teal-400 hover:text-black w-72 h-16 grid place-items-center cel:mt-5 mt-20 border-2 border-teal-400 font-medium">CONTACTO</a>
                        <a href={BenjaminVallory} download="BenjaminVallory.png" class="transition duration-200 ease-in-out hover:bg-teal-400 hover:text-black w-72 h-16 grid place-items-center cel:mt-10 mt-20 border-2 border-teal-400 font-medium">DESCARGAR CV</a>
                    </div>
                </div>


                <div class="cel:w-full sm:w-full w-6/12 h-full flex items-start justify-center flex-col"></div>


            </div>
            <div class="w-full h-96 cel:h-full sm:h-full sm:flex-col cel:flex-col flex items-center justify-around  my-20">
                <a href='#experiencia' id="card1" class="lg:w-full transition duration-200 ease-in-out h-full sm:py-10 cel:py-10 bg-neutral-900 hover:bg-teal-400 text-white hover:text-black flex cel:items-center sm:items-center items-start justify-center flex-col">
                    <i class="lg:ml-5 cel:ml-0 sm:ml-0 sm:text-center cel:text-center ml-20 fa-solid fa-scale-balanced text-4xl"></i>
                    <h2 class="lg:ml-5 cel:ml-0 cel:text-center ml-20 sm:ml-0 sm:text-center text-start font-bold my-5 text-3xl">Experiencia Laboral</h2>
                    <span id="span1" class="lg:ml-5 cel:ml-0 cel:text-center ml-20 w-40 h-1 sm:ml-0 sm:text-center bg-teal-400"></span>
                    <p class="lg:ml-5 cel:ml-0 cel:text-center ml-20 text-start mt-2 w-8/12 sm:ml-0 sm:text-center tracking-widest font-thin text-md">Descubre mi experiencia laboral y las tecnologias que utilicé a lo largo de mi trayecto.</p>
                </a>
                <a href='#habilidades' id="card2" class="lg:w-full transition duration-200 ease-in-out h-full cel:py-10 sm:my-10 sm:py-10 cel:my-10 cel:mx-0 mx-10 flex bg-neutral-900 hover:bg-teal-400 text-white hover:text-black cel:items-center items-start justify-center flex-col">
                    <i class="lg:ml-5 cel:ml-0 sm:ml-0 sm:text-center cel:text-center ml-20 fa-solid fa-book-open-reader text-4xl"></i>
                    <h2 class="lg:ml-5 cel:ml-0 sm:ml-0 sm:text-center cel:text-center ml-20 text-start font-bold my-5 text-3xl">Habilidades</h2>
                    <span id="span2" class="lg:ml-5 cel:ml-0 sm:ml-0 sm:text-center cel:text-center ml-20 w-40 h-1 bg-teal-400"></span>
                    <p class="lg:ml-5 cel:ml-0 sm:ml-0 sm:text-center cel:text-center ml-20 text-start mt-2 w-8/12 tracking-widest font-thin text-md">Descubre mi experiencia laboral y las tecnologias que utilicé a lo largo de mi trayecto.</p>
                </a>
                <a href='#proyectos' id="card3" class="lg:w-full transition duration-200 ease-in-out h-full cel:py-10 sm:py-10 sm:my-10 bg-neutral-900 hover:bg-teal-400 text-white hover:text-black flex cel:items-center items-start justify-center flex-col">
                    <i class="lg:ml-5 cel:ml-0 cel:text-center ml-20 fa-solid fa-diagram-project text-4xl sm:ml-0 sm:text-center"></i>
                    <h2 class="lg:ml-5 cel:ml-0 cel:text-center ml-20 text-start font-bold my-5 text-3xl sm:ml-0 sm:text-center">Proyectos</h2>
                    <span id="span3" class="lg:ml-5 cel:ml-0 cel:text-center ml-20 w-40 h-1 bg-teal-400 sm:ml-0 sm:text-center"></span>
                    <p class="lg:ml-5 cel:ml-0 cel:text-center ml-20 text-start mt-2 w-8/12 tracking-widest sm:ml-0 sm:text-center font-thin text-md">Descubre mi experiencia laboral y las tecnologias que utilicé a lo largo de mi trayecto.</p>
                </a>
            </div>
        </section>
    )
}