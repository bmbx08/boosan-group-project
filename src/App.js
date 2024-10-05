import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import MainMapPage from "./pages/MainMap/MainMapPage";
import AttractionMapPage from "./pages/AttractionMap/AttractionMapPage";
import InfoPage from "./pages/Info/InfoPage";
import InfoDetailPage from "./pages/InfoDetail/InfoDetailPage";
import HouseMapPage from "./pages/HouseMap/HouseMapPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout/>}> {/*네브바*/}
          <Route index element={<MainMapPage/>}/> {/*전체 지도*/}
          <Route path="attraction/:id" element={<AttractionMapPage/>}/> {/*관광지 지도*/}
          <Route path="house/:id" element={<HouseMapPage/>}/>
          <Route path="info">
            <Route index element={<InfoPage/>}/> {/*전체 정보 페이지*/}
            <Route path=":id">
              <Route index element={<InfoDetailPage/>}/> {/*장소 상세 페이지*/}
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;