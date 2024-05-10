import { ArrowBack, ArrowForward } from '@mui/icons-material'
import React from 'react'

const Pagination = ({pageNo,prevPage,nextPage}) => {
  return (
    <div className='pagination'>
         <div onClick={prevPage} className="arrow">
            <ArrowBack/>
        </div>
        <div className="page-num">
            {pageNo}
        </div>
        <div onClick={nextPage} className="arrow">
            <ArrowForward/>
        </div>
    </div>
  )
}

export default Pagination