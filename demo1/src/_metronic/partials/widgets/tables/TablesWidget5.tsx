/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget5: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header bg-light mb-3 border-2 pt-2'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent orders</span>
        </h3>
        <div
          className='card-toolbar fw-bold fs-3 mb-3'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title='Click to add a user'
        >
          <button className='btn btn-primary mb-1'>View all orders</button>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-light-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-bold'>
                <th className='min-w-200px fs-16'>Order Date & ID </th>
                <th className='min-w-200px fs-16'>Ordered by</th>
                <th className='min-w-200px fs-16'>Quantity</th>
                <th className='min-w-100px fs-16'>Total Amount</th>
                <th className='min-w-100px text-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        25/03/23 - 21:30
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>#00982</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-15 '
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    Patrick Richards
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>23 itmes</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content flex-shrink-0'>
                    <div className='d-flex justify-content flex-shrink-0'>
                      <span className='text-center fw-bold '>Tsh 1,000,000</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary '>View details</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        25/03/23 - 15:10
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>#00981</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-15'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    Customer
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>12 items</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content flex-shrink-0'>
                    <div className='d-flex justify-content flex-shrink-0'>
                      <span className='text-center fw-bold '>TSh 311,500</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        25/03/23 - 10:42
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>#00980</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-15 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    Nia Ayim
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>27 items</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content flex-shrink-0'>
                    <div className='d-flex justify-content flex-shrink-0'>
                      <span className='text-center fw-bold '>TSh 462,128</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        24/03/23 - 15:10
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>#00979</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-15 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    Bianca Ross
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>23 items</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content flex-shrink-0'>
                    <div className='d-flex justify-content flex-shrink-0'>
                      <span className='text-center fw-bold '>Tsh 213,500</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        24/03/23 - 15:03
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>#00978</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-15 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    Customer
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>19 items</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content flex-shrink-0'>
                    <span className='text-center fw-bold '>Tsh 213,500</span>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget5}
