import './App.scss'
import { Input, Button } from 'antd-mobile'
import { useState } from 'react'

export default function App() {
  console.log('App render')
  const [value, setValue] = useState('')
  const addItem = (e) => {
    console.log(e)
  }
  return (
    <div className="app">
      <p>input value: {value}</p>
      <Input
        type="text"
        clearable
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="please input something"
      />
      <br />
      <Button color="primary" block onClick={() => addItem()}>
        Add
      </Button>
    </div>
  )
}
