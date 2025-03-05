import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import Threads from "../Especial/ogl/Threads";
import { useMyContext } from "../context/ThemeContext";

const { dark , light , calcTamanhoDeComponentes} = StyleConfig
const StyleIntroductionFrame = styled.div<{tema : boolean}>`
  color: ${({tema}) => tema ? "white" : "black"};
  padding: 14rem ${calcTamanhoDeComponentes(92)};
  background: ${({tema}) => tema ? light.colors.FrameColor : dark.colors.Framecolor};
  position: relative;
  z-index: 1;

  .thr{
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  h1 , h2{
    
    transform-origin: left;
    animation: .8s motion linear forwards;
    font-size: 4rem;
    position: relative;
    z-index: 0;
    white-space: nowrap;
  }
  h1::selection , h2::selection {
    display: none;
  }
  h2{
    animation-duration: .9s;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @keyframes motion {
    to{
      transform: translateX(0);
    }from{
      transform: translateX(-100px);
    }
    
  }


`;

const MasterSpan = styled.span<{tema : boolean}>`
  background: ${({tema}) => tema ? light.gradients.whiteAndPurple : dark.gradients.blackAndPurple} ;
  background-clip: text;
  color: transparent;
  /* overflow-x: hidden; */
  width: 0%;
  border-right: 4px solid ${light.colors.percent10};
  animation: 1s motionText steps(100) forwards;

  @keyframes motionText {
    from{
      width: 0%;
    }to{
      width: 100%;
    }

  }

`
function IntroductionFrame() {
  const {themes} = useMyContext()

  return (
    <StyleIntroductionFrame tema={themes ?? true}>
      <Threads
        color={[0.5568627450980392,0.26666666666666666,0.8509803921568627]}
        amplitude={5}
        distance={0}
        enableMouseInteraction={true}
      />
      <div className="conteiner">
        <h1>Olá, meu nome é Vitorio.</h1>
        <h2>Eu sou um <MasterSpan tema={themes ?? true}>desenvolvedor backend</MasterSpan>.</h2>
      </div>
    </StyleIntroductionFrame>
  )
}
export default IntroductionFrame