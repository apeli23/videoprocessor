import React, {useRef} from 'react';
import Process from '../components/process'

export default function Home() {
  const video = useRef();
  const c_out = useRef(null); 

  return (
    <div>
      <Process />
    </div>
  )
}
