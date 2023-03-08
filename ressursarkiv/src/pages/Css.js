import ResourceArticles from "../components/ResourceArticles";
import { resources } from "../components/ressurser";

const html = () => (
  <ResourceArticles resources={resources.filter(resource => resource.category === "css")} />
);

export default html;