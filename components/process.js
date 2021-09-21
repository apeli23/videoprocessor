import React, { useRef, useEffect } from 'react'

const Process = props => {
    let video, c_out, ctx_out, c_tmp, ctx_tmp;

    const vid = useRef(null);
    c_out = useRef(null);

    useEffect(() => {
        video = vid.current
        console.log('video', vid.current)
        
        const canvas = c_out.current
        console.log('canvas', canvas);

        const context = canvas.getContext('2d')
        console.log('context', context);

        //Our draw come here
        c_tmp = document.createElement('canvas')
        c_tmp.setAttribute("width", 400)
        c_tmp.setAttribute("height", 360)
        ctx_tmp = c_tmp.getContext('2d')

        video.addEventListener('play', computeFrame())
    }, [])

    function computeFrame() {
        ctx_tmp.drawImage(video, 0, 0, video.width, video.height);
        let frame = ctx_tmp.getImageData(0, 0, video.width, video.height);

        ctx_out.current.putImageData(frame, 0, 0);
        setTimeout(computeFrame, 0)

    }

    return (
        <div>
            <video ref={vid} src='https://res.cloudinary.com/dogjmmett/video/upload/v1632248825/yt5s.com-Lady_Explaining_Green_Screen____No_Copyright_Free_Video____Vistan_Videos_720p_vs3jop.mp4' id='video' width='400' height='360' controls autoPlay muted loop type="video/mp4" />

            <canvas ref={c_out} {...props}></canvas>
        </div>
    )
}; export default Process;