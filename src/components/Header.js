import React, { useState, useEffect } from 'react';
import '../index.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    if (menuOpen) {
      // navbar.classList.add('w-full', 'h-screen');
      // cerrar.classList.remove('hidden');
    } else {
      // navbar.classList.remove('w-full', 'h-screen');
      // cerrar.classList.add('hidden');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header id="header" className={`w-10/12 h-24 flex items-center justify-center cel:flex ${menuOpen ? 'cel:w-full cel:h-screen' : ''}`}>
      <nav id="navbar" className={`flex lg:gap-6 cel:gap-16 gap-32 text-white w-full h-10 rounded-full items-center justify-center ${menuOpen ? 'cel:w-full cel:h-screen cel:rounded-none cel:flex-col cel:bg-black' : 'cel:bg-teal-400 cel:w-10 cel:absolute cel:top-5 cel:left-5'}`} onClick={toggleMenu}>
        <i className={`fa-solid fa-xmark cel:text-4xl hidden ${menuOpen ? 'cel:block cel:absolute cel:top-5 cel:right-5' : 'cel:hidden'}`} id="cerrar" onClick={toggleMenu}></i>
        <a href='#inicio' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:text-teal-400 h-full cel:h-10 border-2 hover:border-b-teal-400 border-transparent text-center`}>Inicio</a>
        <a href='#experiencia' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:text-teal-400 h-full cel:h-10 border-2 hover:border-b-teal-400 border-transparent text-center`}>Experiencia Laboral</a>
        <a href='#habilidades' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:text-teal-400 h-full cel:h-10 border-2 hover:border-b-teal-400 border-transparent text-center`}>Habilidades</a>
        <a href='#proyectos' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:text-teal-400 h-full cel:h-10 border-2 hover:border-b-teal-400 border-transparent text-center`}>Proyectos</a>
        <a href='#contacto' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:text-teal-400 h-full cel:h-10 border-2 hover:border-b-teal-400 border-transparent text-center`}>Contacto</a>
      </nav>
    </header>
  );
}