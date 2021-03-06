import React, { useRef, useEffect } from 'react'

const Test2 = props => {
    let video, video2, c_out, ctx_out, c_tmp, ctx_tmp;

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

        video2 = document.createElement('canvas')
        video2.scr = 'https://res.cloudinary.com/dogjmmett/video/upload/v1632732360/yt5s.com-Fire_effects_video_720p_kissbm.mp4'
        video2.muted = true;
        video2.loop = true;
        video2.autoplay = true;

        c_tmp = document.createElement('canvas')
        c_tmp.setAttribute("width", video.width)
        c_tmp.setAttribute("height", video.height);
        console.log('c_tmp', c_tmp);

        ctx_tmp = c_tmp.getContext('2d')
        console.log('ctx_tmp', ctx_tmp);

        video.addEventListener('play', function computeFrame() {
            ctx_tmp.drawImage(video, 0, 0, video.width, video.height);
            let frame = ctx_tmp.getImageData(0, 0, video.width, video.height);

            ctx_tmp.drawImage(video2, 0, 0, video2.width, video2.height);
            let frame2 = ctx_tmp.getImageData(0, 0, video2.width, video2.height);


            for (let i = 0; i < frame.data.length / 4; i++) {
                let r = frame.data[i * 4 + 0];
                let g = frame.data[i * 4 + 1];
                let b = frame.data[i * 4 + 2];
                
                if (r > 70 && r < 160 && g > 95 && g < 220 && b > 25 && b < 150) {
                    frame.data[i * 4 + 0] = frame2.data[i * 4 + 0];//r
                    frame.data[i * 4 + 1] = frame2.data[i * 4 + 1];//g
                    frame.data[i * 4 + 2] = frame2.data[i * 4 + 2];//b
                }
            }

            ctx_out.putImageData(frame, 0, 0);
            setTimeout(computeFrame, 0)
        })
    }, [])
    return (
        <div>
            <video crossOrigin="Anonymous" ref={vid} src='https://res.cloudinary.com/dogjmmett/video/upload/v1632221403/sample_mngu99.mp4' id='video' width='400' height='360' controls autoPlay muted loop type="video/mp4" />

            <canvas ref={canvasRef} {...props}></canvas>
        </div>
    )
}; export default Test2