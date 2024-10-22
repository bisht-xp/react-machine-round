import React from 'react'

const ClickOutSide = ({children, onCancel}) => {
  return (
    <div className="backdrop" onClick={onCancel}>{children}</div>
  )
}

export default ClickOutSide