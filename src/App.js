import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Courses } from './pages/Courses';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';

function App() {
  return (
  <>
    <BrowserRouter>
     <Switch>
      <Route component={Home} path="/" exact />
      <Route component={AboutMe} path="/aboutme"/>
      <Route component={Skills} path="/skills"/>
      <Route component={Courses} path="/courses"/>
     </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
