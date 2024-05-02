import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className="pt-[20%] px-12 absolute z-10 bg-gradient-to-r from-black w-screen aspect-video">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="w-1/4 py-6 text-lg text-white">{description}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-3 rounded-md w-28 hover:opacity-75">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white rounded-md w-28">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle
