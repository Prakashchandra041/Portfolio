// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Prakash Chandra",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph: `I have always been a keen enthusiast of the tech domain. My motto in life is "Keep Learning and Growing"
  I bring this mantra to my approach to work too. As an aspiring web developer, I am excited about learning from and adding value to the organization that I would be associated with. I am good at problem-solving and logical reasoning. I am passionate about building user-centric products by translating user requirements into technical solutions.
`,
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Redux",
    // svg: '',
    faClass: "fab fa-react-redux",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },

  {
    name: "GIT",
    // svg: '',
    faClass: "fab fa-github",
  },
  {
    name: "Express",
    // svg: '',
    faClass: "fas fa-express",
  },
  {
    name: "MongoDb",
    // svg: '',
    faClass: "fab fa-mongodb",
  },
  {
    name: "DS & Algo",
    // svg: '',
    faClass: "fab fa-ds",
  },
  
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Clone Of NextDayFlyers",
    skills: ["HTML, CSS, JS"],
    url: "https://loving-mcclintock-546c64.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Clone  Of      Flipkart",
    skills: ["HTML, CSS, JS"],
    url: "https://nifty-almeida-613d89.netlify.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Nordstrom Clone",
    skills: ["HTML, CSS, JS,MongoDB, Express"],
    url: "https://github.com/kaustubhai",
  },
  // {
  //   // Add image in './styles/images.css' in #project4
  //   id: "Project 4",
  //   name: "Mental Health App",
  //   skills: ["React,Express,Node,MongoDB"],
  //   url: "https://mental-health-client.vercel.app/welcome",
  // },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Mental Health App",
    skills: ["React, Express, Node, MongoDb"],
    url: "https://mental-health-client.vercel.app/welcome",
  },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "";
const miscellaneous = [
  // {
  //   // Add image in './styles/images.css' in #misc1
  //   id: "misc1",
  //   name: "Miscellaneous 1",
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc2
  //   id: "misc2",
  //   name: "Miscellaneous 2",
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #misc3
  //   id: "misc3",
  //   name: "Miscellaneous 3",
  //   url: "https://github.com/kaustubhai",
  // },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch: "Connect with me on my social handles",
  copyright: "Prakash Chandra",
  contactUrl: "https://formspree.io/f/xoqrayge",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Prakashchandra041",
  facebook: "https://www.facebook.com/prakash.chandra.370515",
  // twitter: "https://twitter.com",
  instagram: "https://www.instagram.com/prakash_chandra88/",
  linkedin: "https://www.linkedin.com/in/prakash-chandra-7aab29129/",
  resume:
    "https://drive.google.com/file/d/1ybE5t-mz4Y5I68NdySBXsiExQrpX_9Au/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
