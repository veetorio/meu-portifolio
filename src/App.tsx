import styled, { createGlobalStyle } from "styled-components"
import Header from "./assets/components/Header"
import IntroductionFrame from "./assets/components/IntroductionFrame"
import Main from "./assets/components/Main"
import JourneySection from "./assets/components/JourneySection"
import MyStack from "./assets/components/MyStack"
import Projects from "./assets/components/Projetos"
import Footer from "./assets/components/Footer"

const Global = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("../../../public/fonts/Poppins/Poppins-Regular.ttf") , url("../public/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", serif;
    cursor: url("../public/cursor.png") , auto;
    scroll-behavior: smooth;
  }
  `


const AppStyle = styled.div``
function App() {
  return (
    <AppStyle>
      <Global />
      <Header />
      <IntroductionFrame />
      <Main />
      <JourneySection />
      <MyStack />
      <Projects />
      <Footer/>
    </AppStyle>
  )
}

export default App
