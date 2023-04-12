import React from "react";
import Root from "./pages/Root";
import Error from "./pages/error/Error";

import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // HashRouter,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route
            index
            element={
              <section
                className="container w-75  mx-1 mx-md-4 mx-lg-5 my-5 py-5  overflow-hidden"
                style={{ height: "" }}
              >
                <h3 className="_title title">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
                <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </section>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
//<Navigate replace to="/" />
