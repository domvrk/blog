import React from 'react';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';



function App() {
  return (


    <div>
      <Navigation />

    </div>

    // <div className="container">
    //   <link rel="stylesheet" href="home.css" media="screen" title="no title" charset="utf-8">
    //
    //   <h1>The Loyola Research Portal</h1>
    //
    //   <button ui-sref="projects" id="search" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
    //     Search Projects Here!
    //   </button>
    //
    // </div>



    // <h3>Here you can find a database with all scientific projects of the Loyola University in Chicago, IL.
    // <br>
    // You can search for specific projects, topics, projects held by specific professors or maintained by specific students.
    // </h3>

  );
}

export default App;
