import App from '../App';
import {
  createBrowserRouter
} from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
]);

export default router;