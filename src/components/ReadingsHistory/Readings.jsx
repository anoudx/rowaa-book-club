import React from 'react'
import readings from '../../data/readings.js'
import './Readings.css'

const monthsOrder = {
  يناير: 1,
  فبراير: 2,
  مارس: 3,
  أبريل: 4,
  مايو: 5,
  يونيو: 6,
  يوليو: 7,
  أغسطس: 8,
  سبتمبر: 9,
  أكتوبر: 10,
  نوفمبر: 11,
  ديسمبر: 12,
}

export default function Readings() {
const sortedBooks = [...readings].sort((a, b) => {
  if (a.year !== b.year) return b.year - a.year
  return monthsOrder[b.month] - monthsOrder[a.month]
})

  return (
    <section className="readings" id="readings">
      <div className="container">
        <div className="readings-header">
          <span>مكتبة رواء</span>
          <h2>القراءات السابقة</h2>
          <p>رحلة النادي بين كتب قرأناها وناقشناها معًا.</p>
        </div>

        <div className="readings-slider">
          {sortedBooks.map((book, index) => {
            const showYear =
              index === 0 || book.year !== sortedBooks[index - 1].year

            return (
              <article key={book.id} className="book-card">
                {showYear && (
                  <span className="book-year-marker">
                    {book.year}
                  </span>
                )}

                <img src={book.cover} alt={book.title} />

                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <span className="book-date">
                    {book.month} {book.year}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}