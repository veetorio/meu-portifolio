import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import Threads from "../Especial/ogl/Threads";
import { useMyContext } from "../context/ThemeContext";
import { UseTranslate } from "../context/TranslateContext";
import { pt_en } from "../config/Translate";

const { dark, light, calcTamanhoDeComponentes } = StyleConfig
const StyleIntroductionFrame = styled.div<{ tema: boolean }>`
  color: ${({ tema }) => tema ? "white" : "black"};
  padding: 14rem ${calcTamanhoDeComponentes(92)};
  background: ${({ tema }) => tema ? light.colors.FrameColor : dark.colors.Framecolor};
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
    animation: .9s motion linear forwards;
    font-size: 4rem;
    position: relative;
    z-index: 0;
    white-space: nowrap;
  }
  h1::selection , h2::selection {
    display: none;
  }
  h2{
    animation-duration: 1s;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @keyframes motion {
    to{
      opacity: 1;
      transform: translateX(0);
    }from{
      transform: translateX(-200px);
      opacity: 0;
    }
    
  }


`;

const MasterSpan = styled.span<{ tema: boolean }>`
  background: ${({ tema }) => tema ? light.gradients.whiteAndPurple : dark.gradients.blackAndPurple} ;
  background-clip: text;
  color: transparent;

`
function IntroductionFrame() {
  const { themes } = useMyContext()
  const contextTranslate = UseTranslate()
  const texts = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en
  const Paragraph = ({ text }: { text: string[] }) => {
    return (
      <span>
        <h2>{text[1]}
          <MasterSpan tema={themes ?? true}>
            {text[2]}
          </MasterSpan>.
        </h2>
      </span>
    )
  }


  return (
    <StyleIntroductionFrame tema={themes ?? true}>
      <Threads
        color={[0.5568627450980392, 0.26666666666666666, 0.8509803921568627]}
        amplitude={5}
        distance={0}
        enableMouseInteraction={true}
      />
      <div className="conteiner">
        <h1>{texts.introductionFrame[0]}</h1>
        <Paragraph text={texts.introductionFrame} />
      </div>
    </StyleIntroductionFrame>
  )
}
export default IntroductionFrame