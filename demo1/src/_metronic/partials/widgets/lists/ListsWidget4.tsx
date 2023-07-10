/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  items?: number
}

const ListsWidget4: React.FC<Props> = ({className, items = 6}) => {
  return (
    <div className='card card-xl-stretch table-out mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header bg-light border-2 pt-2'>
        <h3 className='card-title fw-bold text-dark'>Team performance</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8 customer'>
          {/* begin::Checkbox */}
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-7.jpg')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Patrick Richards
            </a>
            <span className='text-muted fw-semibold d-block'>Total sales: Tsh 313,214</span>
          </div>
          {/* end::Description */}
          <a
            href='#'
            className='btn btn-sm fw-bold btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            View
          </a>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8 customer'>
          {/* begin::Checkbox */}
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-15.jpg')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Aunali Mohamed Abdulrazak
            </a>
            <span className='text-muted fw-semibold d-block'>Total sales: Tsh 237,500</span>
          </div>
          {/* end::Description */}
          <a
            href='#'
            className='btn btn-sm fw-bold btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            View
          </a>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8 customer'>
          {/* begin::Checkbox */}
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-24.jpg')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Bianca Ross
            </a>
            <span className='text-muted fw-semibold d-block'>Total sales: Tsh 215,125</span>
          </div>
          {/* end::Description */}
          <a
            href='#'
            className='btn btn-sm fw-bold btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            View
          </a>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8 customer'>
          {/* begin::Checkbox */}
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-17.jpg')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Matthew Powell
            </a>
            <span className='text-muted fw-semibold d-block'>Total sales: Tsh 132,300</span>
          </div>
          {/* end::Description */}
          <a
            href='#'
            className='btn btn-sm fw-bold btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            View
          </a>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8 customer'>
          {/* begin::Checkbox */}
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/avatars/300-6.jpg')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Nia Ayim
            </a>
            <span className='text-muted fw-semibold d-block'>Total sales: Tsh 45,212</span>
          </div>
          {/* end::Description */}
          <a
            href='#'
            className='btn btn-sm fw-bold btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_app'
          >
            View
          </a>
        </div>
        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget4}
