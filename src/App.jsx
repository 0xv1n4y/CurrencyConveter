import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";
import axios from "axios";

const Container = styled.div`
  color: red;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default App;
