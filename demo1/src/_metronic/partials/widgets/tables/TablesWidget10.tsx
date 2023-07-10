/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header bg-light mb-3 border-2 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-5'>Top 5 Selling products</span>
        </h3>
        <div
          className='card-toolbar fw-bold fs-3 mb-5'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title='Click to add a user'
        >
          <a
            href='#'
            className='btn btn-sm btn-light-primary '
            style={{backgroundColor: '#1b74e4'}}
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            View All Products
          </a>
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
                <th className='min-w-150px'>Product name</th>
                <th className='min-w-140px'>Unit sold</th>
                <th className='min-w-120px'>Total Customer</th>
                <th className='min-w-100px text-end'>Total Sales</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/food/chochlate.png')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Nutro Wafer Biscuits (Chocolate, 75g)
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Wadsworth Distributors Limited
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-8 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    100 C, 150 D, 200 P
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>22</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <span className='text-center fw-bold '>Tsh 1,000,000</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/food/roll.png')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Amazon Roll Gum
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Super Meals Limited
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-8 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    70 C, 80 D, 20 P
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>17</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <span className='text-center fw-bold '>TSh 462,128</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/food/pop.png')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Milkit Pop Chocolates
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Kilimo Fresh Foods Africa LTD
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-8 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    70 C, 55 D, 130 P
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>11</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <span className='text-center fw-bold '>TSh 225,000</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/food/flour.png')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Azam Wheat Flour
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Kilimo Fresh Foods Africa LTD
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-8 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    50 C, 50 D, 120 P
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>07</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <span className='text-center fw-bold '>Tsh 213,500</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/food/strawberry.png')} alt='' />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                        Amazon Monsta Pops (Strawberry)
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        MacLeans BeneCIBO Limited
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    className='badge badge-light-dark fs-8 fw-bold'
                    style={{backgroundColor: '#f9f9f9'}}
                  >
                    50 D, 120 P
                  </span>
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-center me-2 fs-7 fw-bold'>03</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
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

export {TablesWidget10}
