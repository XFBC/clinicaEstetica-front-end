import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export function Header() {
  return (
    <header>
      <nav id="header" class="fixed w-full">
        <div class=" w-full z-10  top-0 bg-gray-200 border-b border-grey-light">
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div class="pl-4 flex items-center">
              <div id="search-toggle" class="cursor-pointer pl-6">
                <h2 className="font-serif font-bold text-2xl">
                  Carol Santos Estética
                </h2>
              </div>
            </div>

            <div class="pr-4">
              <button
                id="nav-toggle"
                class="block lg:hidden items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-black hover:border-purple appearance-none focus:outline-none"
              >
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>

            <div
              class="w-full flex-grow  lg:flex-1 lg:content-center lg:justify-end lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20"
              id="nav-content"
            >
              <ul class="list-reset lg:flex justify-end items-center">
                <li class="mr-3 py-2 lg:py-0">
                  <a
                    class="inline-block py-2 px-4 text-black font-bold no-underline"
                    href="#"
                  >
                    <Link to="/">Home</Link>
                  </a>
                </li>
                <li class="mr-3   py-0">
                  <a
                    class="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4"
                    href="#"
                  >
                    <Link to="/ConsultaCadastro">Consulta cadastro</Link>
                  </a>
                </li>
                <li class="mr-3 py-2 lg:py-0">
                  <a
                    class="inline-block text-grey-dark no-underline hover:text-black hover:underline py-2 px-4"
                    href="#"
                  >
                    <Link to="/novocadastro">Novo cadastro</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
