import React, { useEffect, useState } from 'react'
import actions from '../shared';

export default function Home() {
  const [name, setName] = useState('');
  useEffect(() => {
    actions.onGlobalStateChange(state => {
      console.log('micro app react state', state)
      setName(state.name)
    }, true)
  }, [])
  return (
    <div>
      我是React微应用的主页 { name }
    </div>
  )
}
