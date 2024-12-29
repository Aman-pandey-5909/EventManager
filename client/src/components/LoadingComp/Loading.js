import React from 'react'
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div className='loadbar-container z-50 w-full'>
      <span className={`${styles.loadbar}`}></span>
    </div>
  )
}

export default Loading
