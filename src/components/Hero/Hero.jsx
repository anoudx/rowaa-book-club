import React from 'react'
import illustration from '../../assets/heroBird.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">

        <div className="hero-card">

          <div className="hero-content">
            <span className="hero-kicker">
              Book & Culture Club
            </span>

            <h1 className="hero-title">
              نادي رواء
            </h1>

            <p className="hero-description">
              مساحة هادئة للقراءة والحوار واكتشاف الجمال بين الكتب والثقافة.
              نقرأ معًا، نناقش بعمق، ونصنع من كل لقاء ذاكرة أدبية.
            </p>

            <button className="hero-join-btn">
              انضمي إلينا
            </button>

           <div className="hero-meta">
  <span>لقاء شهري</span>
  <span>مناقشات أدبية</span>
  <span>مجتمع قارئات</span>
</div>
          </div>

          <div className="hero-illustration">
            <div className="hero-particles">
  <span className="p-star star-1">✦</span>
  <span className="p-star star-2">✦</span>
  <span className="p-star star-3">✦</span>
  <span className="p-star star-4">✦</span>
  <span className="p-star star-5">✦</span>
  <span className="p-star star-6">✦</span>
  <span className="p-star star-7">✦</span>

  <span className="p-wind wind-1">〰〰</span>
  <span className="p-wind wind-2">〰〰</span>
  <span className="p-wind wind-3">〰〰</span>

  <span className="p-env env-1">📖</span>
  <span className="p-env env-2">📖</span>
  <span className="p-env env-3">📖</span>
</div>
            <img
              src={illustration}
              alt="Reading Illustration"
              width="1120"
              height="900"
            />
          </div>

        </div>
      </div>
      <div className="hero-scroll">
  <a href="#about" aria-label="Scroll Down">
    ↓
  </a>
</div>
    </section>
  )
}