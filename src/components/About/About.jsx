import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const aboutItems = [
  {
    number: "01",
    title: "لقاء شهري",
    text: "نجتمع كل شهر في جلسة ثقافية حول كتاب مختار.",
    icon: "📅",
  },
  {
    number: "02",
    title: "نقاشات أدبية",
    text: "نفتح حوارًا عميقًا، نتبادل الآراء، ونكتشف زوايا جديدة.",
    icon: "💬",
  },
  {
    number: "03",
    title: "اختيارات متنوعة",
    text: "نختار كتبًا من مجالات مختلفة بين الأدب، الفكر، والتنمية.",
    icon: "📖",
  },
  {
    number: "04",
    title: "مجتمع قارئات",
    text: "مجتمع نسائي يجمعنا حب القراءة وشغف الثقافة.",
    icon: "🤍",
  },
];

export default function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <div className="container">
        <motion.div className="about-header" variants={fadeUp}>
          <span className="section-label">من نحن</span>

          <h2>ما نقدمه في رواء</h2>

          <p>
            تجارب ثقافية تثري القارئة، وتجمعنا حول شغف القراءة والحوار
            واكتشاف الجمال بين الكتب والمعرفة.
          </p>
        </motion.div>

        <motion.div className="about-list" variants={container}>
          {aboutItems.map((item) => (
            <motion.article
              className="about-card"
              key={item.number}
              variants={fadeUp}
            >
              <div className="about-card-icon">{item.icon}</div>

              <div className="about-card-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}