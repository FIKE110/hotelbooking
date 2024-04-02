import React from 'react'
import { Link } from 'react-router-dom'

const Linker = ({path,children}:{path:string,children:React.ReactNode}) => {
  return (
        <Link style={{textDecoration:'none'}} to={path}>{children}</Link>
  )
}

export default Linker