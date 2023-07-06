/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
    <div className=''>
      {/* <div className='card card-xl-stretch mb-5 mb-xl-8'> */}
      {/* begin::Body */}
      <div className='card-body pt-0 '>
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a className='fw-bold text-gray-800 text-hover-primary fs-6'>TSH 462,128</a>
            <span className='text-muted fw-semibold d-block'>Average Daily Sales</span>
          </div>
          {/* end::Title */}
        </div>

        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-success rounded p-5 mb-7'>
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a className='fw-bold text-gray-800 text-hover-primary fs-6'>1200</a>
            <span className='text-muted fw-semibold d-block'>Orders this Month</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-danger rounded p-5 mb-7'>
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a className='fw-bold text-gray-800 text-hover-primary fs-6'>35</a>
            <span className='text-muted fw-semibold d-block'>New Customer</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-info rounded p-5'>
          {/* begin::Title */}
          <div className='flex-grow-1 me-2'>
            <a className='fw-bold text-gray-800 text-hover-primary fs-6'>Tsh 13,757,564</a>
            <span className='text-muted fw-semibold d-block'>Total Sales</span>
          </div>
          {/* end::Title */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget6}
