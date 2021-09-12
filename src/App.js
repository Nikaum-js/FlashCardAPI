import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

function App() {
  return (
  <>
    <BrowserRouter>
     <Switch>
      <Route component={Home} path="/" exact />
      <Route component={AboutMe} path="/aboutme"/>
      <Route component={Skills} path="/skills"/>
      <Route component={Projects} path="/projects"/>
     </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
