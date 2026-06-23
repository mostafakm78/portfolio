# 🧑‍💻 Mostafa Kamari — Personal Portfolio

My personal portfolio website built with Next.js 14, showcasing production projects, technical skills, and work experience.

🔗 [Visit Site](https://portfolio-immostafakamari.vercel.app)

---

## 📁 Screenshots

> _(Add 2–3 screenshots here: hero section, projects page, mobile view)_
>
> Example:
> | 🏠 Hero | 📂 Projects |
> |---|---|
> | ![Hero](./screenshots/hero.png) | ![Projects](./screenshots/projects.png) |

---

## 🧠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | GSAP |
| Deployment | Vercel |

---

## ⚡ Technical Highlights

- **Performance**: Lighthouse 90+ via Next.js Image optimization, font subsetting, and route-based code splitting
- **Animations**: GSAP-powered scroll and entrance animations for a smooth, non-jarring experience
- **Bilingual**: Supports Persian (fa) and English (en) routing
- **SEO**: Semantic HTML, Open Graph meta tags, and next-sitemap for full crawlability
- **Type-safe**: Strict TypeScript throughout — no `any`, no shortcuts
- **Responsive**: Mobile-first layout, fully functional from 320px to 1440px

---

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/        # Bilingual routing (fa / en)
│   ├── components/      # Reusable UI components
│   └── layout.tsx       # Root layout with metadata
├── data/                # Projects and skills data (JSON)
├── lib/                 # Utility functions
└── public/              # Static assets
```

---

## ⚙️ Setup & Run Locally

```bash
# Clone the repository
git clone https://github.com/mostafakm78/portfolio-immostafakamari.git

# Navigate to project directory
cd portfolio-immostafakamari

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Roadmap

### ✅ Shipped
- [x] Bilingual support (Persian / English)
- [x] GSAP scroll animations
- [x] Projects showcase with live demo links
- [x] Lighthouse 90+ performance score
- [x] Fully responsive design

### 🔜 Upcoming
- [ ] Blog section for dev articles
- [ ] Dark / light mode toggle
- [ ] Contact form with email integration

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🧑‍💻 Author

**Mostafa Kamari** — Frontend Developer · React & Next.js

[GitHub](https://github.com/mostafakm78) · [LinkedIn](https://linkedin.com/in/mostafa-kamari) · [Portfolio](https://portfolio-immostafakamari.vercel.app)
