import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export function Header() {
  return (
    <header className={styles.header_style}>
      <Link to="/">Home</Link>
      <Link to="/novocadastro">Novo cadastro</Link>
      <Link to="/ConsultaCadastro">Consulta cadastro</Link>
    </header>
  )
}
