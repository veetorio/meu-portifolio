import { createContext, ReactNode, useContext, useState } from "react";

type Lang = {
    lang: string | 'pt_br' | 'en',
    switchLang: () => void
}

const TranslateContext = createContext<Lang | null>(null)

export const TranslateProvider = (props : { children: ReactNode }) => {
    const [lang,setLang] = useState('pt_br');
    const switchLang = () => setLang(lang === 'pt_br' ? 'en' : 'pt_br')
    return (
        <TranslateContext.Provider value={{lang,switchLang}}>
            {
                props.children
            }
        </TranslateContext.Provider>
    )
}
export const UseTranslate = () => {
    return useContext(TranslateContext)
}