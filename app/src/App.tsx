import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";
import { TestCommonComponentsPage } from "./pages/test-common-components";
import { Error404Page } from "./pages/error-404";
import { LoanForm } from "./pages/loan-form";
import { PersonalisedRecommendations } from "./pages/personalised-recommendations/personalised-recommendations";
import { Results } from "./pages/results";
import logo from "./common/ui/logo.png"

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/test-common-components", element: <TestCommonComponentsPage /> },
  { path: "/loan-form", element: <LoanForm /> },
  { path: "/results", element: <Results /> },
  { path: "/personalised-recommendations", element: <PersonalisedRecommendations /> },
  { path: "*", element: <Error404Page /> },
]);

function App() {
  return (
    <div className="app-container">
      <nav>
        <ul>
          <li><a href="/"><img src={logo} alt="Logo"/></a></li>
          <li><a className="calculator-link" href="/loan-form"><h2>Calculator</h2></a></li>
        </ul>
      </nav>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
export default App;