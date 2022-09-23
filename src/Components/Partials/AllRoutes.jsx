// Import React hooks
import { Routes, Route } from "react-router-dom";

// Import site pages
import { Home } from "../Pages/Home";
import { Events } from "../Pages/Events";
import { EventDetails } from "../Pages/EventDetails";
import { Purchase, PurchaseDetails } from "../Pages/Purchase";
import { SearchResult } from "../Pages/SearchResult";
import { Actors } from "../Pages/Actors";
import { Admin } from "../Pages/Admin";
import { LoginPage } from "../Pages/LoginPage";

// AllRoutes function component
export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/events">
        <Route index element={<Events />}></Route>
        <Route path=":event_id" element={<EventDetails />} />
      </Route>
      <Route path="/purchase">
        <Route index element={<Purchase />}></Route>
        <Route path=":event_id" element={<PurchaseDetails />} />
      </Route>
      <Route path="/search" element={<SearchResult />}></Route>
      <Route path="/actors" element={<Actors />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}; // End of function component
