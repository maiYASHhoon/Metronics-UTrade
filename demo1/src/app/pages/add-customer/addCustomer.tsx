import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import Select from 'react-select'

const AddCustomer: FC = () => {
  return (
    <>
      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-2 mb-3'>
          <h1 className='fs-22 text-bold'>Add new customer</h1>
        </div>
      </div>
      <div className='row g-9'>
        <div className='col-lg-4 col-xxl-3'>
          <div className='card bg-light rounded-2 '>
            <div className='card-body '>
              <div className='me-2 text-left'>
                <span className='fw-bolder text-gray-800 fs-22'>Business Logo</span>
              </div>
              <div className='pt-1 d-flex justify-content-center align-items-center'>
                <img
                  className='upload-logo'
                  src={toAbsoluteUrl('/media/customers/upload.png')}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-8 col-xxl-9 '>
          <div className='card bg-light rounded-2 '>
            <div className='card-body '>
              <div className=' me-2'>
                <span className='fw-bolder text-gray-800 fs-22'>Business Logo</span>
                <div>
                  <img
                    className='upload-logo'
                    src={toAbsoluteUrl('/media/customers/upload.png')}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {AddCustomer}
