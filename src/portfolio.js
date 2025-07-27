/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pradhumna's Portfolio",
  description:
    "Graduate Research Assistant at Carnegie Mellon University specializing in Machine Learning, Computer Vision, and Deep Learning. Passionate about developing scalable AI solutions and conducting cutting-edge research in multimodal systems.",
  og: {
    title: "Pradhumna Guruprasad Portfolio",
    type: "website",
    url: "https://theghoul27.github.io/MyPortfolio/",
  },
};

//Home Page
const greeting = {
  title: "Pradhumna Guruprasad",
  logo_name: "PradhumnaGuruprasad",
  nickname: "Pradhumna",
  subTitle:
    "A Graduate Research Assistant at Carnegie Mellon University specializing in Machine Learning, Computer Vision, and Deep Learning. Passionate about developing scalable AI solutions and conducting cutting-edge research in multimodal systems.",
  resumeLink:
    "https://drive.google.com/file/d/1ZGugHby9kPjl4DuuCs28kmA2F11zcb6l/view?usp=sharing",
  portfolio_repository: "https://github.com/TheGhoul27/MyPortfolio",
  githubProfile: "https://github.com/TheGhoul27",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/TheGhoul27",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pradhumnaguruprasad/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*{
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },*/
  {
    name: "Gmail",
    link: "mailto:pgurupra@andrew.cmu.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/PradhumnaGP",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pradhumna.guruprasad/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_.pradhumna._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with Computer Vision, NLP, and Time Series Analysis projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and multimodal machine learning",
        "⚡ Building robust VAE architectures and generative models for missing modality handling",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and modern JavaScript frameworks",
        "⚡ Developing cross platform applications using Electron Js, Flask, and FastAPI",
        "⚡ Creating scalable backend systems with real-time monitoring using Prometheus and Grafana",
        "⚡ Implementing CI/CD pipelines with Docker and containerized workflows",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Electron Js",
          fontAwesomeClassname: "simple-icons:electron",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms including AWS and Google Cloud",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices and real-time applications",
        "⚡ Setting up CI/CD workflows and monitoring with Prometheus and Grafana",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    /* {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    }, */
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/TheGhoulPaddu",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/theghoul27",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/Pradhumna27",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@guruprasadpradhumna",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/pradhumnaguruprasad",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Carnegie Mellon University, Pittsburgh, Pennsylvania, USA",
      subtitle: "Master of Science in Electrical and Computer Engineering",
      logo_path: "cmu.png",
      alt_name: "Carnegie Mellon University, Pittsburgh",
      duration: "January, 2024 - December, 2025 (Expected)",
      descriptions: [
        "⚡ GPA: 3.96/4.0 - Currently pursuing advanced studies in deep learning and machine learning systems",
        "⚡ Coursework: Introduction to Deep Learning, Machine Learning in Production, Embedded Deep Learning, Multimodal Machine Learning, Deep Generative Modeling",
        "⚡ Inducted into IEEE-Eta Kappa Nu (Sigma Chapter) for academic and leadership excellence (April 2025)",
      ],
      website_link: "https://www.cmu.edu/",
    },
    {
      title: "Tampere University, Tampere, Finland",
      subtitle: "International Exchange Scholar",
      logo_path: "tampere.png",
      alt_name: "Tampere Institute of Technology, Tampere",
      duration: "January, 2023 - May, 2023",
      descriptions: [
        "⚡ GPA: 5.0/5.0 - Studied advanced computer vision and machine learning techniques",
        "⚡ Coursework: Artificial Intelligence, Computer Vision, Deep Learning for Visual Computing, Machine Learning",
      ],
      website_link: "https://www.tuni.fi/en",
    },
    {
      title: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu, India",
      subtitle: "Bachelor of Technology in Electrical and Computer Engineering",
      logo_path: "amrita.png",
      alt_name: "Amrita School of Engineering, Ettimadai",
      duration: "July, 2019 - June, 2023",
      descriptions: [
        "⚡ GPA: 9.14/10.0 - Graduated with Distinction and awarded Gold Medal for academic excellence",
        "⚡ Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Architecture, Artificial Intelligence",
        "⚡ Conducted cutting-edge research in deep learning, computer vision, and signal processing",
      ],
      website_link: "https://amrita.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    /* {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    }, */
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/AH5DM7KE5GJ7",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Mathematics for Machine Learning",
      subtitle: "- David Dye",
      logo_path: "imperial.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2XJAL8Z8ACWM",
      alt_name: "Imperial College London",
      color_code: "#FFFFFF",
    },
    /* {
      title: "",
      subtitle: "",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "",
    }, */
    {
      title: "Full-Stack Web Development with React",
      subtitle: "- Jogesh K. Muppala",
      logo_path: "Hongkong.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8Y67P7QYFV4T",
      alt_name: "The Hong Kong University of Science and Technology",
      color_code: "#FFFFFF",
    },
    {
      title: "Google IT Automation with Python Professional Certificate",
      subtitle: "- Google Career Certificates",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VQ9LMNSTTSJP",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "An Introduction to Programming the Internet of Things (IOT) Specialization",
      subtitle: "- Ian Harris",
      logo_path: "uci.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z8CZNVCF7HLD",
      alt_name: "University of California, Irvine",
      color_code: "#FFFFFF",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/M3SWWAZ245YQ",
      alt_name: "University of Michigan",
      color_code: "#00274C",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "- Alexander S. Kulikov",
      logo_path: "ucsd.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/728Y4B2QZJQK",
      alt_name: "University of California San Diego, HSE University",
      color_code: "#FFFFFF",
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      subtitle: "- Yaakov Chaikin",
      logo_path: "johns.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/T9CJTV5TN8RB",
      alt_name: "Johns Hopkins University",
      color_code: "#FFFFFF",
    },
    {
      title: "Julia Scientific Programming",
      subtitle: "- Juan H klopper",
      logo_path: "capetown.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/JYRBKLWG5HDV",
      alt_name: "University of Cape Town",
      color_code: "#FFFFFF",
    },
    {
      title: "Kotlin for Java Developers",
      subtitle: "- Andrey Breslav",
      logo_path: "jetbrains.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/certificate/HCCSBSJA4Y4X",
      alt_name: "JetBrains",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Research",
  description:
    "I have extensive experience as a Graduate Research Assistant at Carnegie Mellon University, working on cutting-edge AI and computer vision projects. My background spans machine learning engineering, data science, and full-stack development across healthcare, biotechnology, and enterprise applications. I'm passionate about developing scalable AI solutions that bridge the gap between research and real-world deployment.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Graduate Research Assistant",
          company: "Carnegie Mellon University",
          company_url: "https://www.cmu.edu/",
          logo_path: "cmu.png",
          duration: "February 2024 - Present",
          location: "Pittsburgh, PA, USA",
          description:
            "Leading multiple high-impact research projects in computer vision, augmented reality, and AI systems at one of the world's top research institutions. Successfully designed and deployed a comprehensive lab inventory management application that efficiently tracks over 500+ components and devices across multiple research teams, achieving an impressive 70% reduction in component retrieval time while dramatically improving stock visibility and resource allocation. Developed two sophisticated AR prototypes using cutting-edge AR glasses technology: the first prototype enables real-time retail product identification with seamless metadata overlay at sub-2-second latency, while the second features advanced face recognition capabilities through optimized local embedding lookup systems. Architected and implemented an end-to-end real-time face detection and recognition pipeline specifically optimized for humanoid robot applications, successfully reducing processing latency by 50% while maintaining consistent 30 fps performance during live demonstrations and public showcases. Currently spearheading the development of advanced super-resolution models that combine RUNet architecture with Generative Adversarial Networks (GANs), conducting comprehensive ablation studies and experiments to guide future multi-domain super-resolution research initiatives and establish new benchmarks in the field.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Engineer",
          company: "iMedrix Systems Pvt. Ltd.",
          company_url: "https://imedrix.com/",
          logo_path: "imedrix.jpeg",
          duration: "July 2023 - October 2023",
          location: "Bangalore, KA, India",
          description:
            "Spearheaded the development of innovative machine learning solutions for next-generation healthcare applications, focusing on non-invasive vital sign monitoring technologies. Successfully implemented robust and scalable TensorFlow pipelines specifically designed for real-time blood pressure prediction using advanced Photoplethysmography (PPG) data analysis, significantly improving both model inference latency and system scalability for clinical deployment scenarios. Engineered and optimized four sophisticated signal-extraction algorithms tailored for processing and analyzing over 1,000+ high-quality PPG signals, substantially enriching the dataset quality and feature representation for complex supervised learning tasks. Designed, developed, and fine-tuned seven state-of-the-art deep learning models incorporating advanced attention mechanisms and novel architectural components, with the best-performing model achieving exceptional Mean Absolute Errors of 4.64 mmHg for Systolic Blood Pressure (SBP) and 2.18 mmHg for Diastolic Blood Pressure (DBP), surpassing industry benchmarks and enabling more accurate, reliable non-invasive blood pressure monitoring for clinical applications.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Engineer Intern",
          company: "iMedrix Systems Pvt. Ltd.",
          company_url: "https://imedrix.com/",
          logo_path: "imedrix.jpeg",
          duration: "September 2022 - June 2023",
          location: "Bangalore, KA, India",
          description:
            "Conducted extensive research and development in biomedical signal processing and machine learning applications for healthcare technology. Systematically processed and analyzed over 1,000+ high-quality Photoplethysmography (PPG) signals using advanced statistical methodologies and cutting-edge machine learning techniques, successfully extracting 20+ comprehensive handcrafted features that capture critical physiological patterns and signal characteristics. Designed, implemented, and rigorously evaluated multiple machine learning models including Support Vector Machines (SVM), Gradient Boosting Trees (GBT), and logistic regression algorithms, with extensive hyperparameter optimization and cross-validation strategies. Achieved exceptional performance with the best-performing pipeline delivering Mean Squared Errors of 8.64 mmHg for Systolic Blood Pressure (SBP) and 5.78 mmHg for Diastolic Blood Pressure (DBP), demonstrating significant advancement in non-invasive blood pressure estimation accuracy and establishing a strong foundation for subsequent deep learning model development.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Quanscendence Technologies Pvt. Ltd.",
          company_url: "https://quanscendence.com/",
          logo_path: "quascendence.jpg",
          duration: "February 2022 - April 2023",
          location: "Bangalore, KA, India",
          description:
            "Pioneered innovative AI-driven solutions for enterprise document processing and talent assessment systems, contributing to the advancement of automated recruitment technologies. Successfully architected and developed a sophisticated Convolutional Neural Network (CNN) based skill-scoring model operating on a comprehensive 0-5 scale, capable of intelligently parsing and evaluating over 5,000+ professional résumé PDFs with high accuracy and consistency. Implemented advanced reinforcement learning techniques with carefully designed reward mechanisms, achieving a substantial 15% improvement in scoring accuracy and establishing more reliable candidate assessment metrics. Developed and deployed robust GDPR-compliant redaction algorithms incorporating state-of-the-art natural language processing and computer vision techniques, successfully masking 100% of Personally Identifiable Information (PII) across 2,000+ sensitive documents while maintaining exceptional processing speeds of 20 documents per minute, ensuring complete privacy compliance and data protection standards for enterprise clients.",
          color: "#0071C5",
        },
        {
          title: "Associate Python/Django Developer Intern",
          company: "Zummit Infolabs Pvt. Ltd.",
          company_url: "https://zummitlabs.com/",
          logo_path: "zummit.jpg",
          duration: "December 2021 - April 2022",
          location: "Bangalore Urban, Karnataka, India · Remote",
          description:
            "Gained comprehensive experience in full-stack web development while contributing to diverse, impactful projects spanning enterprise workflow optimization, biotechnology applications, and machine learning showcases. Successfully architected and developed a sophisticated task management system featuring advanced progress tracking capabilities, intelligent assignment prioritization algorithms, and comprehensive workflow automation, resulting in a measurable 15% improvement in internal operational efficiency and significantly enhanced team collaboration. Designed and implemented a powerful, searchable enzyme database system for a specialized biotechnology client, incorporating advanced filtering mechanisms, optimized query processing, and intuitive user interface design, enabling streamlined lookup and analysis of complex biological compounds and significantly accelerating research workflows. Created and deployed a comprehensive project showcase website specifically designed for the Machine Learning team, featuring interactive model demonstrations, detailed performance analytics, and sophisticated visualization components highlighting cutting-edge models focused on medical diagnostics including innovative cancer detection algorithms. Utilized a robust technology stack including Python, Django, HTML/CSS, JavaScript, and PostgreSQL to deliver scalable, maintainable solutions.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span cutting-edge research in machine learning, computer vision, and multimodal systems. I specialize in developing scalable AI solutions, from AR applications and real-time video processing to advanced deep learning models for healthcare and recommendation systems.",
  avatar_image_path: "projects_image.svg",
};

/* const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
}; */

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_pradhumna.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Computer Vision, Deep Learning, and Research in Multimodal Systems.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "In the future I shall be writing blogs about my journey. Stay tuned!!!",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Pittsburgh, PA, USA",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/YMJ9pkAaGaL2",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (412) 214-2576",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  contactPageData,
};
