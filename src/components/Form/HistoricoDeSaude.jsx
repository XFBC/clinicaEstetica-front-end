import { Link } from 'react-router-dom'
import Breadcrumb from '../Layout/Breadcrumb'

import { historicoSaude } from '../../constants/index'

export default function HistoricoDeSaude() {
  return (
    <div>
      <div className="container-layout">
        <div className="">
          <Breadcrumb />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold pb-4">Histórico de saúde</h2>

          <div className="flex items-center">
            <div className="bg-gray-200 rounded-box py-10 px-10 items-center w-full">
              <form>
                <div className="grid grid-cols-0 md:grid-cols-4 gap-4">
                  {historicoSaude.map(info => (
                    <div className="flex flex-wrap justify-between border-gray-400 border-solid border-[0.5px] mb-2 rounded-md px-2 py-2">
                      <p> {info.title}</p>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-accent"
                      />
                    </div>
                  ))}
                </div>
              </form>

              <div className="flex lg:flex-row flex-col  justify-between lg:px-8 p-2 ">
                <div className="flex flex-row gap-2">
                  <Link
                    className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                    to="/principaisqueixas"
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
    </div>
  )
}
