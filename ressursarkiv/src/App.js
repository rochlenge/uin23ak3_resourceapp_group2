import './App.css';
import './css/sass/main.scss';
import ResourceArticles from './components/ResourceArticles.js'
import {resources} from './components/ressurser';

function App() {
  return (
    <div className="App">
       <header id="title">RESSURSARKIV</header>

<div class="tab" id="buttonbox">
  <button class="tablinks" onclick="openTab(event, 'Tab1')">HTML</button>
  <button class="tablinks" onclick="openTab(event, 'Tab2')">CSS</button>
  <button class="tablinks" onclick="openTab(event, 'Tab3')">JavaScript</button>
  <button class="tablinks" onclick="openTab(event, 'Tab4')">React</button>
  <button class="tablinks" onclick="openTab(event, 'Tab5')">Sanity and headless CMS</button>
</div>

<div id="Tab1" class="tabcontent">
  <h2>Tab 1 header</h2>
  <ul>
    <li><a href="#">Tab 1 Link 1</a></li>
    <li><a href="#">Tab 1 Link 2</a></li>
    <li><a href="#">Tab 1 Link 3</a></li>
  </ul>
</div>


<ResourceArticles resources={resources} />;

    </div>
  );
}

export default App;