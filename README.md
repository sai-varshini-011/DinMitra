# Dinmitra 🤍

**A calming wellness dashboard, built exclusively for Indian students preparing for competitive exams.**

Dinmitra ("din" = day, "mitra" = friend) offers students preparing for NEET, JEE, and similar high-stakes exams a small set of gentle, low-pressure tools — an AI companion, mood check-ins, a breathing exercise, and kind study habits — all designed to help them feel supported, and to gently see that their worth and future are not defined by a single exam score.

Built for the **Idea2Impact Online Hackathon 2026** — Theme 3: Crisis Management, HealthTech & Emergency Response.

---

## What it does

- **Rotating affirmation card** — tappable, gentle reminders that a student's worth isn't tied to one exam score
- **Mood check-in grid** — quick-tap mood buttons (Anxious, Overwhelmed, Exhausted, Focused, Calm) that open the AI companion with context already in hand
- **AI companion (the functional core)** — a floating chat window powered by a large language model, guided by a custom system prompt to respond like a warm, protective peer rather than a generic chatbot
- **Guided breathing exercise** — a simple visual pacing tool for a quick reset
- **Kind study habits** — short, judgment-free tips for tired minds
- **Safety escalation** — messages indicating serious distress are detected in code (not left to the AI) and immediately met with real, verified helpline numbers (Tele-MANAS, Vandrevala Foundation)

## Tech Stack

- **HTML, CSS, JavaScript** — no frameworks, no backend server
- **[Groq API](https://console.groq.com/)** (Llama 3.3 70B) — powers the AI conversation, called directly from the browser
- **Bootstrap 5** — layout and UI components
- Deployed as a static site on **Vercel**

## Why this approach

The core technical and design contribution of this project is the **system prompt** — the instruction that shapes the AI's persona, tone, and safety behavior (never diagnosing, always validating, escalating to real help when needed). This was chosen deliberately over training a custom model, which isn't realistic or necessary within a hackathon timeframe, allowing full focus on responsible prompt design instead of infrastructure.

## Running it locally

No installation or build steps needed — this is a plain static site.

1. Clone or download this repository
2. Open `index.html` directly in any browser
3. That's it — the AI chat works immediately, no extra setup required

## Live Demo

🔗 **https://din-mitra.vercel.app/** 

## Safety Note

If you or someone you know is in distress, please reach out:
- **Tele-MANAS**: 14416 (free, 24x7)
- **Vandrevala Foundation**: +91 9999 666 555

Dinmitra is designed as a supportive first step — not a replacement for professional mental health care.

---

*Built solo for the online round of Idea2Impact 2026 by [Your Name].*
