import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  const year = new Date().getFullYear();
  
  return (
    <CFooter fixed={false}>
      <div>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">MLNVENTORY_UI</a> */}
        <span className="ml-1">&copy; {year} Redcarpet Admin</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered By - </span>
        <a href="#" target="_blank" rel="noopener noreferrer">Angelsoft Technology</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
