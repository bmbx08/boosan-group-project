import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
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