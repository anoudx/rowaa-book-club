import React from 'react'
import './AnnouncementBar.css'
export default function AnnouncementBar() {
  const text = 'الجلسة القادمة: الإلياذة — 28 يونيو 2026 — الساعة 8:00 مساءً'

  return (
    <div className="announcement-bar" role="region" aria-label="إعلان الجلسة القادمة">
      <div className="announcement-marquee">
        <div className="announcement-track">
          {Array.from({ length: 6 }).map((_, index) => (
            <span className="announcement-item" key={index}>
              <span>📖</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}