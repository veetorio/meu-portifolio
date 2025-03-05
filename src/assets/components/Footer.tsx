import styled from "styled-components";
import { StyleConfig } from "../config/styles.config";
import { FormEvent } from "react";
import { useMyContext } from "../context/ThemeContext";
const { FrameColor } = StyleConfig.light.colors
const { percent10 } = StyleConfig.light.colors

const StyleFooter = styled.footer<{tema : boolean}>`
width: 100%;
background: ${FrameColor};
background: transparent;
margin-top: 16rem;
display: flex;
justify-content: center;
padding: 2rem;
aside{
    h1{
        
        color: ${({tema}) => tema ?  "black"  : "#a8a8a8"  } ;
        font-size: 2rem;
    }
    h2{
        animation: 5s back infinite alternate;
    }
    h5,h2{
        font-weight: 300;
        color: ${({tema}) => tema ?  "#575757"  : "#a8a8a8"  } ;
    }
    h5{
        width: 100%;
    }
    @keyframes back {
        to{
            color: ${percent10};
        }
    }
}
section , button , input , textarea{
    color: white;
    border-radius: .5rem;
    &:focus{
        outline: none;
        border: 1px solid ${percent10};
    }
}

section{
    padding: 2rem;
    display: flex;
    gap: 4rem;
    position: relative;
    &::after{
        width:100%;
        content: " ";
        position: absolute;
        height: 1px;
        background: linear-gradient(to right,transparent,${percent10},transparent);
        bottom: 0;
        
    }
    &::before{
        width: 100%;
        content: " ";
        position: absolute;
        height: 1px;
        top: 0;
        background: linear-gradient(to right,transparent,${percent10},transparent);

    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        width: 100%;
        gap: .5rem;
        input , textarea {
            padding: .5rem;
            width: 100%;
            resize: none;
            background: #dfdfdf;
            border: 1px solid #343434;
            background: rgba(255, 255, 255, 0.05);
            color: ${({tema}) => tema ?  "black"  : "white"  } ;
            

        }
        textarea{
            height: 20rem;
        }
        button{
            background: rgba(255, 255, 255, 0.05);
            width: 100%;
            height: fit-content;
            border: 1px solid #343434;

        }
    }
}
button{
    height: 200px;
    width: 200px;
}

`;
const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const bodyForm = new FormData(e.currentTarget,null)
    const bodySend = {
        name : bodyForm.get("name"),
        email : bodyForm.get("email"),
        message : bodyForm.get("message")
    }
    console.log(bodySend)

}
function Footer() {
    const {themes} = useMyContext()
    const temas = themes ?? true
    return (
        <StyleFooter tema={temas}>
            <section>
                <aside>
                    <h2>vamos conversar ?</h2>
                    <h1>Contato</h1>
                    <h5>Tem alguma pergunta ou projeto em mente? Sinta-se à vontade para entrar em contato.</h5>
                </aside>
                <form onSubmit={send} method="post">
                    <input type="text"  name="name" placeholder="nome"/>
                    <input type="text"  name="email" placeholder="email"/>
                    <textarea name="message" placeholder="mensagem"/>
                    <button type="submit">enviar</button>
                </form>
            </section>
        </StyleFooter>
    )
}
export default Footer