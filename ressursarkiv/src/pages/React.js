import ResourceArticles from "../components/ResourceArticles";
import { resources } from "../components/ressurser";

const react = () => (
  <ResourceArticles resources={resources.filter(resource => resource.category === "react")} />
);
  
 
  
  export default react;