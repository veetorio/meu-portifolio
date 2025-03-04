import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import { MdOutlineGTranslate } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

const { calcTamanhoDeComponentes, light } = StyleConfig
const { colors } = light
const { percent10, percent30 } = colors
const sizeIcon = 40;
// const setTranslate = () =>{

// }
// const setTheme = () =>{

// }
const StyleHeader = styled.header`
height: ${calcTamanhoDeComponentes(80)};
width: 100%;
background:#fff;
top: 0;
position: fixed;
z-index: 2;
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
        height: ${calcTamanhoDeComponentes(sizeIcon)};
        width: ${calcTamanhoDeComponentes(sizeIcon)};
        font-size: 1.5rem;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${percent30};
    }
    .LightOrDark{
        background-color: ${percent30};
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
    }
    .translateMode{
        font-size: 2rem;
        cursor: pointer;
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
            font-size: 1.5rem;
            font-weight: 600;
            text-decoration: none;
            color: black;
            transition: .5s;
            cursor: pointer;
            &:hover{
                color: ${percent10};
            }
        }


    }
   
}
    &::after{
        content:"";
        position:absolute;
        background:linear-gradient(to right,transparent,${percent10},transparent);
        bottom:0;
        height:2px;
        width: 100%;
    }
`;
function Header() {
    return (
        <StyleHeader>
            <div className="conteiner">
                <div className="actions">
                    <div className="iconPage icon"><img src="../../../public/sonic-runners-svgrepo-com 1.svg" alt="" /></div>
                    <button className="LightOrDark icon">
                        <IoMoonOutline />
                    </button>
                    <button className="translateMode icon">
                        <MdOutlineGTranslate />
                    </button>
                </div>
                <div className="links">
                    <a href="#sobre-mim">sobre</a>
                    <a href="#jornada">jornada</a>
                    <a href="#stack" translate="no">stack</a>
                    <a href="#projetos" translate="no">projetos</a>
                </div>
            </div>
        </StyleHeader>
    )
}
export default Header