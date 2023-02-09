import {createRoot} from 'react-dom/client'
import App from './App'

const nodeDom = document.getElementById('root')
const root = createRoot(nodeDom)
root.render(<App />)