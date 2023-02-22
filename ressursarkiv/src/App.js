import logo from './logo.svg';
import './App.css';
import './css/sass/main.scss';

function App() {
  return (
    <div className="App">
       <header id="title">RESSURSARKIV</header>

<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Tab1')">HTML</button>
  <button class="tablinks" onclick="openTab(event, 'Tab2')">CSS</button>
  <button class="tablinks" onclick="openTab(event, 'Tab3')">JavaScript</button>
  <button class="tablinks" onclick="openTab(event, 'Tab4')">React</button>
  <button class="tablinks" onclick="openTab(event, 'Tab5')">Sanity and headless CMS</button>
</div>

<div id="Tab1" class="tabcontent">
  <h2>Tab 1 header</h2>
  <p>Tab 1 text</p>
  <ul>
    <li><a href="#"></a>Tab 1 Link 1</li>
    <li><a href="#"></a>Tab 1 Link 2</li>
    <li><a href="#"></a>Tab 1 Link 3</li>
  </ul>
</div>

<div id="Tab2" class="tabcontent">
  <h2>Tab 2 Header</h2>
  <p>Tab 2 text</p>
  <ul>
    <li><a href="#">Tab 2 Link 1</a></li>
    <li><a href="#">Tab 2 Link 2</a></li>
    <li><a href="#">Tab 2 Link 3</a></li>
    <li><a href="#">Tab 2 Link 4</a></li>
  </ul>
</div>

<div id="Tab3" class="tabcontent">
  <h2>Tab 3 Header</h2>
  <p>Tab 3 text.</p>
  <ul>
    <li><a href="#">Tab 3 Link 1</a></li>
    <li><a href="#">Tab 3 Link 2</a></li>
    <li><a href="#">Tab 3 Link 3</a></li>
  </ul>
</div>

<div id="Tab4" class="tabcontent">
  <h2>Tab 4 Header</h2>
  <p>Tab 4 text.</p>
  <ul>
    <li><a href="#">Tab 4 Link 1</a></li>
    <li><a href="#">Tab 4 Link 2</a></li>
    <li><a href="#">Tab 4 Link 3</a></li>
  </ul>
</div>

<div id="Tab5" class="tabcontent">
  <h2>Tab 5 Header</h2>
  <p>Tab 5 text.</p>
  <ul>
    <li><a href="#">Tab 5 Link 1</a></li>
    <li><a href="#">Tab 5 Link 2</a></li>
    <li><a href="#">Tab 5 Link 3</a></li>
  </ul>
</div>

<script src="ressurser.js"></script>
    </div>
  );
}

export default App;
