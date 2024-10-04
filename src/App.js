import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import MainMapPage from "./pages/MainMap/MainMapPage";
import SmallMapPage from "./pages/SmallMap/SmallMapPage";
import LocationPage from "./pages/Location/LocationPage";
import LocationDetailPage from "./pages/LocationDetail/LocationDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<MainMapPage/>}/>
          <Route path=":id" element={<SmallMapPage/>}/>
          <Route path="location">
            <Route index element={<LocationPage/>}/>
            <Route path=":id" element={<LocationDetailPage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;