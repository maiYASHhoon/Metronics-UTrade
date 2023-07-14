import React, {FC, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import Select from 'react-select'
import clsx from 'clsx'

const optionsYear = [
  {value: 'Business 1', label: 'Business Really'},
  {value: 'Business 2', label: 'Business Really'},
  {value: 'Business 3', label: 'Business Really'},
]
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: 'auto',
    height: '43px',
    borderRadius: '8px',
    border: 'solid 0.5px #e0e0df',
    backgroundColor: 'white',
    fontSize: '15px',
  }),
}

const defaultOption2 = {value: 'Select business type', label: 'Select business type'}

const AddCustomer: FC = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-2 mb-3'>
          <h1 className='fs-22 text-bold'>Add new customer</h1>
        </div>
      </div>

      {/* {*****************************************************************************************} */}
      {/* { begin } */}
      <div className='row g-9'>
        <div className='col-lg-4 col-xxl-3'>
          <div className='card bg-light rounded-2 ' style={{boxShadow: 'none'}}>
            <div className='card-body '>
              <div className='me-2 text-left mb-2'>
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
        {/* {*****************************************************************************************} */}
        <div className='col-lg-8 col-xxl-9 '>
          <div className='row'>
            <div className='col-12'>
              <div className='card bg-light rounded-2 ' style={{boxShadow: 'none'}}>
                <div className='card-body '>
                  <div className=' me-2 mb-3'>
                    <span className='fw-bolder text-gray-800 fs-22'>Customer details</span>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 '>
                      <div className='mb-2 pt-2 fs-16 fw-bolder'>
                        <span>Name</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-2 pt-2 fw-bolder fs-16'>
                        <span>Email</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here...'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 pt-5'>
                      <div className='mb-2 fs-16 fw-bold'>
                        <span>Phone number</span>
                      </div>

                      <div className='input-group'>
                        <div className='border-right-0 bg-white fs-16 fw-600 text-black px-6 form is-invalid input-group-text'>
                          +91
                        </div>
                        <div className='d-flex flex-grow-1'>
                          <input
                            placeholder='phone number...'
                            type='string'
                            autoComplete='off'
                            className={clsx('form-control bg-white ')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {*****************************************************************************************} */}
            <div className='col-12 mt-7'>
              <div className='card bg-light rounded-2 ' style={{boxShadow: 'none'}}>
                <div className='card-body '>
                  <div className=' me-2 mb-3'>
                    <span className='fw-bolder text-gray-800 fs-22'>Business details</span>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 '>
                      <div className='mb-2 pt-2 fs-16 fw-bolder'>
                        <span>Name</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-2 pt-2 fw-bolder fs-16'>
                        <span>Email</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <Select
                          options={optionsYear}
                          styles={customStyles}
                          defaultValue={defaultOption2}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12 pt-5'>
                      <div className='mb-2 fs-16 fw-bolder'>
                        <span>Address</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                        />
                      </div>

                      <div className='row'>
                        <div className='col-lg-6 '>
                          <div className='mb-2 pt-2 fs-16 fw-bolder'>
                            <span>TIN Number</span>
                          </div>
                          <div className='fv-row mb-2'>
                            <input
                              placeholder='Type here....'
                              className={clsx('form-control bg-white')}
                              type='email'
                              name='email'
                              autoComplete='off'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-2 pt-2 fw-bolder fs-16'>
                            <span>VAT Number</span>
                          </div>
                          <div className='fv-row mb-2'>
                            <input
                              placeholder='Type here...'
                              className={clsx('form-control bg-white')}
                              type='email'
                              name='email'
                              autoComplete='off'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 text-end'>
                <button className='btn btn-primary mb-1 mt-8'>Add Customer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {end } */}

      {/* {Row 2 : begin } */}
      {/* <div className='row'>
        <div className='col-lg-8 col-xxl-9 pt-12'>
          <div className='card bg-light rounded-2 ' style={{boxShadow: 'none'}}>
            <div className='card-body '>
              <div className=' me-2 mb-3'>
                <span className='fw-bolder text-gray-800 fs-22'>Business details</span>
              </div>
              <div className='row'>
                <div className='col-lg-6 '>
                  <div className='mb-2 pt-2 fs-16 fw-bolder'>
                    <span>Name</span>
                  </div>
                  <div className='fv-row mb-2'>
                    <input
                      placeholder='Type here....'
                      className={clsx('form-control bg-white')}
                      type='email'
                      name='email'
                      autoComplete='off'
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='mb-2 pt-2 fw-bolder fs-16'>
                    <span>Email</span>
                  </div>
                  <div className='fv-row mb-2'>
                    <Select
                      options={optionsYear}
                      styles={customStyles}
                      defaultValue={defaultOption2}
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12 pt-5'>
                  <div className='mb-2 fs-16 fw-bolder'>
                    <span>Address</span>
                  </div>
                  <div className='fv-row mb-2'>
                    <input
                      placeholder='Type here....'
                      className={clsx('form-control bg-white')}
                      type='email'
                      name='email'
                      autoComplete='off'
                    />
                  </div>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <div className='mb-2 pt-2 fs-16 fw-bolder'>
                        <span>TIN Number</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-2 pt-2 fw-bolder fs-16'>
                        <span>VAT Number</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here...'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* {Row 2 : end } */}
    </>
  )
}

export {AddCustomer}
