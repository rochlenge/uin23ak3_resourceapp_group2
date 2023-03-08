import ResourceArticles from "../components/ResourceArticles";
import { resources } from "../components/ressurser";

const javascript = () => (
  <ResourceArticles resources={resources.filter(resource => resource.category === "javascript")} />
);
  
 
  
  export default javascript;