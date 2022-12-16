import React from "react";
import Layout from "../components/ui/Layout";
import Gallery from "../components/gallery/Gallery";
import CourseNav from "../components/courseNav/CourseNav";
import StuView from "../components/stuView/StuView";
import TopCat from "../components/topCat/TopCat";

const HomePage = (props) => {
  return (
    <Layout>
      <Gallery />
      <CourseNav />
      <StuView />
      <TopCat />
    </Layout>
  );
};

export default HomePage;
