import { Link } from 'react-router-dom'
import Breadcrumb from '../Layout/Breadcrumb'

export default function HistoricoDeSaude() {
  return (
    <div>
      <div>
        <Breadcrumb />
        <div>
          <h2 className="text-2xl font-semibold pb-4 lg:pl-[15%] md:pl-[18%] pl-[10%]">
            Histórico Hormonal
          </h2>
          <div className="flex flex-col w-[100%] border-opacity-50 items-center pt-2 ">
            <div className="grid w-[90%] md:max-w-[70%]  card bg-gray-200 rounded-box form-control py-10 items-center">
              <div class="grid lg:grid-cols-3 grid-cols-1  gap-2 px-2 ">
                <div className="flex flex-row gap-6 cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2  rounded-md">
                  <p>Hipertensão</p>
                  <div>
                    <input
                      type="radio"
                      name="radio-4"
                      className="radio radio-accent"
                    />
                    <label htmlFor=""> sim</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="radio-4"
                      className="radio radio-accent"
                    />
                    <label htmlFor=""> não</label>
                  </div>
                </div>
              </div>
              <div class="grid lg:grid-cols-3 grid-cols-1  gap-2 px-2 ">
                <div className="flex flex-row gap-6 cursor-pointer label  border-gray-400 border-solid border-[0.5px] mb-2  rounded-md">
                  <p>Hipertensão</p>
                  <div>
                    <input
                      type="radio"
                      name="radio-4"
                      className="radio radio-accent"
                    />
                    <label htmlFor=""> sim</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="radio-4"
                      className="radio radio-accent"
                    />
                    <label htmlFor=""> não</label>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col  justify-between lg:px-8 p-2 ">
                <div className="flex flex-row gap-2">
                  <Link
                    className="btn btn-outline btn-success mt-10 btn-sm md:btn-md lg:btn-md w-32"
                    to="/historicodesaude"
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
