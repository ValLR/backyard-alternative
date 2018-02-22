import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import 'css/main.css';
import Home from './components/Home.js'
import Guide from './components/Guide.js'
import ProjectPage from './components/ProjectPage.js'
import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom'


class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <a className="feedback" target="_blank" rel="noopener noreferrer" href="https://github.com/Unholster/backyard/issues">Feedback, bugs & requests</a>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon64.ico" />
          <title>Backyard</title>
        </Helmet>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/guide/:guideName/:sectionName?" component={Guide} />
            <Route path="/projects/:projectName?" component={ProjectPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
