import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Wordpress } from "@/components/ui/svgs/wordpress";
import { Php } from "@/components/ui/svgs/php";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Sass } from "@/components/ui/svgs/sass";
import { Html5 } from "@/components/ui/svgs/html5";
import { Css3 } from "@/components/ui/svgs/css3";
import { Git } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Truong Ngoc",
  initials: "TN",
  url: "https://portfolio-cv.vercel.app",
  location: "Ha Noi, Vietnam",
  locationLink: "https://maps.google.com/?q=Hanoi,Vietnam",
  description:
    "WordPress & Frontend Developer specializing in Gutenberg, React, and modern web development.",
  summary:
    "I'm a WordPress Developer with over 4 years of experience building premium themes, plugins, and Gutenberg blocks. I have contributed to products used by tens of thousands of websites worldwide, including Eduma, LearnPress, Thim Elementor Kit, Thim Blocks, and several WordPress block themes. My expertise includes PHP, JavaScript, React, Gutenberg Block API, Tailwind CSS, and Next.js. I'm passionate about creating high-quality, scalable, and user-friendly web experiences while continuously learning modern frontend technologies.",
  avatarUrl: "/me.png",
  skills: [
  { name: "WordPress", icon: Wordpress },
  { name: "PHP", icon: Php },
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "React", icon: ReactLight },
  { name: "Next.js", icon: NextjsIconDark },
  { name: "Tailwind CSS", icon: Tailwindcss },
  { name: "SCSS", icon: Sass },
  { name: "HTML5", icon: Html5 },
  { name: "CSS3", icon: Css3 },
  { name: "Git", icon: Git },
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ngoctruong1902@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ngoctruongbi1902",
        icon: Icons.github,
        navbar: true,
      },

      Facebook: {
        name: "Facebook",
        url: "http://facebook.com/gun.latao/",
        icon: Icons.facebook,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AHT Tech",
      href: "https://www.arrowhitech.com/",
      badges: [],
      location: "On-site",
      title: "Intern and Fresher WordPress Developer",
      logoUrl: "/aht.png",
      start: "May 2021",
      end: "May 2022",
      description:
        "Started as a WordPress Intern and was promoted to Fresher WordPress Developer. Developed and maintained premium WordPress themes and plugins, customized WooCommerce websites, built responsive pages from Figma designs, and optimized performance. Worked with PHP, JavaScript, HTML, CSS, MySQL, Git, and collaborated with designers and QA in an Agile development environment.",
    },
    {
      company: "PhysCode",
      badges: [],
      href: "https://thimpress.com",
      location: "On-site",
      title: "WordPress Full Stack Developer",
      logoUrl: "/thimpress.jpeg",
      start: "June 2022",
      end: "Now",
      description:
        "Develop and maintain premium WordPress themes and plugins, delivering scalable solutions for tens of thousands of users worldwide. Build custom Gutenberg blocks with React, develop PHP backend features, customize WooCommerce and LearnPress, optimize performance, and resolve complex bugs. Collaborate with cross-functional teams using Git and Agile methodologies to deliver high-quality products.",
    },
  ],
  education: [
    {
      school: "PTIT",
      href: "https://ptit.edu.vn/",
      degree: "Bachelor of Information Technology",
      logoUrl: "/ptit.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Eduma - Education WordPress Theme",
      href: "https://eduma.thimpress.com",
      dates: "June 2022 - Present",
      active: true,
      description:
        "Contributed to the development and maintenance of Eduma, one of the best-selling Education WordPress themes on ThemeForest with tens of thousands of customers worldwide. Built and optimized LMS features powered by LearnPress, developed new UI components, improved performance, fixed bugs, ensured compatibility with Elementor and Gutenberg, and collaborated with the team to deliver new releases.",
      technologies: [
        "PHP",
        "WordPress",
        "LearnPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
        "MySQL",
        "Gulp",
        "Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://eduma.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://1.envato.market/Yx2YR",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/eduma-preview.jpg",
      video: "",
    },
    {
      title: "Coaching - Life & Business Coach WordPress Theme",
      href: "https://coaching.thimpress.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Contributed to the development and maintenance of Coaching WP, a premium WordPress theme for life coaches, business coaches, speakers, mentors, and trainers. Implemented new UI components, built LearnPress course and event features, improved Elementor compatibility, fixed bugs, and delivered theme updates.",
      technologies: [
        "PHP",
        "WordPress",
        "LearnPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
        "MySQL",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://coaching.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://1.envato.market/Xq2Ra",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coaching-preview.jpg",
      video: "",
    },
    {
      title: "Course Builder - LMS WordPress Theme",
      href: "https://coursebuilder.thimpress.com",
      dates: "June 2022 - Present",
      active: true,
      description:
        "Contributed to Course Builder, a high-quality LMS WordPress theme built for corporate training, multisite businesses, and online education platforms. Developed new Gutenberg blocks and Elementor widgets, extended LearnPress integrations, improved performance, and resolved cross-browser compatibility issues.",
      technologies: [
        "PHP",
        "WordPress",
        "LearnPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
        "MySQL",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://coursebuilder.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://1.envato.market/13Zkd",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/course-builder-preview.jpg",
      video: "",
    },
    {
      title: "StarKid - Kindergarten WordPress Theme",
      href: "https://starkid.thimpress.com",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Contributed to StarKid, a modern responsive WordPress theme designed for kindergartens, nurseries, daycares, and children's education centers. Built dedicated pages for meal menus, bus schedules, programs, and admissions. Implemented child-friendly UI components, improved mobile responsiveness, and delivered new feature releases.",
      technologies: [
        "PHP",
        "WordPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
        "MySQL",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://starkid.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://1.envato.market/oWov9",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/starkid-preview.jpg",
      video: "",
    },
    {
      title: "Sailing - Hotel WordPress Theme",
      href: "https://sailing.thimpress.com",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Contributed to Sailing, a premium WordPress theme for hotels, hostels, resorts, and accommodation services with an online reservation system. Developed booking features, customized room management pages, improved WooCommerce integration, fixed UI bugs, and optimized performance across devices.",
      technologies: [
        "PHP",
        "WordPress",
        "Elementor",
        "JavaScript",
        "HTML",
        "SCSS",
        "MySQL",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://sailing.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://1.envato.market/G5Rkk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sailing-preview.png",
      video: "",
    },
    {
      title: "LearnPress - WordPress LMS Plugin",
      href: "https://thimpress.com/learnpress/",
      dates: "June 2022 - Present",
      active: true,
      description:
        "Contributed to LearnPress, a comprehensive free WordPress LMS plugin by ThimPress with over 100,000+ active installations worldwide. Developed new features for course management, quizzes, and lessons, built premium add-ons (WooCommerce payments, certificates, assignments), improved Gutenberg block integration, fixed bugs, and maintained backward compatibility across major WordPress releases.",
      technologies: [
        "PHP",
        "WordPress",
        "JavaScript",
        "React",
        "Gutenberg",
        "HTML",
        "SCSS",
        "MySQL",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://learnpresslms.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://wordpress.org/plugins/learnpress/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/learnpress-preview.gif",
      video: "",
    },
    {
      title: "Thim Blocks - Gutenberg Blocks Plugin",
      href: "https://wordpress.org/plugins/thim-blocks/",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Contributed to Thim Blocks, a free WordPress Gutenberg plugin by ThimPress providing a library of customizable blocks for building modern pages without heavy page builders. Developed new custom blocks using React and the Gutenberg Block API, maintained compatibility with WordPress core updates, improved block performance, and ensured seamless integration with LearnPress and ThimPress themes.",
      technologies: [
        "PHP",
        "WordPress",
        "JavaScript",
        "React",
        "Gutenberg",
        "HTML",
        "SCSS",
        "Git",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ngoctruongbi1902/thim-block",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thim-blocks-preview.jpg",
      video: "",
    },
    {
      title: "Online Learning - Free WordPress Block Theme",
      href: "https://wordpress.org/themes/online-learning/",
      dates: "2025 - 2025",
      active: true,
      description:
        "Developed and published Online Learning, a free WordPress block theme by ThimPress on WordPress.org. Built with Full Site Editing (FSE), designed for solo instructors, coaches, and educational institutions to create and sell online courses. Focused on lightweight code, mobile-first design, LearnPress integration, and high performance for better SEO rankings.",
      technologies: [
        "WordPress",
        "Gutenberg",
        "Full Site Editing",
        "LearnPress",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://onlinelearning.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ngoctruongbi1902/block-theme-online-learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/online-learning-preview.webp",
      video: "",
    },
    {
      title: "Coaching Center - Free WordPress Block Theme",
      href: "https://wordpress.org/themes/coaching-center/",
      dates: "2026 - 2026",
      active: true,
      description:
        "Developed and published Coaching Center, a free WordPress block theme by ThimPress on WordPress.org. Built with Full Site Editing (FSE) for coaches, consultants, and educators. Maintained a lightweight structure for high performance, integrated LearnPress course features, and ensured full compatibility with the WordPress block editor.",
      technologies: [
        "WordPress",
        "Gutenberg",
        "Full Site Editing",
        "LearnPress",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://coachingcenter.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ngoctruongbi1902/block-theme-coaching-center",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/coaching-center-preview.webp",
      video: "",
    },
  ],
} as const;
