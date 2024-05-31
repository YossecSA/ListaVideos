import React from 'react'
import ReactDOM from 'react-dom/client'
import { ListVideo } from './views/ListVideo'
import { videos } from './data/videos'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ListVideo listVideo={videos} txtHeading={''} />
  </React.StrictMode>,
)
