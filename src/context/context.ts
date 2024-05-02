import { createContext } from 'react'

import { IContext } from './IContext'

import { defaultContext } from './defaultContext'

const Context = createContext<IContext>(defaultContext)

export default Context