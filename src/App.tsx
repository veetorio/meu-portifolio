import styled, { createGlobalStyle } from "styled-components"
import Header from "./assets/components/Header"
import IntroductionFrame from "./assets/components/IntroductionFrame"
import Main from "./assets/components/Main"
import JourneySection from "./assets/components/JourneySection"
import MyStack from "./assets/components/MyStack"
import Projects from "./assets/components/Projetos"
import Footer from "./assets/components/Footer"
import { useMyContext } from "./assets/context/ThemeContext"
import { StyleConfig } from "./assets/config/styles.config"


type Theme = {
  tema : boolean
}

const Global = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url("../../../public/fonts/Poppins/Poppins-Regular.ttf") , url("../public/fonts/Poppins/Poppins-SemiBold.ttf");
  }
  * {
    transition:background 1s;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", serif;
    cursor: url("../public/cursor.png") , auto;
    scroll-behavior: smooth;
  }
  `

const { dark , light } = StyleConfig
const AppStyle = styled.div<Theme>`
    background: ${({tema}) => tema ? light.colors.percent60 : dark.colors.percent60};
    color : ${({tema}) => tema ? "black" : "white"}
    
    
  `

function App() {
  const props = useMyContext() 
  
  
  return (
      <AppStyle tema={props.themes ?? false}>
        <Global />
        <Header />
        <IntroductionFrame />
        <Main />
        <JourneySection />
        <MyStack />
        <Projects />
        <Footer />
      </AppStyle>
  )
}

export default App
