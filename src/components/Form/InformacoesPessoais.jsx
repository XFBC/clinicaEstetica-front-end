import { Link } from 'react-router-dom'
import Breadcrumb from '../Layout/Breadcrumb'
import styles from './styles.modules.scss'
import { informacoesPessoais } from '../../constants'

export default function InformacoesPessoais() {
  return (
    <>
      <div className="container-layout">
        <div className="">
          <Breadcrumb />
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold pb-4">Informaçoes Pessoais</h2>
          {/* <div className="flex items-center">
            <div className="bg-gray-200 rounded-box py-10 items-center w-full">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Nome</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Digite o nome..."
                      className="input input-bordered w-full max-w-xs grid-cols-6"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Profissão
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Digite a profissão..."
                      className="input input-bordered w-full max-w-xs grid-cols-6"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Contato/Whatsapp
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Digite o contato..."
                      className="input input-bordered w-full max-w-xs grid-cols-6"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Data de nascimento
                      </span>
                    </label>
                    <input
                      type="date"
                      className="input input-bordered w-full max-w-xs grid-cols-6"
                    />
                  </div>
                </div>

                <div className="flex flex-row justify-between lg:px-8 p-2 ">
                  <button className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32">
                    Salvar
                  </button>
                  <Link
                    className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                    to="/Principaisqueixas"
                  >
                    Avançar
                  </Link>
                </div>
              </form>
            </div>
            <div className="divider"></div>

            <div className="mb-24"></div>
          </div> */}
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-box py-10 px-10 items-center w-full">
              <form>
                <div className="grid grid-cols-0 md:grid-cols-3 gap-4">
                  {informacoesPessoais.map(info => (
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          {info.title}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder={info.placeholder}
                        className="input input-bordered w-full max-w-xs grid-cols-6"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-row justify-between">
                  <button className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32">
                    Salvar
                  </button>
                  <Link
                    className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                    to="/Principaisqueixas"
                  >
                    Avançar
                  </Link>
                </div>
              </form>
            </div>
            <div className="divider"></div>

            <div className="mb-24"></div>
          </div>
        </div>
      </div>
    </>
  )
}
