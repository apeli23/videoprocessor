import React, {useRef} from 'react';
import Process from '../components/process'
import Canvas from '../components/test'

export default function Home() {
  const video = useRef();
  const c_out = useRef(null); 

  return (
    <div>
      {/* <Process /> */}
      <Canvas />
    </div>
  )
}
