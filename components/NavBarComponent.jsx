import React, { Fragment, useEffect } from 'react'
import Link from 'next/link'

export default function NavBarComponent() {
    useEffect(()=>{
        const faders = document.querySelectorAll(".fade-in");
        const sliders = document.querySelectorAll(".slide");
        const html = document.querySelector("html");
        const burger = document.querySelector(".burger");
        const lines = document.querySelectorAll(".burger div");
        const navLinks = document.querySelector(".nav-links");
        const navLink = document.querySelectorAll(".nav-links li");
        navLink.forEach((link) => {
            link.addEventListener("click", function () {
              if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                html.classList.remove("active");
                lines.forEach((line) => {
                  line.classList.remove("toggle");
                });
                navLink.forEach((link) => {
                  link.style.animation = "";
                });
              }
            });
          });
    })

    return (
        <Fragment>
            <header className="main-head" id="main-head">
                <div id="logo">
                    <a href="#main-head" className="scroll"><img src="./icon/logo.svg" alt="ekam-logo" /></a>
                    <a href="#main-head" className="scroll"><h1>Agencia Ekam</h1></a>
                </div>
                <nav>
                    <ul className="nav-links">
                    <li className="nav-link">
                        <Link href="#me">Información</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="#portfolio">Trabajos</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="https://www.instagram.com/agencia.ekam/" target="_BLANK"><div><i className="fab fa-instagram"></i> Instagram</div></Link>
                    </li>
                    </ul>
                </nav>
                <div className="burger" onClick={()=>{
                    document.querySelector(".nav-links").classList.toggle("active");
                    document.querySelectorAll(".burger div").forEach((line) => {
                      line.classList.toggle("toggle");
                    });
                    document.querySelector("html").classList.toggle("active");
                    document.querySelectorAll(".nav-links li").forEach((link, index) => {
                      if (link.style.animation) {
                        link.style.animation = "";
                      } else {
                        link.style.animation = `linksFade 1s ease forwards ${index / 7}s`;
                      }
                    });
                }}>
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
            </header>
        </Fragment>
    )
}
