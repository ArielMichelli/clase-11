import React from 'react'

const Video = (props) => {
    return (
        <video width={props.width} height={props.height} src={props.src} controls />
    )
}

export default Video