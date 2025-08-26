import App from '../App';
import {
  createBrowserRouter
} from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BlogDetail from '../pages/BlogDetail';

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
      }, 
      {
        path: '/blogs/:id/',
        element: <BlogDetail/>
      }
    ]
  },
]);

export default router;