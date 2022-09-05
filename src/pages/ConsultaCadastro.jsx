import React from 'react'

export default function ConsultaCadastro() {
  return (
    <div className="text-center ">
      <div>Consulte o paciente:</div>

      <div>
        <label className="label">
          <span className="label-text font-semibold">
            Busque por um paciente
          </span>
        </label>
        <input
          type="text"
          placeholder="Digite o nome..."
          className="input input-bordered w-full "
        />
      </div>
    </div>
  )
}
