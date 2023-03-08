import ResourceArticles from "../components/ResourceArticles";
import { resources } from "../components/ressurser";

const sanity = () => (
  <ResourceArticles resources={resources.filter(resource => resource.category === "headless-cms")} />
  );
  
 
  
  export default sanity;