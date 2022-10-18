import React, { ReactElement } from 'react'
import SideBar from '../sidebar/sidebar.component'

type Props = {
  content: ReactElement,
}

const Layout = (props: Props) => {

  return (
    <div className='flex'>
      <div className=''>
        <SideBar />
      </div>
      <div className=''>
        {props.content}
      </div>
    </div>
  )
}

export default Layout