import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd'
import actions from '../shared';

export default function Home() {
  const [name, setName] = useState('');
  const inputChange = e => {
    setName(e.target.value)
  }
  const login = () => {
    actions.setGlobalState({
      name
    })
  }
  useEffect(() => {
    actions.onGlobalStateChange((state, preState) => {
      console.log('main app state:', state)
      console.log('main app preState:', preState)
    })
    return () => {
      actions.offGlobalStateChange()
    }
  }, [])
  return (
    <div>
      <Input value={name} onChange={inputChange} placeholder="请输入用户名" />
      <Button type='primary' onClick={login}>登录</Button>
    </div>
  )
}
