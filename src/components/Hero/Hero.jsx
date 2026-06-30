import React from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

import illustration from "../../assets/heroBird.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-card">
          <motion.div
            className="hero-illustration"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="hero-particles">
              <span className="p-star star-1">✦</span>
              <span className="p-star star-2">✦</span>
              <span className="p-star star-3">✦</span>
              <span className="p-star star-4">✦</span>
              <span className="p-star star-5">✦</span>
              <span className="p-wind wind-1">〰〰</span>
              <span className="p-wind wind-2">〰〰</span>
              <span className="p-env env-1">✉</span>
              <span className="p-env env-2">✉</span>
              <span className="p-book book-1">▱</span>
            </div>

            <img src={illustration} alt="Roaa Bird" />
          </motion.div>

          <div className="hero-content">
            <motion.span
              className="hero-kicker"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <Mail size={18} />
              Book & Culture Club
            </motion.span>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            >
              نادي رواء
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            >
              مساحة هادئة للقراءة والحوار واكتشاف الجمال بين الكتب والثقافة.
              نقرأ معًا، نناقش بعمق، ونصنع من كل لقاء ذاكرة أدبية.
            </motion.p>
<motion.a
  href="https://t.me/riwaclub"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-join-btn"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.68, duration: 0.6 }}
>
  <Send size={20} />
  <span>انضمي عبر تيليجرام</span>
</motion.a>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <a href="#about" aria-label="Scroll Down">
          ↓
        </a>
      </div>
    </section>
  );
}