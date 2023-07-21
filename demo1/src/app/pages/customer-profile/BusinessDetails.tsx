import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const BusinessDetails: FC = () => {
  return (
    <>
      {/* Basic Details */}
      <div className='card table-out mb-7'>
        <div className='card-header bg-light border-2 pt-2'>
          <h3 className='card-title fw-bold text-dark'>Basic details</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Name:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>Patrick Richards</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Business name:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>Maisha Supermarket</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Phone number:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>+255 657 727 427</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Email:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>patrick.richards@mail.com</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>TIN number:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>772392332</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>VAT number:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>200921876</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Business type:</span>
                </div>
                <div className='col-lg-8'>
                  <span className=' badge badge-light-dark text-gray-800 fw-bold fs-6'>
                    Manufacture
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Business address:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>
                    Kibada St, Dar es Salaam, Tanzania
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Delivery Address */}
      <div className='card table-out'>
        <div className='card-header bg-light border-2 pt-2'>
          <h3 className='card-title fw-bold text-dark'>Delivery address</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 pt-2 '>
              <div className='card' style={{boxShadow: 'none'}}>
                <div className='d-flex align-items-center mb-8 customer'>
                  <div className='flex-grow-1'>
                    <span className='text-gray-800 fw-bold fs-6'>Barbara Mendoza</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>+255 657 727 427</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>
                      Kibada St, Dar es Salaam, Tanzania
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2'>
              <div className='card' style={{boxShadow: 'none'}}>
                <div className='d-flex align-items-center mb-8 customer'>
                  <div className='flex-grow-1'>
                    <span className='text-gray-800 fw-bold fs-6'>Barbara Mendoza</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>+255 657 727 427</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>
                      Kibada St, Dar es Salaam, Tanzania
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export {BusinessDetails}
