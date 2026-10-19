/**
 * ==============================================================================
 * PORTFOLIO CONFIGURATION FILE - MARIA AKTER
 * ==============================================================================
 * 
 * HOW TO UPDATE YOUR PORTFOLIO:
 * 1. Personal Info: Edit the values under `personalInfo` (name, bio, university, etc.).
 * 2. Profile Photo:
 *    - Place your photo (e.g., `maria.jpg` or `profile.jpg`) into the `public/` folder.
 *    - Update `profileImage: "/maria.jpg"` below.
 *    - Leave it as `null` or `""` to display the elegant gradient avatar placeholder.
 * 3. Skills: Add, edit, or remove items in the `skills` array.
 * 4. Projects: Add new project objects to the `projects` array.
 *    - When the array is empty `[]`, a friendly empty state is displayed automatically.
 * 5. Contact Info: Update your actual WhatsApp, LinkedIn, GitHub, and email in `contactInfo`.
 * ==============================================================================
 */

export const personalInfo = {
  name: "Maria Akter",
  role: "CSE Student | Aspiring Software Developer",
  headline: "Aspiring Software Developer",
  department: "Computer Science and Engineering (CSE)",
  university: "Daffodil International University",
  location: "Dhaka, Bangladesh",
  greeting: "Hello, I'm",
  
  // Hero section short introduction
  heroIntro:
    "I'm a Computer Science and Engineering student at Daffodil International University, passionate about programming, problem-solving, and exploring new technologies.",

  // Profile Picture Path:
  profileImage: "/maria-akter.jpg",

  // About Me section detailed introduction
  aboutMe: {
    badge: "About Maria",
    title: "Dedicated CSE Student & Problem Solver",
    paragraphs: [
      "I am an undergraduate student pursuing my Bachelor of Science in Computer Science and Engineering (CSE) at Daffodil International University. From the very beginning of my academic journey, I found a strong fascination with how logic and structured thinking transform into powerful software solutions.",
      "My primary areas of focus right now are mastering the fundamentals of C Programming, Object-Oriented Programming with Java, and rigorous Problem Solving. I enjoy breaking down complex algorithmic problems into clean, modular, and efficient code.",
      "As an aspiring software developer, I believe in consistent learning, curiosity, and hands-on practice. I am continuously exploring modern development paradigms and preparing myself to build impactful, real-world applications that solve genuine problems."
    ],
    highlights: [
      {
        icon: "GraduationCap",
        title: "University",
        value: "Daffodil International University",
        subtext: "B.Sc. in Computer Science & Engineering"
      },
      {
        icon: "Code2",
        title: "Core Technologies",
        value: "C & Java",
        subtext: "Procedural & Object-Oriented paradigms"
      },
      {
        icon: "BrainCircuit",
        title: "Core Focus",
        value: "Problem Solving",
        subtext: "Logical reasoning & algorithmic practice"
      },
      {
        icon: "Sparkles",
        title: "Mindset",
        value: "Continuous Growth",
        subtext: "Curious, disciplined & always learning"
      }
    ]
  }
};

/**
 * ==============================================================================
 * SKILLS DATA
 * ==============================================================================
 * To add a new skill:
 * Copy one of the objects below, update its values, and add it to the array.
 * Supported icons from Lucide: "Code2", "Coffee", "Brain", "Database", "Terminal", "GitBranch", "Layers", etc.
 */
export const skills = [
  {
    id: "c-programming",
    name: "C Programming",
    category: "Core Language",
    description: "Deep dive into procedural programming, memory addresses, pointers, arrays, structures, and low-level computational logic.",
    tags: ["Pointers", "Memory Management", "Data Types", "Functions", "Structures"],
    icon: "Code2",
    badge: "Foundation"
  },
  {
    id: "java",
    name: "Java",
    category: "Object-Oriented Programming",
    description: "Building structured and scalable code utilizing core OOP principles including encapsulation, inheritance, polymorphism, and abstraction.",
    tags: ["OOP Concepts", "Classes & Objects", "Inheritance", "Polymorphism", "Exception Handling"],
    icon: "Coffee",
    badge: "Object-Oriented"
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "Algorithmic Thinking",
    description: "Developing sharp analytical skills, designing efficient step-by-step algorithms, and tackling programming challenges with clean logic.",
    tags: ["Algorithm Design", "Pattern Recognition", "Edge Cases", "Analytical Reasoning", "Flowcharts"],
    icon: "Brain",
    badge: "Core Discipline"
  }
];

/**
 * ==============================================================================
 * PROJECTS DATA
 * ==============================================================================
 * Per your instruction: Keep this array empty [] initially.
 * A friendly empty-state message will be shown to your visitors.
 * 
 * When you are ready to add your real projects, simply add project objects here!
 * Template example provided below.
 */
export const projects = [];

/**
 * Sample template for reference when you want to add projects in the future:
 * 
export const sampleProjectTemplate = {
  id: "student-record-system",
  title: "Student Record Management System",
  description: "A robust console application built in C to store, search, update, and manage student grades and academic records using structured file handling.",
  technologies: ["C", "File I/O", "Data Structures"],
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
  githubUrl: "https://github.com/your-username/student-record-system",
  liveUrl: "", // Optional: leave empty if not deployed
  status: "Completed"
};
*/

/**
 * ==============================================================================
 * CONTACT & SOCIAL INFORMATION
 * ==============================================================================
 * EDIT THESE PLACEHOLDERS with your real links and email!
 */
export const contactInfo = {
  heading: "Let's Connect!",
  subheading: "Whether you want to discuss a project, share programming advice, or simply connect, my inbox is always open.",
  
  // Replace with your real email address
  email: "maria.cse@example.com",
  
  // Replace with your real WhatsApp number or WhatsApp direct link
  whatsappNumber: "+880 1XXX-XXXXXX",
  whatsappUrl: "https://wa.me/8801XXXXXXXXX",
  
  // Replace with your LinkedIn profile URL
  linkedinUrl: "https://www.linkedin.com/in/maria-akter",
  
  // Replace with your GitHub profile URL
  githubUrl: "https://github.com/mariaakterbd1-coder",

  // Location details
  location: "Dhaka, Bangladesh",
  availabilityText: "Open to learning opportunities, mentoring, and academic collaborations."
};

/**
 * Navigation Links for Header & Footer
 */
export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
