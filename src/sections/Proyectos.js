/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../index.css';
import imagen1 from '../assets/image1.jpg';
import galeria from '../assets/galeria.jpg';
import area from '../assets/area.jpg';
import dolar from '../assets/dolar.jpg';
import hamburguesas from '../assets/hamburguesas.png';



export function Proyectos() {
    return (
        <>
            <section id="proyectos" class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white cel:mt-56">
                <div class="w-10/12 h-96 flex items-center justify-around cel:flex-col cel:justify-center">
                    <div class="w-6/12 cel:w-full h-full flex items-start cel:items-center justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Galería</h2>
                        <p class="cel:text-center h-32 font-thin tracking-widest text-xl mt-5 text-start w-11/12">
                            Proyecto full stack donde una persona autenticada puede guardar recuerdos. Tecnologias usadas html, tailwind, javascript, php, laravel, dbeaver, git y github.
                        </p>
                        <div class="flex items-center justify-center cel:my-32 gap-28 cel:flex-col cel:gap-10 lg:gap-10 xl:gap-10 xl:mt-20 lg:mt-20">
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">AUTENTICACION</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">REGISTROS</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">RESPONSIVO</span>
                            </div>
                        </div>
                    </div>
                    <div class="cel:hidden w-4/12 cel:w-full h-full grid place-items-center">
                        <img src={galeria} alt="imagen1" class="w-full h-80 object-cover" />
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white cel:mt-64">
                <div class="w-10/12 h-96 flex items-center justify-around cel:flex-col cel:justify-center">
                    <div class="cel:hidden w-4/12 cel:w-full h-full grid place-items-center">
                        <img src={dolar} alt="imagen1" class="w-full h-80 object-cover" />
                    </div>
                    <div class="w-6/12 cel:w-full h-full flex items-start cel:items-center justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Dolar Now</h2>
                        <p class="cel:text-center h-32 font-thin tracking-widest text-xl mt-5 text-start w-11/12">
                        Sitio donde se puede observar los valores de dolar obtenidos de una api publica, ademas de poder hacer su conversion a pesos. Tecnologias usadas html, tailwind, vue, github y axios.
                        </p>
                        <div class="flex items-center justify-center cel:my-32 gap-28 cel:flex-col cel:gap-10 lg:gap-10 lg:mt-20 xl:gap-10 xl:mt-20">
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl lg:text-2xl text-teal-400"></i>
                                <span class="text-teal-400">RESPONSIVO</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl lg:text-2xl text-teal-400"></i>
                                <span class="text-teal-400">RESULTADO AL INSTANTE</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl lg:text-2xl text-teal-400"></i>
                                <span class="text-teal-400">CONSUMO DE API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white cel:mt-64">
                <div class="w-10/12 h-96 flex items-center justify-around cel:flex-col cel:justify-center">
                    <div class="w-6/12 cel:w-full h-full flex items-start cel:items-center justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Area</h2>
                        <p class="cel:text-center h-32 font-thin tracking-widest text-xl mt-5 text-start w-11/12">
                        Sitio web de astronomía. En esta página se puede observar los diferentes planetas y su información particular que los distingue entre ellos. Las tecnologidas usadas son html, tailwind, vue y javascript.
                        </p>
                        <div class="flex items-center justify-center cel:my-32 gap-28 cel:flex-col cel:gap-10 lg:gap-10 lg:mt-20 xl:gap-10 xl:mt-20">
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">IDENTIDAD</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">ANIMACIÓN</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">INFORMACION</span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="cel:hidden w-4/12 cel:w-full h-full grid place-items-center">
                        <img src={area} alt="imagen1" class="w-full h-80 object-cover" />
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white cel:mt-64">
                <div class="w-10/12 h-96 flex items-center justify-around cel:flex-col cel:justify-center">
                    <div class="cel:hidden w-4/12 cel:w-full h-full grid place-items-center">
                        <img src={hamburguesas} alt="imagen1" class="w-full h-80 object-cover" />
                    </div>
                    <div class="w-6/12 cel:w-full h-full flex items-start cel:items-center justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Hamburguesas</h2>
                        <p class="cel:text-center h-32 font-thin tracking-widest text-xl mt-5 text-start w-11/12">
                        Sitio ecommerce el cual se trata de un página de comida rapida. Las tecnologias usadas para esta página web fueron html, css, bootstrap, php, laravel, mysql, dbeaver, git y github.
                        </p>
                        <div class="flex items-center justify-center cel:my-32 gap-28 cel:flex-col cel:gap-10 lg:gap-10 lg:mt-20 xl:gap-10 xl:mt-20">
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">ECOMMERCE</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">COMPRAS</span>
                            </div>
                            <div class="flex items-center justify-center flex-col">
                                <i class="fa-solid fa-check text-4xl text-teal-400"></i>
                                <span class="text-teal-400">AUTENTICACION</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}