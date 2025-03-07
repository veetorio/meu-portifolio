import styled from "styled-components";
import { TitleStyle } from "./Main";
import { StyleConfig } from "../config/styles.config";
import Spring from "./shared/icons/Spring";
import Javascript from "./shared/icons/Javascript";
import Java from "./shared/icons/Java";
import React from "./shared/icons/React";
import CssSvg from "./shared/icons/Css";
import Html from "./shared/icons/Html";
import Ts from "./shared/icons/Ts";
import MySql from "./shared/icons/MySql";
import Git from "./shared/icons/Git";
import Postgress from "./shared/icons/Postgres";
import { useMyContext } from "../context/ThemeContext";
import { pt_en } from "../config/Translate";
import { UseTranslate } from "../context/TranslateContext";
const { calcTamanhoDeComponentes, light, dark } = StyleConfig
const StyleMyStack = styled.div<{ tema: boolean }>`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: ${calcTamanhoDeComponentes(90)};
    .conteiner{
        width: ${calcTamanhoDeComponentes(744)};
        overflow: hidden;
        white-space: nowrap;
        display: flex;
        position: relative;
        &::after{
            transition: background 1s;
            content: " ";
            position: absolute;
            width: 2.5rem;
            height: 100%;
            background: linear-gradient(to left,${({ tema }) => tema ? light.colors.percent60 : dark.colors.percent60},transparent);
            z-index: 1;
            right: 0;
            
        }
        &::before{
            transition: background 1s;
            content: " ";
            position: absolute;
            z-index: 1;
            left: 0;
            width: 2.5rem;
            height: 100%;
            background: linear-gradient(to right,${({ tema }) => tema ? light.colors.percent60 : dark.colors.percent60},transparent);
        }
        .slide{
            display: flex;
            align-items: center;
            animation: move 10s linear infinite;
        }
        @keyframes move {
            from{
                transform: translateX(0%);
            }
            to{
                transform: translateX(-100%);
            }
            
        }
        
    }
    
    `;

const Item = styled.div`
    margin-left: 10px;
    display: inline-block;
    padding-inline-start: 1rem;
    height: ${calcTamanhoDeComponentes(80)};
    width: ${calcTamanhoDeComponentes(80)};
    align-content: center;
    transition: 1s;

    &:hover{
        transform: translateY(-.5rem);
    }

`

function MyStack() {
    const { themes } = useMyContext()
    const contextTranslate = UseTranslate()
    const { stack } = contextTranslate?.lang === "pt_br" ? pt_en.pt : pt_en.en


    return (
        <StyleMyStack tema={themes ?? true} id="stack">
            <TitleStyle tema={themes ?? true}>{stack}</TitleStyle>
            <div className="conteiner">
                <div className="slide">
                    <Item className="item"><Spring /></Item>
                    <Item className="item"><Javascript /></Item>
                    <Item className="item"><Java /></Item>
                    <Item className="item"><CssSvg /></Item>
                    <Item className="item"><React /></Item>
                    <Item className="item"><Html /></Item>
                    <Item className="item"><Ts /></Item>
                    <Item className="item"><MySql /></Item>
                    <Item className="item"><Git /></Item>
                    <Item className="item"><Postgress /></Item>

                </div>
                <div className="slide">
                    <Item className="item"><Spring /></Item>
                    <Item className="item"><Javascript /></Item>
                    <Item className="item"><Java /></Item>
                    <Item className="item"><CssSvg /></Item>
                    <Item className="item"><React /></Item>
                    <Item className="item"><Html /></Item>
                    <Item className="item"><Ts /></Item>
                    <Item className="item"><MySql /></Item>
                    <Item className="item"><Git /></Item>
                    <Item className="item"><Postgress /></Item>

                </div>
            </div>
        </StyleMyStack>
    )
}
export default MyStack