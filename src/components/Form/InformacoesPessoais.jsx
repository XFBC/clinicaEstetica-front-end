import { Link } from 'react-router-dom'
import Breadcrumb from '../Layout/Breadcrumb'

export default function InformacoesPessoais() {
  return (
    <>
      <div className="">
        <Breadcrumb />
      </div>
      <div>
        <h2 className="text-2xl font-semibold pb-4 lg:pl-[15%] md:pl-[18%] pl-[10%]">
          Informaçoes Pessoais
        </h2>
        <div className="flex flex-col w-[100%] border-opacity-50 items-center pt-2 ">
          <div className="grid w-[90%] md:max-w-[70%]  card bg-gray-200 rounded-box form-control py-10 items-center">
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
                    <span className="label-text font-semibold">Profissão</span>
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

                <div className="flex flex-col">
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
        </div>
      </div>
    </>
  )
}
