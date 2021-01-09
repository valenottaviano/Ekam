import React from 'react'

export default function PerkSection() {
    return (
      <section id="perks">
      <div className="perk-container">
        <div className="perk1">
          <img src="./icon/perk1.svg" alt="" />
          <div className>
            <h3>Código a medida</h3>
            <p>
              Diseñamos tanto la web como el código para que se adapte a las
              necesidades de la empresa y los objetivos establecidos.
            </p>
          </div>
        </div>
        <div className="perk2">
          <img src="./icon/perk2.svg" alt="" />
          <div className>
            <h3>Subí de nivel!</h3>
            <p>
              Hoy más que nunca es crucial la importancia de realizar el cambio
              hacia los servicios digitales. Innovar para poder destacar.
            </p>
          </div>
        </div>
        <div className="perk3">
          <img src="./icon/perk3.svg" alt="" />
          <div className>
            <h3>Servicio técnico</h3>
            <p>
              Personalizado a los requerimientos del cliente. Se realizan los
              cambios necesarios para la satisfacción de la empresa.
            </p>
          </div>
        </div>
      </div>
    </section>    
    )
}
