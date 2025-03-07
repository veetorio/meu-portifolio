import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import { IoIosArrowForward } from "react-icons/io";
import { useMyContext } from "../context/ThemeContext";
import { UseTranslate } from "../context/TranslateContext";
import { pt_en } from "../config/Translate";

const { calcTamanhoDeComponentes, light, dark } = StyleConfig
const StyleMain = styled.main`
position: relative;
z-index: 1;
margin: 10rem ${calcTamanhoDeComponentes(110)};
padding: ${calcTamanhoDeComponentes(12)} ${calcTamanhoDeComponentes(100)};
display: flex;
flex-flow: column wrap;
.conteinerHead{
    
}
.conteinerMain{
    display:flex ;
    gap: 4rem;
    aside{
        h5{
            width: ${calcTamanhoDeComponentes(456)};
            color:#696969;
        }
        h2{
            margin-top: .5rem;
        }
        div{
            display: flex;
            gap: 4rem;
            article{
                h2{
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    font-weight: 400;
                }
                ul{
                    display: flex;
                    flex-flow: column wrap;
                    gap: 1rem;
                    li{
                        list-style: none;
                        .details{
                            font-size: ${calcTamanhoDeComponentes(14)};
                            color: #686868;
                            font-weight: 600;
                            margin-left: .5rem;
                        }
                    }
                }
            }
        }

    }
}


img{
    height: 300px;
    width: 300px;
    background: #686868;
}

    

`;
const Contatos = styled.div`
display: flex;
align-items: center;
gap: 4rem;
width:10rem;
position: relative;
cursor: pointer;


&::after{
    content: " ";
    position: absolute;
    height: 1px;
    bottom: 0;
    width: 100%;
    background:linear-gradient(to right,transparent,${light.colors.percent10});
    transform-origin: left;
    transform: scaleX(0);
    transition: 1s;
}
&:hover::after , &:hover{
    transform: scaleX(1);
    color: ${light.colors.percent10};
}

.iconArrow{
    margin-left: auto;
}


`

export const TitleStyle = styled.h1<{ tema: boolean }>`
    font-weight: 600;
    background: ${({ tema }) => tema ? light.gradients.blackAndPurple : dark.gradients.PurpleBlackAndPurple};
    background-clip: text;
    font-size: 2rem;
    color: transparent;
    width: fit-content;



`
export const Redirect = (url: string) => {
    location.href = url
}


function Main() {
    const { themes } = useMyContext()
    const date = new Date()
    const age = date.getFullYear() - 2006
    const translate = UseTranslate()
    const {sobre} = translate?.lang === "pt_br" ? pt_en.pt : pt_en.en
    

    return (
            <StyleMain id="sobre-mim">
                <div className="conteinerHead">
                    <TitleStyle tema={themes ?? true}>{sobre.title}</TitleStyle>
                </div>
                <div className="conteinerMain">
                    <aside>
                        <h5>{sobre.phrase}</h5>
                        <h2>{sobre.profession}</h2>
                        <div>
                            <article>
                                <h2>{sobre.contact}</h2>
                                <ul>
                                    <li>
                                        <Contatos onClick={() => { Redirect("https://github.com/veetorio") }}>
                                            <span>GitHub</span><IoIosArrowForward className="iconArrow" />
                                        </Contatos>
                                    </li>
                                    <li>
                                        <Contatos onClick={() => { Redirect("https://www.linkedin.com/in/ettore-vitorio-b38135280/") }}>
                                            <span>Linkedin</span><IoIosArrowForward className="iconArrow" />
                                        </Contatos>
                                    </li>
                                    <li>
                                        <Contatos onClick={() => { Redirect("../../../public/Currículo (4).pdf") }}>
                                            <span>CV</span><IoIosArrowForward className="iconArrow" />
                                        </Contatos>
                                    </li>
                                </ul>
                            </article>
                            <article>
                                <h2>{sobre.details.title}</h2>
                                <ul>
                                    <li>
                                        <span>{sobre.details.name} :</span><span className="details"> Ettore Vitorio</span>
                                    </li>
                                    <li>
                                        <span>{sobre.details.age} :</span><span className="details">{age} {translate?.lang === "pt_br" ? "anos" : "years"}</span>
                                    </li>
                                    <li>
                                        <span>{sobre.details.nationality[0]} :</span><span className="details">{sobre.details.nationality[1]}</span>
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </aside>
                    <img src="../../../public/image.png" alt="" />
                </div>
            </StyleMain >
    )
}
export default Main