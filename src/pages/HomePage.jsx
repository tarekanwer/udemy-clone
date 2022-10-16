import React from "react";
import Layout from "../components/ui/Layout";
import Gallery from "../components/gallery/Gallery";
import CourseNav from "../components/courseNav/CourseNav";

const HomePage = (props) => {
  return (
    <Layout>
      <Gallery />
      <CourseNav />
    </Layout>
  );
};

export default HomePage;
