function ResourceArticles({ resources }) {
  // Del opp ressursene etter kategori ved å bruke reduce-metoden på ressursene-arrayet.
  // For hver ressurs, legges den til i et nytt array for kategorien, som opprettes i accumulated-objektet hvis den ikke allerede finnes.
  const resourcesByCategory = resources.reduce((accumulated, current) => {
    accumulated[current.category] = accumulated[current.category] || [];
    accumulated[current.category].push(current);
    return accumulated;
  }, {});

// Opprett et array med artikler som inneholder ressurser sortert etter kategori.
// For hver kategori i resourcesByCategory-objektet, opprettes en <article>-tag med en <h2>-tag som viser kategorinavnet.
  const articles = Object.entries(resourcesByCategory).map(([category, resources]) => (
    <article key={category} className="tabcontent">
      <h2>{category}</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.url}>
            <a href={resource.url} >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </article>
  ));

  return <div>{articles}</div>;
}

export default ResourceArticles;