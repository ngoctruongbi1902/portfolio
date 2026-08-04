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
  url: "https://ngoctruong-portfolio.vercel.app",
  location: "Ha Noi, Vietnam",
  locationLink: "https://maps.google.com/?q=Hanoi,Vietnam",
  openGraph: {
    images: ["/portfolio-preview.png"],
  },
  description:
    "WordPress Developer specializing in custom Themes, Plugins, Gutenberg Blocks, Elementor, Flatsome customization, and scalable website solutions.",
  summary:
    "I'm a WordPress Developer with over 4 years of experience developing custom themes, plugins, and scalable WordPress solutions. I have contributed to premium products used on tens of thousands of websites worldwide, including Eduma, Coaching, Sailing, LearnPress, Thim Elementor Kit, Thim Blocks, and several WordPress block themes. My technical expertise includes PHP, JavaScript, React, the Gutenberg Block API, Elementor, Tailwind CSS, and Next.js. I enjoy building performant, maintainable, and user-focused solutions while continuously expanding my knowledge of modern WordPress and frontend technologies.",
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
        "Contributed to Eduma, one of the best-selling Education WordPress themes on ThemeForest. Built LMS features with LearnPress, developed UI components, fixed bugs, and ensured compatibility with Elementor and Gutenberg.",
      technologies: [
        "PHP",
        "WordPress",
        "LearnPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
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
        "Contributed to Coaching WP, a premium WordPress theme for coaches and trainers. Implemented UI components, built LearnPress course features, improved Elementor compatibility, and delivered theme updates.",
      technologies: [
        "PHP",
        "WordPress",
        "LearnPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
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
      title: "StarKid - Kindergarten WordPress Theme",
      href: "https://starkid.thimpress.com",
      dates: "Dec 2024",
      active: true,
      description:
        "Contributed to StarKid, a WordPress theme for kindergartens and education centers. Built pages for meal menus, bus schedules, and admissions, implemented UI components, and improved mobile responsiveness.",
      technologies: [
        "PHP",
        "WordPress",
        "JavaScript",
        "Elementor",
        "HTML",
        "SCSS",
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
      title: "EduPress - Free Education WordPress Theme",
      href: "https://edupress.thimpress.com",
      dates: "May 2023",
      active: true,
      description:
        "Built EduPress, a free starter WordPress theme by ThimPress designed for LearnPress users. Developed the full frontend and theme architecture, providing a lightweight and ready-to-use base for education websites.",
      technologies: [
        "PHP",
        "WordPress",
        "LearnPress",
        "JavaScript",
        "HTML",
        "SCSS",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://edupress.thimpress.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/edupress-preview.jpg",
      video: "",
    },
    {
      title: "Sailing - Hotel WordPress Theme",
      href: "https://sailing.thimpress.com",
      dates: "Aug 2024 - Present",
      active: true,
      description:
        "Contributed to Sailing, a premium WordPress theme for hotels and resorts with an online reservation system. Developed booking features, customized room management pages, and improved WooCommerce integration.",
      technologies: [
        "PHP",
        "WordPress",
        "Elementor",
        "JavaScript",
        "HTML",
        "SCSS",
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
      title: "LearnPress LMS",
      href: "https://learnpresslms.com",
      dates: "Nov 2025",
      active: true,
      description:
        "Developed a dedicated WordPress theme for learnpresslms.com, the official showcase site for the LearnPress plugin and its add-ons. Built custom pages to highlight plugin features, pricing, and integrations.",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "Blocks",
        "HTML",
        "SCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://learnpresslms.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/learnpresslms-preview.jpeg",
      video: "",
    },
    {
      title: "LearnPress - WordPress LMS Plugin",
      href: "https://thimpress.com/learnpress/",
      dates: "Sep 2023 - Present",
      active: true,
      description:
        "Contributed to LearnPress, a free WordPress LMS plugin with 100,000+ active installations. Developed course management features, quizzes, built premium add-ons, improved Gutenberg integration, and maintained backward compatibility.",
      technologies: [
        "PHP",
        "WordPress",
        "JavaScript",
        "React",
      ],
      links: [
        {
          type: "Source",
          href: "https://wordpress.org/plugins/learnpress/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/learnpress-preview.jpg",
      video: "",
    },
    {
      title: "Thim Elementor Kit",
      href: "https://wordpress.org/plugins/thim-elementor-kit/",
      dates: "Mar 2023 - Present",
      active: true,
      description:
        "Contributed to Thim Elementor Kit, a free WordPress plugin by ThimPress providing custom Elementor widgets. Developed and maintained widgets for course listings, instructor profiles, and LearnPress integrations used across multiple ThimPress themes.",
      technologies: [
        "PHP",
        "Elementor",
        "JavaScript",
        "React",
        "SCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://wordpress.org/plugins/thim-elementor-kit/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thim-ekit-preview.jpg",
      video: "",
    },
    {
      title: "Thim Blocks - Gutenberg Blocks Plugin",
      href: "https://wordpress.org/plugins/thim-blocks/",
      dates: "Nov 2025 - Present",
      active: true,
      description:
        "Contributed to Thim Blocks, a free Gutenberg plugin by ThimPress for building modern pages without heavy page builders. Developed custom blocks with React and the Block API, maintained WordPress core compatibility, and integrated with LearnPress.",
      technologies: [
        "PHP",
        "WordPress",
        "JavaScript",
        "React",
        "Gutenberg",
      ],
      links: [
        {
          type: "Source",
          href: "https://wordpress.org/plugins/thim-blocks/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thim-blocks-preview.jpg",
      video: "",
    },
    {
      title: "Online Learning - Free WordPress Block Theme",
      href: "https://wordpress.org/themes/online-learning/",
      dates: "Nov 2025",
      active: true,
      description:
        "Developed and published Online Learning, a free WordPress block theme on WordPress.org. Built with Full Site Editing (FSE) for instructors and educators, focused on lightweight code, mobile-first design, and LearnPress integration.",
      technologies: [
        "WordPress",
        "Full Site Editing",
        "LearnPress",
        "PHP",
        "JavaScript",
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
      title: "Seoulive",
      href: "https://seoulive.ae",
      dates: "Dec 2025",
      active: true,
      description:
        "Developed the frontend for Seoulive, a website based in the UAE. Built responsive UI components and delivered a polished user experience across devices.",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://seoulive.ae",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/seoulive-preview.jpeg",
      video: "",
    },
    {
      title: "KinSim",
      href: "https://kinsim.com",
      dates: "2025",
      active: true,
      description:
        "Developed the frontend for KinSim, building responsive UI components and ensuring a consistent user experience across all screen sizes.",
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://kinsim.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kinsim-preview.jpeg",
      video: "",
    },
    {
      title: "Coaching Center - Free WordPress Block Theme",
      href: "https://wordpress.org/themes/coaching-center/",
      dates: "Jan 2026",
      active: true,
      description:
        "Developed and published Coaching Center, a free WordPress block theme on WordPress.org. Built with Full Site Editing (FSE) for coaches and consultants, with LearnPress integration and full block editor compatibility.",
      technologies: [
        "WordPress",
        "Full Site Editing",
        "LearnPress",
        "PHP",
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
