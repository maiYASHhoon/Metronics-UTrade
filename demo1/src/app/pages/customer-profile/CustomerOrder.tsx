import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import Select from 'react-select'

const optionsYear = [
    {value: 'July 2023', label: 'July 2023'},
    {value: 'June 2023', label: 'June 2023'},
    {value: 'May 2023', label: 'May 2023'},
  ]
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      height: '50px',
      borderRadius: '8px',
      border: 'solid 0.5px #e0e0df',
      backgroundColor: 'white',
      fontSize: '15px',
      fontWeight: 'bold',
    }),
  }
  
const CustomerOrders: FC = () => {
  return (
    <>
    {/* Orders */}
      <div className='bg-light mb-3 border-2 rounded mb-8 pt-2'>
        <div className='row align-items-center'>
          <div className='col-lg-6 my-6'>
            <div className='d-flex align-items-center  position-relative px-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-1 position-absolute ms-6'
              />
              <input
                type='text'
                data-kt-user-table-filter='search'
                className='form-control border search form-control-solid bg-white ps-14'
                placeholder='Search by order ID, order type…'
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
            <div className='auto'>
              <span className='fs-16 fw-bold'>Filter by dates</span>
              {/* <Select options={optionsDistrict} styles={customStyles} defaultValue={defaultOption} /> */}
            </div>
            <div className='w-225px mx-5'>
              <Select
                options={optionsYear}
                styles={customStyles}
                // defaultValue={defaultOption}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='card table-out'>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00982
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00981
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00980
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00979
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00978
                        </span>
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
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          25/03/23 - 21:30
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00982
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00981
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00980
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00979
                        </span>
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
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          #00978
                        </span>
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
      </div>
       {/* Pagination */}
       <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
    )
  }

  export {CustomerOrders}