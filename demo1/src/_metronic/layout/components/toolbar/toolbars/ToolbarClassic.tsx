/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import Select from 'react-select'
import {KTSVG} from '../../../../helpers'
import {CreateAppModal, Dropdown1} from '../../../../partials'
import {useLayout} from '../../../core'

const ToolbarClassic = (props: any) => {
  const {config} = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const daterangepickerButtonClass = config.app?.toolbar?.fixed?.desktop
    ? 'btn-light'
    : 'bg-body btn-color-gray-700 btn-active-color-primary'

  const optionsDistrict = [
    {value: 'Kigamboni district', label: 'Kigamboni district'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ]
  const optionsYear = [
    {value: 'July 2023', label: 'July 2023'},
    {value: 'June 2023', label: 'June 2023'},
    {value: 'May 2023', label: 'May 2023'},
  ]
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: 'auto',
      height: '50px',
      borderRadius: '8px',
      border: 'solid 0.5px #e0e0df',
      backgroundColor: '#f9f9f9',
      fontSize: '15px',
      fontWeight: 'bold',
    }),
  }

  const defaultOption = {value: 'Kigamboni district', label: 'Kigamboni district'}
  const defaultOption2 = {value: 'July 2023', label: 'July 2023'}
  return <></>
}

export {ToolbarClassic}
