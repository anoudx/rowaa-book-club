import React from 'react'
import iliadCover from '../../assets/books/the-iliad.jpeg'
import './BookMonth.css'

export default function BookMonth() {
  return (
<section className="book-month" id="book-month">
  <div className="container">

    <div className="book-month-wrapper">

      <div className="book-cover">
        <img src={iliadCover} alt="الإلياذة" />
      </div>

      <div className="book-month-content">

        <span className="book-label">
          كتاب الشهر — يونيو 2026
        </span>

        <h2>الإلياذة</h2>

        <p className="book-month-author">
          هوميروس
        </p>

        <p className="book-description">
          ملحمة يونانية خالدة تُعد من أقدم الأعمال الأدبية في التاريخ،
          تروي أحداث حرب طروادة من خلال شخصياتها الأسطورية وصراعاتها الإنسانية،
          وتطرح أسئلة عن البطولة والشرف والغضب والمصير.
        </p>

      <div className="book-month-info">
  <div>
    <span>النوع</span>
    <strong>ملحمة شعرية</strong>
  </div>

  <div>
    <span>الأصل</span>
    <strong>اليونان القديمة</strong>
  </div>

  <div>
    <span>الموضوع</span>
    <strong>البطولة والمصير</strong>
  </div>
</div>

      </div>

    </div>

  </div>
</section>
  )}