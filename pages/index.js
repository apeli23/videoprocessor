import React, {useRef} from 'react';
import Process from '../components/process'
import Canvas from '../components/test'
import Test from '../components/test2'

export default function Home() {
  const video = useRef();
  const c_out = useRef(null); 

  return (
    <div>
      {/* <Process /> */}
      {/* <Canvas /> */}
      <Test />
    </div>
  )
}
