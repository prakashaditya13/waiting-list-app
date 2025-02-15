import React from 'react'

const ToastMessage = ({text, textStyleClass, toastStyleClass, }) => {
  return (
    <div className={`__toastChip__container ${toastStyleClass}`}>
        <p className={`${textStyleClass}`}>
            {text}
        </p>
    </div>
  )
}

export default ToastMessage