import { createContext, ReactNode, useContext, useState } from "react";
type ThemeProviderProps = {
    themes : boolean | null | undefined,
    setThemeProvider : () => void
}
const ThemeContextApp = createContext<ThemeProviderProps | undefined>(undefined)
const {Provider} = ThemeContextApp

export const ThemeProviderApp = ({children} : {children : ReactNode} ) => {
    const [themes , setThemes] = useState<boolean>(false)
    const setThemeProvider = () => setThemes(!themes)
    const values : ThemeProviderProps = {themes,setThemeProvider}
    return (
        <Provider value={{...values}}>
            {
                children
            }
        </Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => {
    const context = useContext(ThemeContextApp);
    if (!context) {
      throw new Error("useMyContext deve estar dentro do ThemeProviderApp");
    }
    return context
}