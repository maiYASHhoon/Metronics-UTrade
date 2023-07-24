import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import Select from 'react-select'
import clsx from 'clsx'
import {useNavigate} from 'react-router-dom'
import {string} from 'yup'
import {StringifyOptions} from 'querystring'

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

//File Upload
const AddCustomer: FC = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')

  const handleUpload = (event: any) => {
    const uploadedFile = event.target.files[0]
    setFile(uploadedFile)
    setImageUrl(uploadedFile ? URL.createObjectURL(uploadedFile) : '')
  }
  {
    /* Validation/State Management */
  }
  const [customerData, setCustomerData] = useState<{
    name: string
    email: string
    phoneNumber: string
    businessName: string
    address: string
    tinNumber: string
    vatNumber: string
  }>({
    name: '',
    email: '',
    businessName: '',
    phoneNumber: '',
    address: '',
    tinNumber: '',
    vatNumber: '',
  })
  const [customerValidation, setCustomerValidation] = useState<{
    name: boolean
    email: boolean
    phoneNumber: boolean
    businessName: boolean
    address: boolean
    tinNumber: boolean
    vatNumber: boolean
  }>({
    name: false,
    email: false,
    phoneNumber: false,
    businessName: false,
    address: false,
    tinNumber: false,
    vatNumber: false,
  })

  const handleBasicDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    let temp: any = {...customerData}
    let tempValidation: any = {...customerValidation}
    tempValidation[event.target.name] = false
    if (event.target.value.trimStart() === '') {
      tempValidation[event.target.name] = true
    }
    temp[event.target.name] = event.target.value.trimStart()
    setCustomerData(temp)
    setCustomerValidation(tempValidation)
    console.log(event.target.name)
  }

  const handleClick = () => navigate('/customer-porfile')

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
            <div className='card-body'>
              <div className='me-2 text-left mb-2'>
                <span className='fw-bolder text-gray-800 fs-22'>Business Logo</span>
              </div>
              <div className='pt-1 d-flex justify-content-center align-items-center'>
                <div className='upload-area'>
                  {!file ? (
                    <>
                      <label htmlFor='logo-upload' className='upload-label'>
                        <input
                          id='logo-upload'
                          type='file'
                          onChange={handleUpload}
                          style={{display: 'none'}}
                        />
                        <img
                          className='upload-logo'
                          src={toAbsoluteUrl('/media/customers/upload.png')}
                          alt=''
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className='symbol symbol-200px'>
                        <img
                          className='object-fit-contain'
                          src={imageUrl}
                          alt={file ? file.name : ''}
                        />
                      </div>
                    </>
                  )}
                </div>
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
                        <span className='required'>Name</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='name'
                          name='name'
                          autoComplete='off'
                          value={customerData.name}
                          onChange={handleBasicDetailsChange}
                        />
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            {/* <span role='alert'>{nameError && <div>{nameError}</div>}</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-2 pt-2 fw-bolder fs-16'>
                        <span className='required'>Email</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here...'
                          className={clsx('form-control bg-white')}
                          type='email'
                          name='email'
                          autoComplete='off'
                          value={customerData.email}
                          onChange={handleBasicDetailsChange}
                        />
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            {/* <span role='alert'>{emailError && <div>{emailError}</div>}</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 pt-5'>
                      <div className='mb-2 fs-16 fw-bold'>
                        <span className='required'>Phone number</span>
                      </div>

                      <div className='input-group'>
                        <div className='border-right-0 bg-white fs-16 fw-600 text-black px-6 form is-invalid input-group-text'>
                          +91
                        </div>
                        <div className='d-flex flex-grow-1'>
                          <input
                            placeholder='phone number...'
                            type='number'
                            name='phoneNumber'
                            autoComplete='off'
                            value={customerData.phoneNumber}
                            onChange={handleBasicDetailsChange}
                            className={clsx('form-control bg-white ')}
                          />
                        </div>
                      </div>
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-start'>
                          <span role='alert'>
                            {/* { phoneNumberError && (
                              <div>{phoneNumberError}</div>
                            )} */}
                          </span>
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
                        <span className='required'>Name</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='text'
                          name='businessName'
                          autoComplete='off'
                          value={customerData.businessName}
                          onChange={handleBasicDetailsChange}
                        />
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            <span role='alert'>
                              {/* {businessNameError && <div>{businessNameError}</div>} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-2 pt-2 fw-bolder fs-16'>
                        <span className='required'>Type</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <Select options={optionsYear} styles={customStyles} />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12 pt-5'>
                      <div className='mb-2 fs-16 fw-bolder'>
                        <span className='required'>Address</span>
                      </div>
                      <div className='fv-row mb-2'>
                        <input
                          placeholder='Type here....'
                          className={clsx('form-control bg-white')}
                          type='text-area'
                          name='address'
                          autoComplete='off'
                          value={customerData.address}
                          onChange={handleBasicDetailsChange}
                        />{' '}
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            {/* <span role='alert'>{addressError && <div>{addressError}</div>}</span> */}
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-lg-6 '>
                          <div className='mb-2 pt-2 fs-16 fw-bolder'>
                            <span className='required'>TIN Number</span>
                          </div>
                          <div className='fv-row mb-2'>
                            <input
                              placeholder='Type here....'
                              className={clsx('form-control bg-white')}
                              type='number'
                              name='tinNumber'
                              autoComplete='off'
                              value={customerData.tinNumber}
                              onChange={handleBasicDetailsChange}
                            />
                            <div className='fv-plugins-message-container'>
                              <div className='fv-help-block text-start'>
                                {/* <span role='alert'>
                                  {tinNumberError && <div>{tinNumberError}</div>}
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='mb-2 pt-2 fw-bolder fs-16'>
                            <span className='required'>VAT Number</span>
                          </div>
                          <div className='fv-row mb-2'>
                            <input
                              placeholder='Type here...'
                              className={clsx('form-control bg-white')}
                              type='number'
                              name='vatNumber'
                              autoComplete='off'
                              value={customerData.vatNumber}
                              onChange={handleBasicDetailsChange}
                            />
                            <div className='fv-plugins-message-container'>
                              <div className='fv-help-block text-start'>
                                {/* <span role='alert'>
                                  {vatNumberError && <div>{vatNumberError}</div>}
                                </span> */}
                              </div>
                            </div>
                          </div>
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
              <button className='btn btn-primary mb-1 mt-8' onClick={handleClick}>
                Add Customer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {end } */}
    </>
  )
}

export {AddCustomer}
