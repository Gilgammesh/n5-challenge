import React, { createContext, useState } from 'react'

type Lang = 'es' | 'en'
interface Item {
  type: 'serie' | 'movie' | null
  id: number | null
  title: string
}
interface AppContextProps {
  lang: Lang
  item: Item
  setLang: (value: Lang) => void
  setItem: (value: Item) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [lang, setLang] = useState<Lang>('es')
  const [item, setItem] = useState<Item>({
    type: null,
    id: null,
    title: ''
  })

  const value: AppContextProps = {
    lang,
    item,
    setLang,
    setItem
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
