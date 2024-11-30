import React from 'react'

const Loading = () => {
  return (
    
<div className="mt-8 flex justify-center w-11/12 ">
  <div className="shadow-lg rounded-xl p-6 w-full">
    <div className="flex justify-between w-full">
      <div className="flex items-center mb-6">
        <div className="w-6 h-6 mr-1 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-32 h-6 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
      <div className="w-24 h-4 bg-gray-300 rounded-md animate-pulse"></div>
    </div>

    <div className="hp:p-20 xl:p-16 flex items-center justify-center">
      <div className="w-20 h-20 bg-gray-300 rounded-full animate-pulse mr-4"></div>
      <div className="flex flex-col">
        <div className="w-40 h-10 bg-gray-300 rounded-md animate-pulse mb-2"></div>
        <div className="w-32 h-6 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>

    <div className="mt-4 flex hp:justify-center xl:justify-between lg:justify-between md:justify-between sm:justify-between p-2 hp:p-0 text-xl hp:text-base">
      <div className="flex items-center">
        <div className="w-7 h-7 bg-gray-300 rounded-full animate-pulse mr-2"></div>
        <div>
          <div className="w-24 h-4 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-md animate-pulse mt-1"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-7 h-7 bg-gray-300 rounded-full animate-pulse mr-2"></div>
        <div>
          <div className="w-24 h-4 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-16 h-4 bg-gray-300 rounded-md animate-pulse mt-1"></div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Loading
