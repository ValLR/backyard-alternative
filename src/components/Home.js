import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.js'
import 'css/home.css'

export default () =>
    <div className="home">
        <Navbar />
        <div className="masthead">
            <h1>¡Bienvenido Unholsteriano!</h1>
            <p>
                Estás en Backyard, la columna vertebral de Unholster.
            </p>
        </div>

        <div className="content container-flex">
            <div className="column">
                <div className="card">
                    <h3>Backyard</h3>
                    <p>
                    Pronto encontrarás aquí contenidos, recursos y herramientas
                    para orientarte y apoyarte en tu vida como Unholsteriano.
                    </p>
                    <p>
                    ¡Atento a las novedades que tendremos!
                    <span role="img" aria-label="happyface" style={{fontSize: '1.5em', marginLeft: '0.5em'}}>😄</span>
                    </p>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <h3>Guía del Empleado</h3>
                    <p>
                    ¿Vacaciones, licencias o imprevistos?
                    Acá te mostramos todo lo que necesites saber para trabajar sin contratiempos.
                    Ya sabes, las reglas claras conservan la amistad.
                    </p>
                    <Link className="btn" to="/guide/employee">Ir a la guía</Link>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <h3>Feedback</h3>
                    <p>
                    Tu feedback es importante y bienvenido. Tanto si encuentras algún error
                    o si tienes alguna sugerencia de como mejorar los contenidos y herramientas
                    de Backyard.
                    </p>
                    <Link className="btn" to="https://github.com/Unholster/backyard/issues">Crear issue en Github</Link>
                </div>
            </div>
        </div>
    </div>
