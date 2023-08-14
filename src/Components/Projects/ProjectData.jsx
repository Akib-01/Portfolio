import book from "../assets/Book.png";
import Charity from "../assets/charity.png";
import school from "../assets/edu.png";
import Portfolio from "../assets/portfolio.png";
import Service from "../assets/service.png";
const projectData = [
  {
    id: 1,
    title: " High School Management-System ",
    libraries: [
      {
        id: 1,
        name: "React.JS",
      },
      {
        id: 2,
        name: "Nest.JS",
      },
      {
        id: 3,
        name: "Tailwind",
      },
      {
        id: 4,
        name: "PostgreSQL",
      },
      {
        id: 5,
        name: "TypeORM",
      },
    ],
    description:
      "A complete High School management system using React js in the front-end and Nestjs in the backend. Designing using Tailwind CSS. Fetching data using axios. Validating data using pipes in nextjs. Making database using PostgreSQL. Managing database operations using TypeORM.",
    path: "https://github.com/Akib-01/High-School-Management-System",
    image: "",
    icon: school,
  },
  {
    id: 2,
    title: "  Home-Service Provider ",
    libraries: [
      {
        id: 1,
        name: "Next.JS",
      },
      {
        id: 2,
        name: "Nest.JS",
      },
      {
        id: 3,
        name: "Tailwind",
      },
      {
        id: 4,
        name: "PostgreSQL",
      },
      {
        id: 5,
        name: "TypeORM",
      },
    ],
    description:
      "This is a website where various day to day service can be ordered. used next js in the frontend and nestjs in the backend. Designing using Tailwind CSS. Fetching data using axios. Validating data using pipes in nextjs. Making database using PostgreSQL. Managing database operations using TypeORM.",
    path: "https://github.com/Akib-01/ServiceProvider",
    image: "",
    icon: Service,
  },
  {
    id: 3,
    title: " Book Resell Portal ",
    libraries: [
      {
        id: 1,
        name: "ASP .NET MVC",
      },
      {
        id: 2,
        name: "Entity Framework",
      },
      {
        id: 3,
        name: "MSSQL",
      },
      {
        id: 4,
        name: "N-tire Architechture",
      },
    ],
    description:
      "A Backend project using ASP .NET MVC. Used 3-tire Architechture. Also followed SOLID principal. For databse MSSQL was used. Managed database operations using Entity Framework.",
    path: "https://github.com/Akib-01/BookResellPortal",
    image: "",
    icon: book,
  },
  {
    id: 4,
    title: " Charitable ",
    libraries: [
      {
        id: 1,
        name: "PHP",
      },
      {
        id: 2,
        name: "HTML",
      },
      {
        id: 3,
        name: "CSS",
      },
      {
        id: 4,
        name: "JS",
      },
      {
        id: 5,
        name: "MySQL",
      },
      {
        id: 6,
        name: "AJAX",
      },
    ],
    description:
      "A charity website using PHP in the backend and HTML, CSS, JS in the frontend. Used PhpMyAdmin database.",
    path: "https://github.com/Akib-01/Projects/tree/main/Web%20Development/CharitAble",
    image: "",
    icon: Charity,
  },
  {
    id: 5,
    title: " Portfolio ",
    libraries: [
      {
        id: 1,
        name: "React.JS",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "JSON",
      },
    ],
    description: "Wanna See this portfolio Websites Code! Checkout My github.",
    path: "https://github.com/Akib-01/Portfolio",
    image: "",
    icon: Portfolio,
  },
];
export default projectData;
