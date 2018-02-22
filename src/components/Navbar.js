import React from 'react'
import { Link } from 'react-router-dom'
import { CookiesProvider, withCookies } from 'react-cookie'
import jwtDecode from 'jwt-decode'
import isotype from 'unholster-isotipo.svg'
import 'css/nav.css'

export default () => {
  return <ul className="nav" role="navigation">
    <li>
      <Link to="/">
        <img alt="U" src={isotype} className="isotype" />
        <span className="title" >Backyard</span>
      </Link>
    </li>

    <li>
      <Link to="/guide/employee">Guías</Link>
      <Link to="/projects">Proyectos</Link>
    </li>
    <li
      style={{
        marginLeft: 'auto'
      }}
    >
{/*      <CookiesProvider>
        <Avatar />
      </CookiesProvider>*/}
    </li>
  </ul>
}

const Avatar = withCookies((props) => {
    const idToken = props.cookies.get('backyard_token')
    if(!idToken) {
      return ''
    }
    const data = jwtDecode(idToken)
    return <div
      className="avatar"
      style={{
        backgroundImage: `url(${data.picture})`,
      }}

    />
})
