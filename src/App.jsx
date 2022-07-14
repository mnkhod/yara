import { useState } from 'react'
import { FallingEmojis } from 'falling-emojis';

function App() {
  return (
      <div className="min-h-screen bg-pink-300 flex-col w-full flex justify-center items-center p-10">
        <FallingEmojis emoji={'💖'} />
        <div className="flex flex-col gap-4 justify-center flex-grow items-center">
          <h1 className="text-4xl font-bold">Please Forgive Me</h1>
          <h5 className="text-2xl">~ mnk 💕</h5>
        </div>
        <div>
          <h5 className="text-lg">mnk + yara website</h5>
        </div>
      </div>
  )
}

export default App
