import React from 'react'
import { Button } from 'primereact/button';

const SideBar = () => {
  return (
    <div className='w-full h-full flex flex-col m-3 gap-3'>
      <Button className="p-button p-button-success h-16 w-16"> 
        <i className="pi pi-home m-auto" style={{fontSize: '1.4rem'}} />
      </Button>
      <Button className="p-button p-button-warning h-16 w-16"> 
        <i className="pi pi-calendar m-auto" style={{fontSize: '1.4rem'}} />
      </Button>
      <Button className="p-button p-button-danger h-16 w-16"> 
        <i className="pi pi-sign-out m-auto" style={{fontSize: '1.4rem'}} />
      </Button>
    </div>
  )
}

export default SideBar