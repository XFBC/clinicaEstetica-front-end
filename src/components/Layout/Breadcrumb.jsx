import { Link } from 'react-router-dom'

export default function Breadcrumb({ children }) {
  return (
    <div className="text-sm breadcrumbs ">
      <ul className="flex flex-wrap">
        <li>
          <Link to="/novocadastro">Informacoes pessoais</Link>
        </li>
        <li>
          <Link to="/Principaisqueixas"> principais queixas</Link>
        </li>
        <li>
          <Link to="/historicodesaude">historico de saude</Link>
        </li>
        <li>
          <Link to="/historicohormonal">historico hormonal</Link>
        </li>
      </ul>
    </div>
  )
}
