import {
  BriefcaseBusiness,
  Github,
  Linkedin,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

export type Experience = {
  role: string;
  company: string;
  projects?: string;
  period: string;
  location: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  logo?: string;
  logoAlt?: string;
  skills: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  logo: string;
  logoAlt: string;
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const assetBase = import.meta.env.BASE_URL;

const logos = {
  salesforce: `${assetBase}logos/salesforce.svg`,
  trailhead: `${assetBase}logos/trailhead.svg`,
  postman: `${assetBase}logos/postman.svg`,
  jira: `${assetBase}logos/jira.svg`,
  selenium: `${assetBase}logos/selenium.svg`,
};

export const portfolio = {
  personal: {
    name: "Raksha Bangera",
    role: "Salesforce QA Analyst | Automation Testing | Deloitte Consulting",
    location: "Vancouver, BC",
    email: "rkshbangera17@gmail.com",
    phone: "+1 (250) 802-5031",
    resumeUrl: `${assetBase}Raksha-Bangera-Resume.pdf`,
    portrait: `${assetBase}raksha-bangera-profile.jpeg`,
  },
  hero: {
    title: "Results-driven QA Analyst with 4 years of Salesforce and enterprise testing experience.",
    subtitle:
      "Computer Science Engineering graduate and Salesforce Certified Professional with expertise in manual testing, automation testing, API validation, CRM workflows, and enterprise release quality.",
    secondaryAction: "Contact me",
  },
  about: {
    title: "A QA analyst who brings calm, clarity, and release confidence.",
    summary:
      "I care about making complex business systems easier to trust. Across Salesforce, enterprise applications, APIs, and automation work, I focus on clear test coverage, sharp defect communication, and practical validation that helps teams make confident release decisions. Recruiters and hiring managers can expect someone who is detail-oriented, collaborative, and comfortable translating business workflows into reliable QA outcomes.",
    focusAreas: [
      "Salesforce CRM, CPQ, SIT, UAT, and regression coverage",
      "Automation-minded testing with Selenium, Java, XPath, and CSS selectors",
      "API validation, defect tracking, and release readiness support",
      "Clear communication across QA, development, and business teams",
    ],
  },
  metrics: [
    { label: "Regression and functional tests automated", value: 1200, suffix: "+" },
    { label: "Salesforce certifications earned", value: 5, suffix: "x" },
    { label: "Production defects reduced", value: 90, suffix: "%" },
    { label: "Automation efficiency improved", value: 40, suffix: "%" },
  ] satisfies Metric[],
  experience: [
    {
      role: "Analyst - Salesforce QA",
      company: "Deloitte Consulting",
      projects: "Masterbrand Cabinets, Jupiter (Internal), Forcepoint",
      period: "Sep 2023 - Oct 2024",
      location: "Vancouver, BC",
      highlights: [
        "Led testing for Customer Portal and Order-to-Fulfillment (O2F) tracks, ensuring smooth go-lives and process improvements.",
        "Used XPath locators to improve accuracy in identifying web elements on the Forcepoint O2F page.",
        "Tested across multiple devices, found defects, and ensured a high-quality user experience.",
        "Tracked and managed defects efficiently using JIRA, Salesforce GCRM, and Microsoft ADO.",
        "Worked extensively on Salesforce CPQ, verifying products, quotes, bundles, and fulfillment accuracy.",
        "Automated API testing using Postman, reducing manual effort.",
        "Mentored new team members, helping them onboard faster and work more effectively.",
        "Used Selenium WebDriver with Java to create 1200+ regression and functional tests, uncovering deep bugs and increasing efficiency by 40%.",
      ],
    },
    {
      role: "Analyst - QA",
      company: "Deloitte Consulting",
      projects: "MARS, Jupiter (Internal)",
      period: "Sep 2022 - Aug 2023",
      location: "India / Remote",
      highlights: [
        "Led Sprint, SIT, UAT, and Cutover Smoke Testing, ensuring end-to-end system validation and reducing production defects by 90%.",
        "Identified and logged 100+ defects in ADO and validated order management and sales tracking features.",
        "Led data migration and integration testing, ensuring 90%+ data accuracy by extracting SOQL queries and identifying discrepancies.",
        "Coordinated with development and QA teams to ensure go-live readiness.",
        "Facilitated team onboarding and knowledge transfer, ensuring new team members were productive faster.",
      ],
    },
    {
      role: "Analyst - QA",
      company: "Deloitte Consulting",
      projects: "Mercury, Jupiter (Internal)",
      period: "May 2022 - Aug 2022",
      location: "India / Remote",
      highlights: [
        "Managed and resolved 80+ technical and functional issues in the Mercury tool, improving system efficiency.",
        "Led Salesforce configuration and process implementation, enhancing workflow automation.",
        "Ensured 98%+ data accuracy during data migration for the Jupiter CRM project, facilitating a smooth transition with minimal discrepancies.",
        "Executed incident testing on ServiceNow, ensuring faster resolution of critical issues.",
        "Created and managed user stories in Salesforce, improving requirement clarity and sprint planning efficiency by 15%.",
      ],
    },
    {
      role: "Intern Analyst - QA Automation",
      company: "Deloitte Consulting",
      projects: "American Express",
      period: "May 2021 - Apr 2022",
      location: "India / Remote",
      highlights: [
        "Automated testing for the American Express Search Application, enhancing test efficiency and reducing manual effort by 40%.",
        "Developed and maintained Selenium automation regression suites and created custom XPath and CSS locators for better element identification.",
        "Monitored and managed Jenkins CI/CD build statuses, ensuring a 99% build success rate and minimizing deployment failures.",
        "Worked on search relevancy matrix, fine-tuning algorithms to enhance accuracy and improve user experience.",
        "Identified and documented 50+ defects in JIRA.",
        "Optimized system performance with JMeter-based load testing, improving response times.",
        "Led a team of 4+ members to restructure and rewrite regression test cases, achieving a 15% reduction in the total count.",
        "Developed an automation sanity test to run before each deployment, reducing testing time by 55% and ensuring quicker validation with consistent results.",
      ],
    },
  ] satisfies Experience[],
  skills: [
    {
      title: "Programming Languages",
      icon: ShieldCheck,
      logo: logos.salesforce,
      logoAlt: "Salesforce logo",
      skills: ["Java", "HTML/CSS", "Salesforce LWC", "SQL", "SOQL", "JavaScript", "Apex Basic"],
    },
    {
      title: "Automation & Functional Expertise",
      icon: TestTube2,
      logo: logos.selenium,
      logoAlt: "Selenium logo",
      skills: [
        "Functional Testing",
        "Automation Testing",
        "Smoke Testing",
        "Regression Testing",
        "End-to-End Testing",
        "Mobile Testing",
        "API Testing & Validation",
        "Test Planning",
        "Test Design",
        "Test Execution",
        "CI/CD Pipeline Integration",
        "XPath & CSS Selectors",
      ],
    },
    {
      title: "Enterprise Applications & Tools",
      icon: Sparkles,
      logo: logos.postman,
      logoAlt: "Postman logo",
      skills: [
        "Salesforce Lightning",
        "Sales Cloud",
        "Service Cloud",
        "CPQ Basic",
        "Visual Studio Code",
        "JMeter Basic",
        "Selenium WebDriver Java",
        "GitHub",
        "TestNG",
        "Jenkins",
        "Postman",
      ],
    },
    {
      title: "Defect Tracking & Project Management",
      icon: BriefcaseBusiness,
      logo: logos.jira,
      logoAlt: "Jira logo",
      skills: ["JIRA", "Microsoft ADO", "Agile Process Management", "Test Case Management", "Scrum"],
    },
  ] satisfies SkillGroup[],
  certifications: [
    {
      title: "Salesforce Certified Administrator",
      issuer: "Salesforce Trailhead",
      year: "CRM",
      logo: logos.salesforce,
      logoAlt: "Salesforce logo",
    },
    {
      title: "Salesforce Certified Platform App Builder",
      issuer: "Salesforce Trailhead",
      year: "CRM",
      logo: logos.salesforce,
      logoAlt: "Salesforce logo",
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce Trailhead",
      year: "Development",
      logo: logos.salesforce,
      logoAlt: "Salesforce logo",
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce Trailhead",
      year: "AI",
      logo: logos.salesforce,
      logoAlt: "Salesforce logo",
    },
    {
      title: "Salesforce Certified AI Specialist",
      issuer: "Salesforce Trailhead",
      year: "AI",
      logo: logos.salesforce,
      logoAlt: "Salesforce logo",
    },
  ] satisfies Certification[],
  contactLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raksha-bangera-a3458917b/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/rakshabangera",
      icon: Github,
    },
  ] satisfies ContactLink[],
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};
