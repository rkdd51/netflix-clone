import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className="pt-36 px-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="w-1/4 py-6 text-lg">{description}</p>
      <div className="flex gap-4">
        <button className="bg-gray-500 text-black p-3 rounded-md w-28">
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
