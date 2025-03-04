export const StyleConfig = {
    calcTamanhoDeComponentes : ( sizePx : number ) => (sizePx/16).toString().concat("rem"),
    light : {
        colors : {
            percent60 : "#EAEAF3",
            percent30 : "#4E238C",
            percent10 : "#8E44D9",
            FrameColor : "#05050D",

        },
        gradients : {
            whiteAndPurple : "linear-gradient(to right,#fff 22%,#4E238C 88%)",
            blackAndPurple : "linear-gradient(to right,#000 0%,#8E44D9 40%)"
        }
    },
    dark : {
        colors : {
            percent60 : "#05050D",
            percent30 : "#4E238C",
            percent10 : "#8E44D9",
            Framecolor : "#EAEAF3",

        },
        gradients : {
            PurpleBlackAndPurple : "linear-gradient(to right,#4E238C,#8E44D9)",
            blackAndPurple : "linear-gradient(to right,#000,#8E44D9)"
        }
    },
}