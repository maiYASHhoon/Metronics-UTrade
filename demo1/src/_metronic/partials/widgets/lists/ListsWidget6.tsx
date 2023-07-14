/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

const ListsWidget6 = () => {
  return (
    <div className='row justify-content-between'>
      <div className='col-md-3 col-sm-6'>
        <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#d4e1fc', boxShadow: 'none'}}>
          <div className='card-body'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800 text-hover-primary fs-22'>TSH 462,128</a>
              <span className='text-muted fw-semibold d-block'>Average Daily Sales</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-6 card'>
        <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#ccebfd', boxShadow: 'none'}}>
          <div className='card-body'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800 text-hover-primary fs-22'>1200</a>
              <span className='text-muted fw-semibold d-block'>Orders this Month</span>
            </div>
          </div>
        </div>
      </div>

      <div className='col-md-3 col-sm-6 card'>
        <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#ccf3f0', boxShadow: 'none'}}>
          <div className='card-body'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800 text-hover-primary fs-22'>35</a>
              <span className='text-muted fw-semibold d-block'>New Customer</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-3 col-sm-6 card'>
        <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#fbebbc', boxShadow: 'none'}}>
          <div className='card-body'>
            <div className='flex-grow-1 me-2'>
              <a className='fw-bolder text-gray-800 text-hover-primary fs-22'>Tsh 13,757,564</a>
              <span className='text-muted fw-semibold d-block'>Total Sales</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ListsWidget6}
