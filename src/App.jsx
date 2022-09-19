// React imports
import { BrowserRouter } from "react-router-dom";

// Custom routes import
import { AllRoutes } from "./Components/Partials/AllRoutes";

// Components import
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";

//State management provider import
import { SearchWrapper } from "./Components/StateManagement/SearchData";
import { AuthWrapper } from "./Components/StateManagement/Authorize";

function App() {
  return (
    <section className={Style.body}>
      <BrowserRouter>
        <AuthWrapper>
          <SearchWrapper>
            <Header />
            <Main>
              <AllRoutes />
            </Main>
            <Footer />
          </SearchWrapper>
        </AuthWrapper>
      </BrowserRouter>
    </section>
  );
}

export default App;
