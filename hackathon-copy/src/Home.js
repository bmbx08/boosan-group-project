import React from "react";
import {Route, Routes} from "react-router-dom";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
