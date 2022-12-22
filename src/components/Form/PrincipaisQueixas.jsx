import { Link } from 'react-router-dom'
import { principaisQueixas } from '../../constants'
import Breadcrumb from '../Layout/Breadcrumb'

export default function PrincipaisQueixas() {
  return (
    <div className="container-layout">
      <div className="">
        <Breadcrumb />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold pb-4">Principais Queixas</h2>

        <div className="flex items-center">
          <div className="bg-gray-200 rounded-box py-10 px-10 items-center w-full">
            <form>
              <div className="grid grid-cols-0 md:grid-cols-4 gap-4">
                {principaisQueixas.map(info => (
                  <div className="dropdown">
                    <label className="font-bold">
                      <p>{info.title}</p>
                    </label>
                    <label tabIndex={0} className="btn btn-accent">
                      <p>selecione</p>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {info.option.map(info => (
                        <li>
                          <a>{info.option}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </form>

            <div className="flex lg:flex-row flex-col  justify-between lg:px-8 p-2 ">
              <div className="flex flex-row gap-2">
                <Link
                  className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                  to="/novocadastro"
                >
                  voltar
                </Link>
                <button className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32">
                  Salvar
                </button>
              </div>
              <Link
                className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                to="/historicodesaude"
              >
                Avançar
              </Link>
            </div>
          </div>
          <div className="divider"></div>

          <div className="mb-24"></div>
        </div>
      </div>
    </div>
  )
}
