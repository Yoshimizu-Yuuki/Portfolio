import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resume from './Resume';
import Home from './Home';
import Skill from './Skill';

const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/skill">
            <Skill />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

/**
     <Router>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
    </Router>
 */

// import React from "react";
// import Resume from './resume';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/resume">Resume</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/resume">
//             <Resume />
//           </Route>
//           <Route path="/">
//             <App />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

