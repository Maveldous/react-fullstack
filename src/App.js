import DefaultLayout from "./layout/defaultLayout.jsx";
import Page from "./pages/page";

import './assets/scss/_index.scss'

function App() {
  return (
    <DefaultLayout>
      <Page />
    </DefaultLayout>
  );
}

export default App;
