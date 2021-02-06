import React, { useEffect, useState } from 'react'
import SharedModule from '../shared';

export default function Home() {
  const [name, setName] = useState('');
  useEffect(() => {
    const shared = SharedModule.getShared()
    setName(shared.getName())
  }, [])
  return (
    <div>
      我是React微应用的主页 { name }
    </div>
  )
}
