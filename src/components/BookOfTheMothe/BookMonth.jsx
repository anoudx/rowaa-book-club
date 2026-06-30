import React from "react";
import iliadCover from "../../assets/books/the-iliad.jpeg";
import "./BookMonth.css";

export default function BookMonth() {
  return (
    <section className="book-month" id="book-month">
      <div className="container">

        <div className="book-month-card">

          <div className="book-cover">
            <img src={iliadCover} alt="غلاف كتاب الإلياذة" />
          </div>

          <div className="book-month-content">

            <span className="section-label">
              كتاب الشهر
            </span>

            <h2>
              الإلياذة
            </h2>

            <p className="book-description">
              ملحمة يونانية خالدة تروي أحداث حرب طروادة، وتستكشف معاني
              الشجاعة، والمجد، والقدر، في واحدة من أشهر الملاحم الأدبية
              في التاريخ.
            </p>

            <div className="book-meta">
              <span>هوميروس</span>
              <span>250 صفحة</span>
              <span>يوليو 2026</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}