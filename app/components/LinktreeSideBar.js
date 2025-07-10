import React from 'react'
import { MdDelete } from 'react-icons/md'

const LinktreeSideBar = ({ allLinkTrees, changeLinkTree, setshowLinktreeSideBar, handleDelete }) => {
  return (
    <div>
      <div className="fixed top-0 right-0 h-full w-full sm:w-72 bg-gray-800 text-white shadow-lg z-50 p-4 transition-all duration-300 max-w-xs sm:max-w-none">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Handles</h2>
          <button onClick={() => setshowLinktreeSideBar(false)} className="text-white text-2xl sm:text-2xl hover:text-red-500 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-400">
            &times;
          </button>
        </div>
        <ul className="space-y-2">
          {allLinkTrees.map((item) => (
            <li key={item._id} className="bg-gray-700 flex justify-between p-3 sm:p-2 rounded hover:bg-gray-600 cursor-pointer text-base sm:text-base">
              <div onClick={() => changeLinkTree(item.handle)} className='w-full'>
                {item.handle}
              </div>
              <button onClick={() => handleDelete(item.handle)}>
                <MdDelete  size={20} color="white" className='cursor-pointer' />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LinktreeSideBar
