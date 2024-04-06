import { PortfolioItemType } from "../types/portfolio-item";

export const PROJECTS: PortfolioItemType[] = [
  {
    id: "gllacy",
    name: "Gllacy",
    path: "https://alex-gorodov.github.io/gllacy",
    description: "Gllacy store offers a delightful selection of homemade ice cream flavors. Enjoy natural ingredients, free delivery, and exclusive gifts with every purchase. The design belongs to HTML Academy.",
    technologies: ["React", "TypeScript", "Redux", "CSS(SASS)"],
    img: process.env.PUBLIC_URL + "/img/portfolio/gllacy",
    isAdaptive: true,
  },
  {
    id: "bright-lights",
    name: "Bright Lights",
    path: "https://alex-gorodov.github.io/bright-lights/",
    description: "\"Bright Lights\" introduces a dynamic blend of music, tours, and news. Led by Grammy-nominated singer, songwriter, and DJ, Bright Lights delivers an electrifying experience, captivating audiences worldwide.",
    technologies: ["HTML", "CSS(Less)", "\"Vanilla\" JS"],
    img: process.env.PUBLIC_URL + "/img/portfolio/bright-lights",
    isAdaptive: true,
  },
  {
    id: "createx",
    name: "CreateX",
    path: "https://alex-gorodov.github.io/CreateX/",
    description: "\"CreateX\" offers a diverse range of online courses and events tailored for learners worldwide. Benefit from experienced tutors, 24/7 support, and a vibrant learning community. Enroll now and unleash your potential with CreateX!",
    technologies: ["HTML", "CSS", "\"Vanilla\" JS"],
    img: process.env.PUBLIC_URL + "/img/portfolio/createx",
    isAdaptive: true,
  },
  {
    id: "cat-energy",
    name: "Cat Energy",
    path: "https://alex-gorodov.github.io/Cat-Energy/",
    description: "\"Cat Energy\" offers specialized nutrition programs for cats. Whether your pet needs to lose weight or gain muscle, our functional nutrition products provide essential nutrients. Achieve remarkable results without changing your cat's lifestyle. Contact us for dealer cooperation.",
    technologies: ["HTML", "CSS(Less)", "\"Vanilla\" JS"],
    img: process.env.PUBLIC_URL + "/img/portfolio/cat-energy",
    isAdaptive: true,
  },
  {
    id: "sedona",
    name: "Sedona",
    path: "https://htmlacademy-adaptive.github.io/590651-sedona-26/11/",
    description: "Sedona is a true Arizona town with a lively atmosphere and amazing attractions. Discover five reasons why Sedona is better than the Grand Canyon. The design belongs to HTML Academy.",
    technologies: ["HTML", "CSS(Less)", "\"Vanilla\" JS"],
    img: process.env.PUBLIC_URL + "/img/portfolio/sedona",
    isAdaptive: true,
  },
  {
    id: "device",
    name: "Device",
    path: "https://alex-gorodov.github.io/Device/",
    description: "\"Device\" is a gadget online store offering a wide range of products. Services include delivery, warranty, and financing. Contact information, working hours, and newsletter subscription are also available.",
    technologies: ["HTML", "CSS"],
    img: process.env.PUBLIC_URL + "/img/portfolio/device",
    isAdaptive: false,
  }
]
