import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

export function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <header>
      <nav id="header" class="sticky w-full">
        <div class=" w-full z-10  top-0 bg-gray-200 border-b border-grey-light">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div class="pl-4 flex items-center">
              <div id="search-toggle" class="cursor-pointer pl-6">
                <a href="/">
                  <h2 className="font-serif font-bold text-2xl">
                    Carol Santos Estética
                  </h2>
                </a>
              </div>
            </div>

            {/* Desktop nav  */}
            <div
              class="w-full flex-grow  lg:flex-1 lg:content-center lg:justify-end lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20"
              id="nav-content"
            >
              <ul class="list-reset lg:flex justify-end items-center">
                <li class="mr-3 py-2 lg:py-0">
                  <a class="inline-block py-2 px-4 text-black" href="#">
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li class="mr-3 py-2 lg:py-0">
                  <a
                    class="inline-block text-grey-dark no-underline hover:text-black  py-2 px-4"
                    href="#"
                  >
                    <Link to="/novocadastro">Novo cadastro</Link>
                  </a>
                </li>
                <li class="mr-3   py-0">
                  <a
                    class="inline-block text-grey-dark no-underline hover:text-black py-2 px-4"
                    href="#"
                  >
                    <Link to="/ConsultaCadastro">Consulta cadastro</Link>
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile nav */}
            <div className="sm:hidden flex ustify-end items-center mr-6">
              <button onClick={() => setToggle(prev => !prev)}>
                {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
              <div
                className={`${
                  toggle ? 'flex ' : 'hidden'
                } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg bg-gray-400`}
              >
                <ul className="list-none flex justify-center items-center flex-col mx-8">
                  <li>
                    <a class="inline-block py-2  text-black" href="#">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li>
                    {' '}
                    <a
                      class="inline-block text-grey-dark no-underline hover:text-black  py-2"
                      href="#"
                    >
                      <Link to="/novocadastro">Novo cadastro</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      class="inline-block text-grey-dark no-underline hover:text-black py-2 "
                      href="#"
                    >
                      <Link to="/ConsultaCadastro">Consulta cadastro</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
