import React, { useRef, useEffect } from 'react'

const Canvas = props => {
    let video, c_out, ctx_out, c_tmp, ctx_tmp;
    const vidRef = useRef()
    // console.log('vidRef', vidRef)
    const canvasRef = useRef(null)
    // console.log('canvasRef', canvasRef)

    const computeFrame = (ctx_tmp) => {
        ctx_tmp.drawImage(video, 0, 0, video.width, video.height);
        console.log('computeFrame_ctx', ctx_tmp);

        let frame = ctx_tmp.getImageData(0, 0, video.width, video.height);
        // console.log('frame', frame)
        // setTimeout(computeFrame,0)
    }

    useEffect(() => {
        video = vidRef.current
        console.log('current_video', video)

        c_out = canvasRef.current
        console.log('c_out', c_out)

        ctx_out = c_out.getContext('2d')
        console.log('ctx_out', ctx_out)


        c_tmp = document.createElement('canvas')
        c_tmp.setAttribute("width", 400)
        c_tmp.setAttribute("height", 360)
        console.log('c_tmp', c_tmp)


        ctx_tmp = c_tmp.getContext('2d')
        console.log('ctx_tmp', ctx_tmp);

        video.addEventListener('play', computeFrame(ctx_tmp))


    }, [computeFrame])



    return (
        <div>
            <video src='https://res.cloudinary.com/dogjmmett/video/upload/v1632248825/yt5s.com-Lady_Explaining_Green_Screen____No_Copyright_Free_Video____Vistan_Videos_720p_vs3jop.mp4' id='video' ref={vidRef} width='400' height='360' controls autoPlay muted />
            <canvas crossOrigin='anonymous' ref={canvasRef} {...props} />
        </div>
    )
};
export default Canvas