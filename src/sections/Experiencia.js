/* eslint-disable jsx-a11y/anchor-is-valid */
import '../index.css';
import imagen1 from '../assets/image1.jpg';
import imagen2 from '../assets/R.jpeg';
import imagen3 from '../assets/450434.jpg';
import imagen4 from '../assets/220675.jpg';
import imagen5 from '../assets/image8.jpeg';
import imagen7 from '../assets/image9.jpg';

export function Experiencia() {
    return (
        <>
            <section id="experiencia" class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white">
                <div class="w-10/12 h-full flex items-center justify-around cel:justify-center cel:flex-col">
                    <div class="cel:w-full cel:items-center w-6/12 h-full flex items-start justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Bits Kingdom</h2>
                        <h4 class="font-medium text-2xl tracking-widest mt-1">Estados Unidos - Jun. 2024 - Oct. 2024</h4>
                        <p class="font-thin tracking-widest text-xl mt-5 text-start cel:w-full w-11/12 cel:text-center">
                            Puesto como desarrollador web full stack. Me encargue de realizar
                            tareas de mantenimiento de sitios web, migraciones, actualizaciones pedidas por el
                            cliente, entre tantas. Utilicé tecnologias como: Html, Css, Bootstrap,
                            Tailwind, Laravel, Php, Angular, Python, Supabase, Bitbucket, Github y React Native.
                        </p>
                    </div>
                    <div class="w-4/12 h-full grid place-items-center">
                        <img src={imagen1} alt="imagen1" class="cel:hidden w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white">
                <div class="w-10/12 h-full flex items-center justify-around cel:justify-center cel:flex-col">
                    <div class="w-4/12 h-full grid place-items-center">
                        <img src={imagen2} alt="imagen1" class="cel:hidden w-full h-full object-cover" />
                    </div>
                    <div class="cel:w-full cel:items-center w-6/12 h-full flex items-start justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Lumia</h2>
                        <h4 class="font-medium text-2xl tracking-widest mt-1">Argentina - May. 2023 - Abr. 2024</h4>
                         <p class="font-thin tracking-widest text-xl mt-5 text-start cel:w-full w-11/12 cel:text-center">
                            Experiencia laboral en forma de equipo el cual ocupé el puesto de programador web
                            full stack pero no se llego a concretar el trabajo con el cliente. Utilicé amplias tecnologias como:
                            React, Django, Python, Vue, Tailwind, Git, Github y Javascript.
                        </p>
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white">
                <div class="w-10/12 h-full flex items-center justify-around cel:justify-center cel:flex-col">
                    <div class="cel:w-full cel:items-center w-6/12 h-full flex items-start justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Clinica Odontológica</h2>
                        <h4 class="font-medium text-2xl tracking-widest mt-1">Freelancer - Ene. 2024 - Mar. 2024</h4>
                         <p class="font-thin tracking-widest text-xl mt-5 text-start cel:w-full w-11/12 cel:text-center">
                            Realice un sitio web destinado a una dentista. Esta plataforma permitía una autenticacion y la
                            gestion completa de clientes, imagenes, notas, citas y odontogramas, brindando a los profesionales
                            un control total sobre su práctica odontológica. Para llevar a cabo este proyecto, utilicé una variedad
                            de tecnologías. Html, Css, Tailwind, Javascript, Ajax, Jquery, Php, Laravel, Mysql (Dbeaver) y Github.
                            Tambien integré la biblioteca FullCalendar para mejorar aun mas la funcionalidad y la experiencia del usuario.
                        </p>
                    </div>
                    <div class="w-4/12 h-full grid place-items-center">
                        <img src={imagen3} alt="imagen1" class="cel:hidden w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white">
                <div class="w-10/12 h-full flex items-center justify-around cel:justify-center cel:flex-col">
                    <div class="w-4/12 h-full grid place-items-center">
                        <img src={imagen5} alt="imagen1" class="cel:hidden w-full h-full object-cover" />
                    </div>
                    <div class="cel:w-full cel:items-center w-6/12 h-full flex items-start justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Pasantia</h2>
                        <h4 class="font-medium text-2xl tracking-widest mt-1">Argentina - Oct. 2023 - Nov. 2024</h4>
                         <p class="font-thin tracking-widest text-xl mt-5 text-start cel:w-full w-11/12 cel:text-center">
                            Pasantía trabajando en una aplicacion en la cual me encargue mayormente en el desarrollo del
                            Front-End y parte del Back-end. Las tecnologias con las que trabajamos fueron las siguientes, Html,
                            Css, Tailwind, Php, Javascript y linux.
                        </p>
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white">
                <div class="w-10/12 h-full flex items-center justify-around cel:justify-center cel:flex-col">
                    <div class="cel:w-full cel:items-center w-6/12 h-full flex items-start justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">Agenda</h2>
                        <h4 class="font-medium text-2xl tracking-widest mt-1">Freelancer - Dic. 2023 - Dic. 2023</h4>
                         <p class="font-thin tracking-widest text-xl mt-5 text-start cel:w-full w-11/12 cel:text-center">
                            Desarrollo de una agenda de cumpleaños, una herramienta que permite a los usuarios gestionar
                            notas, fechas importantes y generar un informe general que resume todas las acciones realizadas.
                            Utilizando un conjunto diverso de tecnologias, como Html, Css, Bootstrap, Javascript, FullCalendar,
                            Mysql y Laravel, logré crear una aplicación elegante y funcional que supero las expectativas del cliente.
                        </p>
                    </div>
                    <div class="w-4/12 h-full grid place-items-center">
                        <img src={imagen7} alt="imagen1" class="cel:hidden w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <section class="w-full mb-10 h-full flex-col bg-black flex items-center justify-center text-white">
                <div class="w-10/12 h-full flex items-center justify-around cel:justify-center cel:flex-col">
                    <div class="w-4/12 h-full grid place-items-center">
                        <img src={imagen4} alt="imagen1" class="cel:hidden w-full h-full object-cover" />
                    </div>
                    <div class="cel:w-full cel:items-center w-6/12 h-full flex items-start justify-center flex-col">
                        <h2 class="text-5xl font-bold text-teal-400">La Push</h2>
                        <h4 class="font-medium text-2xl tracking-widest mt-1">Freelancer - Nov. 2023 - Dic. 2023</h4>
                         <p class="font-thin tracking-widest text-xl mt-5 text-start cel:w-full w-11/12 cel:text-center">
                            Proyecto apra marca de ropa que ya contaba con un dominio y un host establecido. En esta ocasión 
                            me encargué de la renovacion de la pagina web, se requería una actualización para mantener al dia
                            con las tendencias y las expectativas del mercado. Utilicé una variedad de tecnologias y templates.
                            Incluyendo Html, Css, Tailwind, Javascript, Jquery, Php, Laravel, Mysql y la api BgIbelick. Estas
                            herramientas me permitieron crear una nueva experiencia que destacaba la identidad de la marca
                            y mejoraba la interaccion con los clientes.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}