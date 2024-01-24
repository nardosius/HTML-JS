

// function CoreConcept(props) {//"props is passed to receive values from Component tag"
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

//Can destructure previous code thusly:
export default function CoreConcept({image, title, description}) {//curly braces allow direct access to object keys
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }