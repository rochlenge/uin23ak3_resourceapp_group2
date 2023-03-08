import ResourceArticles from "../components/ResourceArticles";
import { resources } from "../components/ressurser";

const html = () => (
  <ResourceArticles resources={resources.filter(resource => resource.category === "html")} />
);

export default html;