export const HERO_CONTENT = "Motivated IT student specializing in DevOps, Cloud Infrastructure, and Network Administration. Hands-on experience building automated CI/CD pipelines, containerized microservices, and highly available cloud environments.";

export const ABOUT_TEXT = "I am a 3rd-year IT student at Ho Chi Minh City University of Transport with a strong passion for DevOps, Cloud Infrastructure, and Network Administration. I focus on automating software delivery workflows, containerizing microservices, and designing resilient, highly available system architectures. With solid experience across AWS and GCP, Terraform, Kubernetes, Docker, and CI/CD tools (Jenkins, GitHub Actions), I aim to help teams deploy software efficiently, securely, and at scale.";

export const SKILLS = [
  // Cloud
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud",
    level: 85,
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: "cloud",
    level: 80,
  },

  // Containers
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "containers",
    level: 85,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "containers",
    level: 70,
  },

  // Infrastructure
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    category: "infrastructure",
    level: 75,
  },

  // DevOps / SRE
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg",
    category: "devops",
    level: 80,
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "devops",
    level: 80,
  },
  {
    name: "Linux (Ubuntu/CentOS)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg",
    category: "devops",
    level: 80,
  },
  {
    name: "Bash Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "devops",
    level: 75,
  },

  // Development
  {
    name: "Java Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    category: "development",
    level: 80,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "development",
    level: 75,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    category: "development",
    level: 75,
  },
  {
    name: "Python FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "development",
    level: 75,
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "database",
    level: 80,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "database",
    level: 80,
  },
];

export const PROJECTS = [
  {
    title: 'Microservices Face Recognition Attendance System',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Architected and deployed a distributed microservices system (Next.js, Node.js, Python FastAPI) improving efficiency by 35%. Containerized services with Docker/Docker Compose and integrated PostgreSQL with pgvector for facial embeddings.',
    technologies: ['Next.js', 'Node.js', 'FastAPI', 'Docker', 'Docker Compose', 'PostgreSQL', 'pgvector'],
    category: 'fullstack',
    githubLink: 'https://github.com/tqd0105/face-recognition-attendance-system',
    websiteLink: '',
  },
  {
    title: '"Shoe Shop" E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Led a full-stack e-commerce project with Java Spring Boot backend and MySQL. Built an automated CI/CD pipeline using GitHub Actions, containerized the app with Docker, and provisioned & deployed to AWS EC2.',
    technologies: ['Java Spring Boot', 'MySQL', 'GitHub Actions', 'Docker', 'AWS EC2', 'Security Groups'],
    category: 'fullstack',
    githubLink: 'https://github.com/truongduoc1512/shoeshop',
    websiteLink: '',
  },
  {
    title: 'Enterprise Network & Systems Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed a centralized retail network with OSPF Multi-area routing and DHCP Relay. Deployed PostgreSQL Master-Slave Replication cluster for HA and built a distributed CI/CD pipeline using master-worker Jenkins topology.',
    technologies: ['OSPF Routing', 'DHCP Relay', 'PostgreSQL Replication', 'Jenkins', 'Ubuntu Server'],
    category: 'devops',
    githubLink: '#',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Ho Chi Minh City, Vietnam',
  phoneNo: '0949096416',
  email: 'hoaiduoc15@gmail.com',
  social: {
    github: 'https://github.com/truongduoc1512',
    linkedin: 'https://www.linkedin.com/in/duoc-truong-984806339/',
    twitter: '',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
