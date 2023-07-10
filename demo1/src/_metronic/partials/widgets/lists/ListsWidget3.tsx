/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header bg-light border-2 pt-2'>
        <h3 className='card-title fw-bold text-dark'>New Customer</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-8 customer'>
          {/* begin::Checkbox */}
          <div className='symbol symbol-45px me-5'>
            <img src={toAbsoluteUrl('/media/customer/1.png')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Barbara Mendoza
            </a>
            <span className='text-muted fw-semibold d-block'>Elven Agri</span>
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
            <img src={toAbsoluteUrl('/media/customer/2.png')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Stakeholder Meeting
            </a>
            <span className='text-muted fw-semibold d-block'>Super Meals Limited</span>
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
            <img src={toAbsoluteUrl('/media/customer/3.png')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Barbara Mendoza
            </a>
            <span className='text-muted fw-semibold d-block'>Nile Perch Fisheries Ltd</span>
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
            <img src={toAbsoluteUrl('/media/customer/4.png')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Barbara Mendoza
            </a>
            <span className='text-muted fw-semibold d-block'>MacLeans BeneCIBO Limited</span>
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
            <img src={toAbsoluteUrl('/media/customer/5.png')} alt='' />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className='flex-grow-1'>
            <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
              Barbara Mendoza
            </a>
            <span className='text-muted fw-semibold d-block'>Omros Foods</span>
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

export {ListsWidget3}
