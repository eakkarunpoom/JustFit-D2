import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// components
import Layout from "./component/Layout";
import ImageSlider from "./component/Carousel/Carousel";

function App() {
  return (
    <Layout>
      <ImageSlider />
    </Layout>
  );
}

export default App;
