import { Link } from 'react-router-dom'

export default function PrincipaisQueixas() {
  return (
    <div>
      <div className="py-28">
        <h2 className="text-2xl font-semibold pb-4 lg:pl-[15%] md:pl-[18%] pl-[10%]">
          Principais queixas
        </h2>
        <div className="flex flex-col w-[100%] border-opacity-50 items-center pt-2 ">
          <div className="grid w-[90%] md:max-w-[70%]  card bg-gray-200 rounded-box form-control py-10 items-center">
            <div class="grid lg:grid-cols-3 grid-cols-1  gap-4 px-2">
              <form>
                <div className="form-control  ">
                  <div className="cursor-pointer label border-gray-400 border-solid border-[0.5px] mb-2  rounded-md flex flex-col items-start">
                    <span className="label-text pb-2 ml-2">ACNE</span>

                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className="btn-sm btn-info m-1 px-5 py-1 rounded-md bg-gray-100"
                      >
                        Selecione
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu  shadow bg-base-100 rounded-box w-32 text-xs"
                      >
                        <li>
                          <a>ACNE</a>
                        </li>
                        <li>
                          <a>HPI</a>
                        </li>
                        <li>
                          <a>MELASMA</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cursor-pointer label border-gray-400 border-solid border-[0.5px] mb-2  rounded-md flex flex-col items-start">
                    <span className="label-text">QUANTO TEMPO ENCOMODA ?</span>

                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className="btn-sm btn-info m-1 px-5 py-1 rounded-md"
                      >
                        Selecione
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu  shadow bg-base-100 rounded-box w-32 text-xs"
                      >
                        <li>
                          <a>Menos de 1 ano</a>
                        </li>
                        <li>
                          <a>de 1 a 3 anos </a>
                        </li>
                        <li>
                          <a>Mais de 5 anos</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cursor-pointer label border-gray-400 border-solid border-[0.5px] mb-2  rounded-md flex flex-col items-start">
                    <span className="label-text">Home care em uso?</span>

                    <div className="dropdown">
                      <label
                        tabIndex={0}
                        className="btn-sm btn-info m-1 px-5 py-1 rounded-md"
                      >
                        Selecione
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu  shadow bg-base-100 rounded-box w-32 text-xs"
                      >
                        <li>
                          <a>Menos de 1 ano</a>
                        </li>
                        <li>
                          <a>de 1 a 3 anos </a>
                        </li>
                        <li>
                          <a>Mais de 5 anos</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2 rounded-md flex flex-col items-start gap-2">
                    <span className="label-text">
                      Qual seu objetivo com o tratamento ?
                    </span>

                    <input
                      type="text"
                      placeholder="..."
                      className="input input-bordered input-accent w-full max-w-xs"
                    />
                  </label>
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2 rounded-md flex flex-col items-start gap-2">
                    <span className="label-text">
                      Histórico de tratamento anteriores?
                    </span>

                    <input
                      type="text"
                      placeholder="..."
                      className="input input-bordered input-accent w-full max-w-xs"
                    />
                  </label>
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2  rounded-md">
                    <span className="label-text">Hipertensão</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2  rounded-md">
                    <span className="label-text">Hipertensão</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                </div>
              </form>
              <form>
                <div className="form-control">
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2 rounded-md">
                    <span className="label-text">Hipertensão</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2 rounded-md">
                    <span className="label-text">Hipertensão</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2  rounded-md">
                    <span className="label-text">Hipertensão</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                  <label className="cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2  rounded-md">
                    <span className="label-text">Hipertensão</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-accent"
                    />
                  </label>
                </div>
              </form>
            </div>

            <form>
              <div className="grid grid-cols-6"></div>

              <div className="flex flex-row justify-between lg:px-8 p-2 ">
                <button className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32">
                  Salvar
                </button>
                <Link
                  className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                  to="/historicodesaude"
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
  )
}
