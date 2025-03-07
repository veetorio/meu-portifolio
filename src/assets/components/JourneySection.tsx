import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import { TitleStyle } from "./Main";
import { useMyContext } from "../context/ThemeContext";
import { InView } from "react-intersection-observer";
import { UseTranslate } from "../context/TranslateContext";
import { pt_en } from "../config/Translate";
const { calcTamanhoDeComponentes, dark, light } = StyleConfig
const { percent10 } = StyleConfig.light.colors

type Li = {
    MasterTitle: string
    listTitles: string[]
    listSubtitles: (string | null | undefined)[]
    hasSubtitle: boolean,
}
const StyleJourneySection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: ${calcTamanhoDeComponentes(120)}  ${calcTamanhoDeComponentes(56)};
    .jornadaHead{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    section{
        display:flex ;
        flex-flow: column wrap;
        align-items: center;
        width: 100%;
        .conteiner{
            margin-top: ${calcTamanhoDeComponentes(152)};
            display: grid;
            grid-template-columns: .8fr .8fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: ${calcTamanhoDeComponentes(26)} 4rem;
        }
    }
    
`;
const ContentJourneyStyle = styled.div<{ tema: boolean }>`
    height: fit-content;
    display: flex;
    margin-left: 4rem;
    gap: ${calcTamanhoDeComponentes(14)};
    aside{
        .bar{
            background: ${percent10};
            height: 100%;
            width: 2px;
            position: relative;

            &::after{
                position: absolute;
                content: " ";
                top: 0;
                border-radius: 50%;
                left: -4px;
                width: 10px;
                height: 10px;
                background: ${percent10};
            }
        }

    }
    .content{
        .head{
            h1{
                position: relative;
                bottom: 1rem;
            }
        }
        article{
            padding: .5rem;
            ul{
                list-style: none;
                display: flex;
                flex-flow: column;
                gap: 1rem;
                li { 
                    h4{
                        color: ${({ tema }) => tema ? light.text.journey.titleItems : dark.text.journey.titleItems};
                    }
                    h5{
                        color: #8A8A8A;
                    }
                }
            }
        }
    }
`
const ContentJourney = ({ MasterTitle, hasSubtitle, listTitles, listSubtitles }: Li) => {
    const { themes } = useMyContext()
   
    const temas = themes ?? true
    const renderLi = () => {
        return hasSubtitle ?
            listTitles.map(
                (el, index) => (
                    <li>
                        <h4>{el}</h4>
                        <h5>{listSubtitles[index]}</h5>
                    </li>
                ))
            : listTitles.map((el) => (
                <li>
                    <h4>{el}</h4>
                </li>
            ))
    }
    return (
        <ContentJourneyStyle tema={temas}>
            <aside><div className="bar" /></aside>
            <div className="content">
                <div className="head">
                    <h1>
                        {MasterTitle}
                    </h1>
                </div>
                <article>
                    <ul>
                        {
                            renderLi()
                        }
                    </ul>
                </article>
            </div>
        </ContentJourneyStyle>
    )
}

function JourneySection() {
    const { themes } = useMyContext()
    const temas = themes ?? true
    const contextTranslate = UseTranslate()
    const { journey } = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en

    return (
        <InView onChange={(el) => { console.log(el) }}>
            <StyleJourneySection>
                <section id="jornada">
                    <div className="jornadaHead">
                        <TitleStyle tema={temas}>
                            {journey.title}
                        </TitleStyle>
                    </div>
                    <div className="conteiner">
                        <ContentJourney
                            hasSubtitle={true}
                            MasterTitle={journey.education.title}
                            listSubtitles={journey.education[2]}
                            listTitles={journey.education[1]}
                        />
                        <ContentJourney
                            hasSubtitle={false}
                            MasterTitle="Hard Skills"
                            listSubtitles={[]}
                            listTitles={journey.hard[1]}
                        />
                        <ContentJourney
                            hasSubtitle={false}
                            MasterTitle="Soft Skills"
                            listSubtitles={[]}
                            listTitles={journey.soft[1]}
                        />
                        <ContentJourney
                            hasSubtitle={false}
                            MasterTitle={journey.awards.title}
                            listSubtitles={[]}
                            listTitles={journey.awards[1]}
                        />
                    </div>
                </section>
            </StyleJourneySection>
        </InView>
    )
}
export default JourneySection