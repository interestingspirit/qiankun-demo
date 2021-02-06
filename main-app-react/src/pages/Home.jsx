import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd'
// import actions from '../shared';
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const inputChange = e => {
    setName(e.target.value)
  }
  const login = () => {
    dispatch({
      type: 'SET_NAME',
      payload: name
    })
  }
  return (
    <div>
      <Input value={name} onChange={inputChange} placeholder="请输入用户名" />
      <Button type='primary' onClick={login}>登录</Button>
    </div>
  )
}
