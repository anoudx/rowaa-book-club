import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="section-label">من نحن</span>

            <h2>
              مساحة للقراءة والحوار
            </h2>

            <p>
              رواء نادي كتاب وثقافة يجمع القارئات في مساحة هادئة للنقاش،
              وتبادل الأفكار، واكتشاف الجمال بين الكتب والمعرفة.
            </p>
          </div>
        </div>

        <div className="row g-3 mt-5 justify-content-center about-points">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-point">لقاء شهري</div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-point">نقاشات أدبية</div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-point">اختيارات متنوعة</div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="about-point">مجتمع قارئات</div>
          </div>
        </div>

      </div>
    </section>
  )
}