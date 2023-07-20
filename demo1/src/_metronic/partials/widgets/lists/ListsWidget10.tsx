/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

const ListsWidget10 = () => {
  return (
    <div className='row justify-content-between'>
      <div className='col-md-3 col-sm-6 d-flex'>
        <div
          className='card rounded-4 mb-5 mb-md-0 w-100 '
          style={{backgroundColor: '#d4e1fc', boxShadow: 'none'}}
        >
          <div className='card-body p-lg-7'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800  fs-22'>42 Orders</a>
              <span className='text-muted fw-semibold d-block'>Total Orders</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-6 d-flex'>
        <div
          className='card rounded-4 mb-5 mb-md-0 w-100'
          style={{backgroundColor: '#ccebfd', boxShadow: 'none'}}
        >
          <div className='card-body p-lg-7'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800  fs-22'>5 days</a>
              <span className='text-muted fw-semibold d-block'>Average order day</span>
            </div>
          </div>
        </div>
      </div>

      <div className='col-md-3 col-sm-6 d-flex'>
        <div
          className='card rounded-4 mb-5 mb-md-0 w-100'
          style={{backgroundColor: '#ccf3f0', boxShadow: 'none'}}
        >
          <div className='card-body p-lg-7'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800 fs-22'>Tsh 150,500</a>
              <span className='text-muted fw-semibold d-block'>Average order value</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-6 d-flex'>
        <div
          className='card rounded-4 mb-5 mb-md-0 w-100'
          style={{backgroundColor: '#fbebbc', boxShadow: 'none'}}
        >
          <div className='card-body p-lg-7'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800 fs-22'>Tsh 13,757,564</a>
              <span className='text-muted fw-semibold d-block'>Total Sales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ListsWidget10}
