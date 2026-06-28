import React from 'react'
import iliadCover from '../../assets/books/the-iliad.jpeg'
import './BookMonth.css'

export default function BookMonth() {
  return (
<section className="book-month" id="book-month">
  <div className="container">

    <div className="row align-items-center gy-5">

      <div className="col-lg-5">

        <div className="book-cover">
          <img src={iliadCover} alt="الإلياذة" />
        </div>

      </div>

      {/* Content */}
      <div className="col-lg-7">

 <div className="book-month-content">

  <span className="section-label">
    كتاب الشهر
  </span>

  <h2 className="section-title">
    الإلياذة
  </h2>

  <p className="book-description">
    ملحمة يونانية خالدة تروي أحداث حرب طروادة،
    وتتناول الشجاعة والمجد والإنسان في مواجهة القدر.
  </p>

  <div className="book-meta">
    <span>✍️ هوميروس</span>
    <span>📄 250 صفحة</span>
    <span>📅 يوليو 2026</span>
  </div>

</div>

      </div>

    </div>

  </div>
</section>
  )}