import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

const CustomerProfile: FC = () => {
  return (
    <>
      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1 className='fs-22 text-bold'>Customer profile</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='w-235px'>
            <button className='btn btn-light-primary mb-1 fw-bolder'>Edit Profile Details</button>
          </div>
          <div className='w-auto'>
            <img alt='' src={toAbsoluteUrl('/media/icons/button.svg')} className='h-47px' />
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
export {CustomerProfile}
