/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100 bg-white'>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-1 order-lg-2'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-2 order-lg-1'
        style={{backgroundColor: '#e7f1fd'}}
      >
        {/* begin::Content */}
        <div className='ms-20 mt-15 mh-80px mw-50px '>
          {/* begin::Logo */}
          <Link to='/' className='mb-12'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/logos/uTradeLogo.png')}
              className='mh-75px mw-125px'
            />
          </Link>
        </div>
        {/* end::Logo */}
        <div className='d-flex justify-content-center flex-column w-lg-500px p-10 '>
          {/* begin::Image */}
          <img
            className='mx-auto mw-150px mh-259px w-md-50 w-xl-500px mb-10 mb-lg-20 rounded-circle'
            src={toAbsoluteUrl('/media/avatars/300-16.jpg')}
            alt=''
          />
          <div className='text-center fs-22'>
            <h3>
              “It is easy to work with software that has combined our operational functions into one
              platform. It’s user-friendly and adjusted to the business needs.”
            </h3>
            <div className='pt-3 fs-18 font-weight-600 text-italic'>
              <span className='fw-bold'>Dan Wood</span> - Founder, Acme Corporation
            </div>
          </div>
          {/* end::Image */}
        </div>

        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}
