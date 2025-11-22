import styled from "styled-components";
import { Redirect, TitleStyle } from "./Main";
import { ToastContainer, toast } from 'react-toastify';
import "swiper/swiper-bundle.css"
import { IoCodeSlashOutline, IoLogoGithub } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { StyleConfig } from "../config/styles.config";
import { useMyContext } from "../context/ThemeContext";
import { pt_en } from "../config/Translate";
import { UseTranslate } from "../context/TranslateContext";



// enum Gradients {
//     BACKEND = "rgba(78,35,140,1)",
//     FULLSTACK = "rgba(255,38,38,1)",
//     FRONT = "rgba(68,88,217,1)",
//     IOT = "#62fe65"
// }


const { percent10 } = StyleConfig.light.colors
const StyleProjects = styled.section<{ tema: boolean }>`
    margin-top: 10rem;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    gap: 4rem;
    .MySlide{
        color: black;
        width: 100%;
    }
    div{
        .conteiner{
            margin: auto;
            display: flex;
            width:60%;
            flex-flow: row wrap;
            gap: 1rem 0;
        }
        .link{
            background: transparent;
            margin: 1.5rem auto ;
            width: 60%;
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
const ProjetoStyle = styled.section`
    height: 19rem;
    width: 25rem;
    padding: .75rem;
    border-radius: .5rem;
    .layer{
        border-radius: 1rem;
        height: 80%;
        width: 100%;
        display: flex;
        .content{
            border-radius: 1rem;
            height: 100%;
            width: 100%;
            img {
                border-radius: 2rem 2rem 0 0;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }


        }
    }
    nav{
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        div{
            h3{
                color: #a3a3a3;
                font-weight: 600;
            }
            h4{
                color: #3a3a3a;
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
type Path = string
enum TipoProjeto { FRONTEND = "frontend" , BACKEND = "backend" , MOBILE = "mobile", IOT = "IOT" }
type ProjetoProps = {
    name?: string,
    src?: Path,
    tipoDoProjeto : TipoProjeto, 
    linkDoProjeto?: Path,
    linkDoDeploy?: Path
}
const Projeto = (props: ProjetoProps) => {
    const contextTranslate = UseTranslate()
    const { projects } = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en
    const redirecionarDeploy = () => {
        if (!props.linkDoDeploy) {
            toast.error("link do deploy esta indisponivel")
        } else {
            window.location.assign(props.linkDoDeploy ?? "");
        }
    }
    const redirecionarRepo = () => {
        if (!props.linkDoProjeto) {
            toast.error("link do projeto esta indisponivel")
        } else {
            window.location.assign(props.linkDoProjeto ?? "");
        }
    }
    return (
        <ProjetoStyle>
            <div className="layer">
                <div className="content">
                    <img src={props.src ?? "../../../public/mockups/default.png"} alt="" />
                </div>
            </div>
            <nav>
                <div>
                    <h3>{props.name ?? "Para o futuro"}</h3>
                    <h4>{projects.status[0]}</h4>
                    <h4>{props.tipoDoProjeto}</h4>
                </div>
                <div>
                    <button onClick={redirecionarDeploy}><IoCodeSlashOutline className="i" /></button>
                    <button onClick={redirecionarRepo}><MdArrowOutward className="i" /></button>
                </div>
            </nav>
        </ProjetoStyle>
    )
}
function Projects() {
    const { themes } = useMyContext()
    const contextTranslate = UseTranslate()
    const { projects } = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en
    const temas = themes ?? true
    return (
        <StyleProjects tema={temas} id="projetos">
            <ToastContainer />
            <TitleStyle tema={temas}>{projects.title}</TitleStyle>
            <div>
                <div className="conteiner">
                    <Projeto src="../../../public/mockups/MOCKUPS (1).png" linkDoDeploy="https://expo.dev/accounts/vee-dev/projects/super_hat/builds/866a499f-622a-4b76-acdd-a716589b8454" linkDoProjeto="https://github.com/veetorio/Beary-App" tipoDoProjeto={TipoProjeto.MOBILE} name="Beary"></Projeto>
                    <Projeto src="../../../public/mockups/pollen.png" linkDoProjeto="https://github.com/veetorio/pollen-api" tipoDoProjeto={TipoProjeto.BACKEND} name="Pollen API"></Projeto>
                    <Projeto tipoDoProjeto={TipoProjeto.BACKEND}></Projeto>
                    <Projeto tipoDoProjeto={TipoProjeto.MOBILE}></Projeto>
                </div>
                <button className="link" onClick={() => { Redirect("https://github.com/veetorio?tab=repositories") }}> <h3>{projects.more}</h3><IoLogoGithub className="i" /></button>
            </div>
        </StyleProjects>
    )
}
export default Projects