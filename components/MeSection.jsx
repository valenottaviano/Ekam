import React from 'react'

export default function MeSection() {
    return (
        <section id="me">
            <div className="me-container">
                <div className="title-container">
                <h2>El equipo detrás de <span>Ekam</span></h2>
                </div>
                <div className="text-container">
                <div className="profile">
                    <img src="./img/me.jpg" alt="" />
                    <div className="text">
                    <h2>Valentín Ottaviano</h2>
                    <h3>Desarrollador Web</h3>
                    </div>
                </div>
                <p>
                    Agencia Ekam es un estudio de
                    <span> dessarrollo web y diseño creativo. </span>
                    Creemos en el poder del <span>buen criterio</span> con respecto al
                    diseño y experiencia de usuario, generando reconocimiento de marca y
                    emociones positivas en potenciales clientes.
                </p>
                </div>
            </div>
            </section>

    )
}
