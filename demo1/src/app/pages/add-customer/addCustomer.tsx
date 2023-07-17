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

//File Upload
const AddCustomer: FC = () => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')

  function handleUpload(event: any) {
    const uploadedFile = event.target.files[0]
    setFile(uploadedFile)
    setImageUrl(uploadedFile ? URL.createObjectURL(uploadedFile) : '')
  }

  // Custom Validations

  /*******************Name Validation****************************/

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const validateName = () => {
    if (name.trim() === '') {
      setNameError('Name is required')
    } else if (name.trim().length < 3) {
      setNameError('Name should be at least 3 characters long')
    } else {
      setNameError('')
    }
  }
  /*******************BusinessName Validation****************************/

  const [businessName, businessSetName] = useState('')
  const [businessNameError, businessSetNameError] = useState('')
  const validateBusinessName = () => {
    if (name.trim() === '') {
      businessSetNameError('Business Name is required')
    } else if (name.trim().length < 3) {
      businessSetNameError('Name should be at least 3 characters long')
    } else {
      businessSetNameError('')
    }
  }

  /*******************Number Validation****************************/

  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)
  const validatePhoneNumber = () => {
    const phoneRegex = /^\d{10}$/

    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Phone number is required')
    } else if (!phoneRegex.test(phoneNumber)) {
      setPhoneNumberError('Invalid phone number format')
    } else {
      setPhoneNumberError('')
    }
  }
  const handlePhoneNumberChange = (e: {target: {value: React.SetStateAction<string>}}) => {
    setPhoneNumber(e.target.value)
  }

  const handlePhoneNumberBlur = () => {
    setPhoneNumberTouched(true)
    validatePhoneNumber()
  }

  /******************* TIN Number Validation****************************/

  const [tinNumber, setTinNumber] = useState('')
  const [tinNumberError, setTinNumberError] = useState('')
  const validateTinNumber = () => {
    if (tinNumber.trim() === '') {
      setTinNumberError('Phone TIN is required')
    } else if (tinNumber.trim().length < 12) {
      setTinNumberError('Should be 12 numbers')
    } else {
      setTinNumberError('')
    }
  }

  /******************* VAT Number Validation****************************/

  const [vatNumber, setVatNumber] = useState('')
  const [vatNumberError, setVatNumberError] = useState('')
  const validateVatNumber = () => {
    if (vatNumber.trim() === '') {
      setVatNumberError('VAT number is required')
    } else if (vatNumber.trim().length < 12) {
      setVatNumberError('Should be 12 numbers')
    } else {
      setVatNumberError('')
    }
  }
  /*******************Email Validation****************************/

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email.trim() === '') {
      setEmailError('Email is required')
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format')
    } else {
      setEmailError('')
    }
  }

  /*******************Address Validation****************************/

  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')

  const validateAddress = () => {
    if (address.trim() === '') {
      setAddressError('Address is required')
    } else {
      setAddressError('')
    }
  }

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
                          value={name}
                          onBlur={validateName}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            <span role='alert'>{nameError && <div>{nameError}</div>}</span>
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
                          value={email}
                          onBlur={validateEmail}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            <span role='alert'>{emailError && <div>{emailError}</div>}</span>
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
                            type='string'
                            autoComplete='off'
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            onBlur={handlePhoneNumberBlur}
                            className={clsx('form-control bg-white ')}
                          />
                        </div>
                      </div>
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block text-start'>
                          <span role='alert'>
                            {phoneNumberTouched && phoneNumberError && (
                              <div>{phoneNumberError}</div>
                            )}
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
                          name='name'
                          autoComplete='off'
                          value={businessName}
                          onBlur={validateBusinessName}
                          onChange={(e) => businessSetName(e.target.value)}
                        />
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            <span role='alert'>
                              {businessNameError && <div>{businessNameError}</div>}
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
                          type='text'
                          name='address'
                          autoComplete='off'
                          value={address}
                          onBlur={validateAddress}
                          onChange={(e) => setAddress(e.target.value)}
                        />{' '}
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block text-start'>
                            <span role='alert'>{addressError && <div>{addressError}</div>}</span>
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
                              name='number'
                              autoComplete='off'
                              value={tinNumber}
                              onBlur={validateTinNumber}
                              onChange={(e) => setTinNumber(e.target.value)}
                            />
                            <div className='fv-plugins-message-container'>
                              <div className='fv-help-block text-start'>
                                <span role='alert'>
                                  {tinNumberError && <div>{tinNumberError}</div>}
                                </span>
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
                              name='number'
                              autoComplete='off'
                              value={vatNumber}
                              onBlur={validateVatNumber}
                              onChange={(e) => setVatNumber(e.target.value)}
                            />
                            <div className='fv-plugins-message-container'>
                              <div className='fv-help-block text-start'>
                                <span role='alert'>
                                  {vatNumberError && <div>{vatNumberError}</div>}
                                </span>
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
              <button className='btn btn-primary mb-1 mt-8'>Add Customer</button>
            </div>
          </div>
        </div>
      </div>

      {/* {end } */}
    </>
  )
}

export {AddCustomer}
