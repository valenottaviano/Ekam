import React from 'react'

export default function PortfolioSection() {
    return (
      <section id="portfolio">
            <div className="portfolio-container">
              <h2>Algunos de nuestros clientes</h2>
              <div className="portfolio-images">
                <a href="https://spektrum.es" ><img src="./img/portfolio-img/spektrum.svg" alt="spektrum" /></a>
                <a href="#" ><img src="./img/portfolio-img/marce.svg" alt="Marcela Barros IFBB PRO" /></a>

                <a href="https://quelopaleo.com.ar" ><img src="./img/portfolio-img/quelopaleo.svg" alt="Que lo paleó!" /></a>
                <a href="https://www.nailtucuman.com.ar " ><img src="./img/portfolio-img/nail.svg" alt="Nail Tucumán" /></a>
                <a href="https://www.cefgroup.com.ar" ><img src="./img/portfolio-img/cef.svg" alt="cefgroup" /></a>
              </div>
            </div>
        </section>
        
    )
}
