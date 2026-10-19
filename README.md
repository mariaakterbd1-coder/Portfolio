# 🌟 Maria Akter - Personal Developer Portfolio

> **CSE Student | Aspiring Software Developer**  
> Daffodil International University (DIU), Department of Computer Science & Engineering

A modern, responsive, and elegant personal developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to see your live portfolio with instant Hot Module Replacement (HMR).

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder ready for deployment on GitHub Pages, Vercel, or Netlify.

---

## 🛠️ How to Update Your Portfolio

All your portfolio content is centralized in **one single file**:  
📁 [`src/data/portfolioData.js`](./src/data/portfolioData.js)

You do **not** need to touch any React JSX or layout components to update your information.

### 1. Adding Your Profile Photo
1. Copy your photo (e.g., `maria.jpg`) into the `public/` folder: `public/maria.jpg`.
2. Open [`src/data/portfolioData.js`](./src/data/portfolioData.js) and update:
   ```javascript
   personalInfo: {
     ...
     profileImage: "/maria.jpg", // Replace null with your photo path
   }
   ```
   *Note: If `profileImage` is `null`, the website automatically displays an elegant developer monogram avatar.*

### 2. Updating Skills
Open [`src/data/portfolioData.js`](./src/data/portfolioData.js) and simply add a new object to the `skills` array:
```javascript
export const skills = [
  // Existing skills (C, Java, Problem Solving) ...
  {
    id: "python",
    name: "Python",
    category: "Languages",
    description: "Writing scripts and exploring basic data analysis and automation.",
    tags: ["Syntax", "Functions", "OOP", "Automation"],
    icon: "Code2",
    badge: "Exploring"
  }
];
```

### 3. Adding Your Real Projects
When you complete a project, add it to the `projects` array in [`src/data/portfolioData.js`](./src/data/portfolioData.js):
```javascript
export const projects = [
  {
    id: "student-record-system",
    title: "Student Record Management System",
    description: "A console application developed in C to handle student grades and persistent file storage.",
    technologies: ["C", "File Handling", "Data Structures"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/maria-akter/student-record-system",
    liveUrl: "", // Optional: leave empty if console app
    status: "Completed"
  }
];
```
*Note: If the `projects` array is empty `[]`, the website automatically shows the friendly empty-state message: "Projects are coming soon! I'm currently working on improving my skills and building new things."*

### 4. Updating Contact Links
Open [`src/data/portfolioData.js`](./src/data/portfolioData.js) and update `contactInfo`:
```javascript
export const contactInfo = {
  heading: "Let's Connect!",
  subheading: "...",
  email: "mariaakterbd1@gmail.com",
  whatsappNumber: "+8801725442000",
  whatsappUrl: "https://wa.me/8801725442000",
  linkedinUrl: "https://www.linkedin.com/in/maria-akter-15616541b/",
  githubUrl: "https://github.com/mariaakterbd1-coder",
  location: "Dhaka, Bangladesh"
};
```

---

## 🎨 Design Highlights
- **Color Palette**: Dark theme with deep obsidian backdrop (`#090a0f`), vibrant purple (`#7c3aed`), indigo, and cyan glow accents.
- **Typography**: Clean, modern typography using Google Fonts (Plus Jakarta Sans & JetBrains Mono).
- **Responsive Layout**: Designed for seamless viewing across smartphones, tablets, and large desktop screens.
- **Interactions**: Smooth scrolling, subtle card hover glow effects, copy-email button with instant feedback, and mobile drawer menu.
