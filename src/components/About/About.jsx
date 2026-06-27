import React from 'react'
import './About.css'
export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-wrapper">
        <div className="about-content">
          <span className="section-label">من نحن</span>

          <h2>رواء - حيث تتفتح الأفكار</h2>

          <p>
            تأسس نادي رواء عام 2025 بهدف خلق مساحة دافئة وآمنة للقراءة والحوار.
            نؤمن أن الكتاب يثري الإنسان، ويوسّع مداركه، وأن تبادل القراءات
            يضاعف أثرها. نلتقي مرة كل شهر لنناقش كتابًا مختارًا بالتصويت
            المجتمعي، ونتشارك التوصيات ونبني صداقات حقيقية حول الورق والكلمات.
          </p>

          <div className="about-points">
            <div>✓ لقاءات شهرية منتظمة</div>
            <div>✓ تصويت ديمقراطي على الكتب</div>
            <div>✓ قراءات متنوعة وثرية</div>
            <div>✓ مجتمع متفاعل وداعم</div>
          </div>
        </div>

        {/* <div className="about-image">
          <img src={readers} alt="مجتمع قارئات نادي رواء" />
        </div> */}
      </div>
    </section>
  )
}