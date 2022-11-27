import React, { useState } from 'react'
// Libs
import { UUID } from '@uncover/js-utils'

const MenuCheckbox = ({
  checked,
  label,
  onChange,
}) => {

  // Hooks //

  const [id] = useState<string>(`menu-checkbox-${UUID.next()}`)

  // Rendering //

  return (
    <div className='menu-checkbox'>
      <input
        id={id}
        type='checkbox'
        name={label}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default MenuCheckbox