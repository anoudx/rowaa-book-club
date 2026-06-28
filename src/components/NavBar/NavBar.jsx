import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row align-items-center nav-row">

          <div className="col-4 col-lg-3">
            <a
              href="https://t.me/riwaclub"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-telegram-btn"
            >
              📨 تيليغرام
            </a>
          </div>

          <nav className="col-lg-6 d-none d-lg-block site-nav">
            <ul>
              <li><a href="#about">عنّا</a></li>
              <li><a href="#book-month">كتاب الشهر</a></li>
              <li><a href="#readings">القراءات</a></li>
            </ul>
          </nav>

          <div className="col-8 col-lg-3 d-flex justify-content-end">
            <a href="#" className="site-brand">
              <img src={logo} alt="رواء" />
            </a>
          </div>

        </div>
      </div>
    </header>
  )
}