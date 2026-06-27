import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>رواء</h3>

        <p>
          مساحة هادئة للقراءة والحوار واكتشاف الجمال بين الكتب والثقافة.
        </p>

        <div className="footer-links">
          <a href="#about">من نحن</a>
          <a href="#book">كتاب الشهر</a>
          <a href="#readings">القراءات السابقة</a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Roaa Book Club</span>
      </div>

    </footer>
  )
}