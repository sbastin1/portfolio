import React from "react";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import About from "./components/About";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function page() {
  return (
    <>
      <Container>
        <NavBar />
        <About />
        <Projects />
        <Interests />
      </Container>
      <Footer />
    </>
  );
}
