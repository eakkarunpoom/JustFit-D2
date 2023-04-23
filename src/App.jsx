import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// components
import Layout from "./component/Layout";
import ImageSlider from "./component/Carousel/Carousel";
import SignUpBtn from "./component/SingUpBtn/SignUpBtn";

function App() {
  return (
    <Layout>
      <ImageSlider />
      <div className="px-4 py-5 text-center bgw">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Crush your activities goals with JustFit.
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Stay motivated and on track with our powerful exercise tracker and
            access to helpful health content.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <SignUpBtn variant="secondary" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
