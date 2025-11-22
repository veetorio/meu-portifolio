import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import { MdOutlineGTranslate } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useMyContext } from "../context/ThemeContext";
import Icon from "./shared/icons/Icons";
import { UseTranslate } from "../context/TranslateContext";
import { pt_en } from "../config/Translate";
import { FaHamburger } from "react-icons/fa";

const { calcTamanhoDeComponentes, light, dark } = StyleConfig
const { colors } = light
const { percent10, percent30 } = colors
const sizeIcon = 40;


const StyleHeader = styled.header<{ tema: boolean }>`
@media (max-width: 430px) {
    #hamburgue{
        display: block;
    }
    .conteiner{
        display: none;

        .links{
            display: none;
        }
    }
    bottom: 0;
}
#hamburgue{
    display: none;
}
height: ${calcTamanhoDeComponentes(80)};
width: 60%;
background:${({ tema }) => tema ? light.colors.percent60 : dark.colors.percent60}99;
backdrop-filter: blur(10px);
position: fixed;
border-radius: 4rem;
left: 50%;
top: 0;
transform: translateX(-50%);
margin-top: .5rem;
z-index: 2;


&::after{
    content:"";
    position:absolute;
    background:linear-gradient(to right,transparent,${percent10},transparent);
    bottom:0;
    height:1px;
    width: 100%;
}
.conteiner{
    padding: 0 4rem;
    height: 100%;
    display: flex;
    align-items:center ;
    justify-content: space-between;
    position: relative;
    .actions{
    display: flex;
    gap: 2rem;
    .icon{
        cursor: pointer;
        height: ${calcTamanhoDeComponentes(sizeIcon)};
        width: ${calcTamanhoDeComponentes(sizeIcon)};
        font-size: clamp(.5rem, 0.7703rem + 0.8547vw, 1rem);
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ tema }) => tema ? percent30 : "white"};
    }
    .LightOrDark{
        background-color: ${({ tema }) => tema ? percent30 : "white"};
        border-radius: 50%;
        color: ${({ tema }) => tema ? "white" : "black"};
        cursor: pointer;
    }
    .translateMode{
        font-size: 1.7rem;
    }
    .iconPage{
        img{
            height: 100%;
            width: 100%;
        }
    }
}
    .links{
        display: flex;
        gap: 1rem;
        a{
            font-size: clamp(.5rem, 0.9527rem + 0.641vw, 1rem);
            font-weight: 600;
            text-decoration: none;
            color: ${({ tema }) => tema ? "black" : "white"};
            transition: .5s;
            cursor: pointer;
            &:hover{
                color: ${percent10};
            }
        }


    }

   
}

`;
function Header() {
    const contextTheme = useMyContext()
    const contextTranslate = UseTranslate()
    const { header } = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en
    const toggle = () => {
        contextTheme.setThemeProvider();
    }
    const translate = () => {
        contextTranslate?.switchLang()
    }
    return (
        <StyleHeader tema={contextTheme.themes ?? false}>
            <div className="conteiner">
                <div className="actions">
                    <div className="iconPage icon"><Icon /></div>
                    <button className="LightOrDark icon" onClick={toggle}>
                        <IoMoonOutline />
                    </button>
                    <button className="translateMode icon" onClick={translate}>
                        <MdOutlineGTranslate />
                    </button>
                </div>
                <div className="links">
                    <a href="#sobre-mim">{header.links[1]}</a>
                    <a href="#jornada">{header.links[2]}</a>
                    <a href="#stack" translate="no">{header.links[3]}</a>
                    <a href="#projetos" translate="no">{header.links[4]}</a>
                    <button id="hamburgue">
                        <FaHamburger></FaHamburger>
                    </button>
                </div>
            </div>
        </StyleHeader>
    )
}
export default Header