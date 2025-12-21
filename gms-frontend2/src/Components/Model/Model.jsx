import React from 'react'


const Model = ({handleClose,content,header}) => {
  return (
    
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-5 w-1/2'>
        <div className='flex justify-between p-5'>
          <div className='text-4xl font-semibold'>{header}</div>
          <div onClick={()=>handleClose()}> close</div>

        </div>
        <div className='mt-10'>{content}
      </div>
    </div>
    </div>
    
  )
}

export default Model

