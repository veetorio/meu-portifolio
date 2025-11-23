import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import { IoIosArrowForward } from "react-icons/io";
import { useMyContext } from "../context/ThemeContext";
import { UseTranslate } from "../context/TranslateContext";
import { pt_en } from "../config/Translate";

const { calcTamanhoDeComponentes, light, dark } = StyleConfig
const StyleMain = styled.main`
position: relative;
margin: 10rem ${calcTamanhoDeComponentes(110)};
padding: ${calcTamanhoDeComponentes(12)} ${calcTamanhoDeComponentes(100)};
display: flex;
flex-flow: column wrap;

.conteinerMain{
    display:flex ;
    flex-flow: row wrap;
    gap: 4rem;
    h2 { 
        font-size: clamp(1.125rem, 0.9527rem + 0.641vw, 1.5rem);
    }
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
                    font-size: clamp(1.125rem, 0.9527rem + 0.641vw, 1.5rem);
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

@media (max-width: 430px) {
    margin: auto;
    padding: ${calcTamanhoDeComponentes(16)} ${calcTamanhoDeComponentes(52)};
    .conteinerHead {
        display: flex;
        justify-content: center;
    }
    .conteinerMain{
        aside {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
        h5{
            width: ${calcTamanhoDeComponentes(300)};
        }
    }
    img { 
        display: none;
    }
}
    
}
    
`;
const Contatos = styled.div`
display: flex;
align-items: center;
gap: 4rem;
width:10rem;
position: relative;
cursor: pointer;

@media (max-width: 430px) {
    background-color: pink;
    
}
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
    const { sobre } = translate?.lang === "pt_br" ? pt_en.pt : pt_en.en


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
                                    <Contatos onClick={() => {
                                        const link = document.createElement("a");
                                        link.download = 'curriculo';
                                        link.href = "../../../public/Currículo (4).pdf";
                                        link.click();

                                    }}>
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
                <img src="/perfil/perfil.jpg" alt="" />
            </div>
        </StyleMain >
    )
}
export default Main