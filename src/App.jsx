import React from 'react'

import Header from './component/Header'
import List from './component/List'

import './App.css'

export default function App() {
  return (
    <div style={{ backgroundColor: '#f1f3f4' }}>
      <div style={{ paddingLeft: '50px', color: '#212121', fontSize: '18px', backgroundColor: '#f1f3f4' }}>Change Log</div>
      <Header></Header>
      <List></List>
    </div>
  )
}
