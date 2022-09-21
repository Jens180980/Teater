// React imports
import { BrowserRouter } from "react-router-dom";

// Custom routes import
import { AllRoutes } from "./Components/Partials/AllRoutes";

// Components import
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";

//Import modular style sheet
import Style from "./Assets/scss/App.module.scss";

//State management provider import
import { SearchWrapper } from "./Components/StateManagement/SearchData";
import { AuthWrapper } from "./Components/StateManagement/Authorize";
import { EventListWrapper } from "./Components/StateManagement/EventListData";
import { ActorListWrapper } from "./Components/StateManagement/ActorListData";
import { CommentsListWrapper } from "./Components/StateManagement/CommentsListData";
import { ShowLoginWrapper } from "./Components/StateManagement/ShowLoginData";
import { ReservationSeatWrapper } from "./Components/StateManagement/ReservationSeatData";

function App() {
  return (
    <section className={Style.body}>
      <BrowserRouter>
        <AuthWrapper>
          <SearchWrapper>
            <ShowLoginWrapper>
              <Header />
              <Main>
                <ReservationSeatWrapper>
                  <CommentsListWrapper>
                    <ActorListWrapper>
                      <EventListWrapper>
                        <AllRoutes />
                      </EventListWrapper>
                    </ActorListWrapper>
                  </CommentsListWrapper>
                </ReservationSeatWrapper>
              </Main>
              <Footer />
            </ShowLoginWrapper>
          </SearchWrapper>
        </AuthWrapper>
      </BrowserRouter>
    </section>
  );
}

export default App;
