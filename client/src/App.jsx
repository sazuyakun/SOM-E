import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import {Home, CreatePost} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className = 'w-full flex justify-between items-center bg-transparent sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to = "/">
          <img src = {logo} alt = "logo" className='w-10'/>
        </Link>
      
        <Link to="/create-post">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md text-black group-hover:bg-opacity-0 group-hover:text-white">
Generate
</span>
</button>
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-slate-100 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/create-post" element = {<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App