import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import DefaultLayout from "./layout/defaultLayout.jsx";
import ExamplePage from "./pages/example";

import './assets/scss/_index.scss'

function App() {
  return (
    <DefaultLayout>
      <Router>
        <Routes>
          <Route exact path="/" element={<ExamplePage />} />
        </Routes>
      </Router>
    </DefaultLayout>
  );
}

export default App;
