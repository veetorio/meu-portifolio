import styled from "styled-components";
import { Redirect, TitleStyle } from "./Main";
import "swiper/swiper-bundle.css"
import { IoCodeSlashOutline, IoLogoGithub } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { StyleConfig } from "../config/styles.config";
import { useMyContext } from "../context/ThemeContext";
import { pt_en } from "../config/Translate";
import { UseTranslate } from "../context/TranslateContext";



enum Gradients {
    BACKEND = "rgba(78,35,140,1)",
    FULLSTACK = "rgba(255,38,38,1)",
    FRONT = "rgba(68,88,217,1)",
    IOT = "#62fe65"
}


const { percent10 } = StyleConfig.light.colors
const StyleProjects = styled.section<{ tema: boolean }>`
    margin-top: 10rem;
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 4rem;
    .MySlide{
        color: black;
        width: 100%;
    }
    div{
        .conteiner{
            margin: auto;
            display: flex;
        }
        .link{
            background: transparent;
            margin-top: 3rem;
            width: 100%;
            padding: .5rem .25rem;
            border-radius: 2rem;
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center; 
            color: ${({ tema }) => tema ? "black" : "white"};
            border: 1px solid #6f6f6f;
            .i{
                font-size: 2rem;

            }
            transition: background 500ms;
            &:hover{
                background: ${percent10};
                color: white;
            }
        }
    }
`;
const ProjetoStyle = styled.section<{ typeProjeto: Gradients }>`
    height: 19rem;
    width: 25rem;
    padding: .75rem;
    border-radius: .5rem;
    .layer{
        border-radius: 1rem;
        background: ${({ typeProjeto }) => typeProjeto};
        height: 80%;
        width: 100%;
        display: flex;
        padding: 1rem;
        .content{
            border-radius: 1rem;
            height: 100%;
            width: 100%;
            background:white;


        }
    }
    nav{
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        div{
            h3{
                color: #3a3a3a;
                font-weight: 600;
            }
            h4{
                color: #a3a3a3;
                font-weight: 600;
            }
        }
        button{
            background: transparent;
            cursor: pointer;
            color: #3a3a3a;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: .5rem;
            font-size: 1.5rem;
            height: 3rem;
            width: 3rem;
            border: 1px solid #131313;
            border-radius: .5rem;
            &:hover{
                color: ${percent10} ;
                border-color: ${percent10};
            }
        }
    }


`;

const Projeto = (props: { name: string, tipoProjeto: Gradients }) => {
    const contextTranslate = UseTranslate()
    const {projects} = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en
    return (
        <ProjetoStyle typeProjeto={props.tipoProjeto}>
            <div className="layer">
                <div className="content"></div>
            </div>
            <nav>
                <div>
                    <h3>{props.name}</h3>
                    <h4>{projects.status[0]}</h4>
                </div>
                <div>
                    <button><IoCodeSlashOutline className="i" /></button>
                    <button><MdArrowOutward className="i" /></button>
                </div>
            </nav>
        </ProjetoStyle>
    )
}
function Projects() {
    const { themes } = useMyContext()
    const contextTranslate = UseTranslate()
    const {projects} = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en
    const temas = themes ?? true
    return (
        <StyleProjects tema={temas} id="projetos">
            <TitleStyle tema={temas}>{projects.title}</TitleStyle>
            <div>
                <div className="conteiner">
                    <Projeto tipoProjeto={Gradients.BACKEND} name="Projeto 1"></Projeto>
                    <Projeto tipoProjeto={Gradients.FRONT} name="Projeto 2"></Projeto>
                </div>
                <button className="link" onClick={() => { Redirect("https://github.com/veetorio?tab=repositories") }}> <h3>{projects.more}</h3><IoLogoGithub className="i" /></button>
            </div>
        </StyleProjects>
    )
}
export default Projects