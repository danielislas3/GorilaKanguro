import React from 'react'
import {Link} from 'react-router-dom'

export default function index() {
  return (
    <div>
      <Link to="/ruta">
        ejemplo
      </Link>
      <h1>Index</h1>
    </div>
  )
}
