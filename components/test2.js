import React, { useRef, useEffect } from 'react'

const Test2 = props => {
    let video, c_out, ctx_out, c_tmp, ctx_tmp;

    const vid = useRef(null);
    const canvasRef = useRef(null)

    useEffect(() => {
        video = vid.current
        console.log('video', video)

        c_out = canvasRef.current
        var cw = c_out.width = 600;
        var ch = c_out.height = 400;
        console.log('canvas', c_out);

        ctx_out = c_out.getContext('2d')
        console.log('context', ctx_out);

        c_tmp = document.createElement('canvas')
        c_tmp.setAttribute("width", video.width)
        c_tmp.setAttribute("height", video.height);
        console.log('c_tmp', c_tmp);

        ctx_tmp = c_tmp.getContext('2d')
        console.log('ctx_tmp', ctx_tmp);

        video.addEventListener('play', function computeFrame() {
            ctx_tmp.drawImage(video, 0, 0, video.width, video.height);
            let frame = ctx_tmp.getImageData(0, 0, video.width, video.height);

            ctx_out.putImageData(frame, 0, 0);
            setTimeout(computeFrame, 0)
        })
    }, [])
    return (
        <div>
            <video crossOrigin="Anonymous" ref={vid} src='https://res.cloudinary.com/dogjmmett/video/upload/v1632248825/yt5s.com-Lady_Explaining_Green_Screen____No_Copyright_Free_Video____Vistan_Videos_720p_vs3jop.mp4' id='video' width='400' height='360' controls autoPlay muted loop type="video/mp4" />

            <canvas ref={canvasRef} {...props}></canvas>
        </div>
    )
}; export default Test2