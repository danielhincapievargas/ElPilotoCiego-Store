import React from 'react'
import styles from './modal.module.css'

const Modal = ({ isOpen, title, text, children }) => {
  return (
    <>
      <div className={
        isOpen
        ?
        `${styles.modal_overlay} ${styles.modal_open}`
        :
        `${styles.modal_overlay} ${styles.modal_closed}`}
      >
      <div className={styles.modal_container}>
        <div className={styles.modal_title}>{title}</div>
        <p>{text}</p>
        {children}
      </div>
    </div>
    </>
  )
}

export default Modal