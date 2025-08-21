import App from '../App';
import {
  createBrowserRouter
} from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
]);

export default router;