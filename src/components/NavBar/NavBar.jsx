import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.css'

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-container">
<a
  href="https://t.me/riwaclub"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  تيليغرام
</a>

        <nav className="site-nav" aria-label="القائمة الرئيسية">
          <ul>
            <li>
              <a href="#about">عنّا</a>
            </li>

            <li>
              <a href="#book-month">كتاب الشهر</a>
            </li>

            <li>
              <a href="#readings">القراءات</a>
            </li>
          </ul>
        </nav>

        <div className="site-brand">
          <a href="#">
            <img src={logo} alt="رواء" />
          </a>
        </div>

      </div>
    </header>
  )
}