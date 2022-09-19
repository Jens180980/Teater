import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Events } from "../Pages/Events";
import { EventDetails } from "../Pages/EventDetails";
import { Purchase } from "../Pages/Purchase";
import { SearchResult } from "../Pages/SearchResult";
import { Actors } from "../Pages/Actors";
import { Admin } from "../Pages/Admin";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/events">
        <Route index element={<Events />}></Route>
        <Route path=":event_id" element={<EventDetails />} />
      </Route>
      <Route path="/purchase" element={<Purchase />}></Route>
      <Route path="/search" element={<SearchResult />}></Route>
      <Route path="/actors" element={<Actors />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
};
