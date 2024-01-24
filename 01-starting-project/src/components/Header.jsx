//import statement below will ensure the inclusion and packaging of required assets
import reactImg from '../assets/react-core-concepts.png';


const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    // IMPORTANT: const can hold single value or represent a funx
    return (
      <header>
        {/* the img tag will reference an import statement instead */}
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {/* 'description' below is actually a const that executes a funx */}
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
  }