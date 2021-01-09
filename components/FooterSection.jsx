import React, { Fragment } from 'react'
import Link from 'next/link'

export default function FooterSection() {
    return (
        <Fragment>
            <footer >
                <div className="footer-container">
                <Link href="/">
                    <div className="logo-footer">
                        <img src="icon/logo-white.svg"/>
                        <h1>Agencia Ekam</h1>
                    </div>
                </Link>
                <ul className="sections">
                    <h3>Secciones</h3>
                    <Link href="/#me">
                        <li>Nosotros</li>
                    </Link>
                    <Link href="/#portfolio">
                        <li>Clientes</li>
                    </Link>
                    <Link href="https://www.instagram.com/agencia.ekam/" target="_BLANK">
                        <li>Instagram</li>
                    </Link>
                </ul>
                </div>
                <div className="copyright">
                    Diseñado y programado por Agencia Ekam | Copyright © 2021
                </div>
            </footer>
            <style jsx>
                {`
                footer{
                    min-height:50vh;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    padding: 3rem ;
                    flex-direction:column;
                    background-color: rgb(87, 87, 87);
                }
                img{
                    height:100px
                }
                .logo-footer{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    cursor: pointer;
                }
                h1{
                    color:white;
                }
                h3{
                    color:white;
                    font-weight: 600;
                    margin-bottom:2rem;
                }
                li{
                    color: white;
                    font-weight: lightgray;
                    cursor: pointer;
                }
                .footer-container{
                    display:flex;
                    justify-content: space-around;
                    align-items:center;
                    flex:1;
                    width:100%;
                }
                .copyright{
                    color: white;
                    width:100%;
                    text-align: center;
                    border-top: 1px solid white;
                    padding-top: 2rem;
                }
                `}
            </style>
        </Fragment>
    )
}
