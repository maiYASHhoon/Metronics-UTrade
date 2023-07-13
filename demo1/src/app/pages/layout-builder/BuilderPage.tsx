/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {getLayoutFromLocalStorage, ILayout, LayoutSetup} from '../../../_metronic/layout/core'
import Select from 'react-select'

const BuilderPage: React.FC = () => {
  const [tab, setTab] = useState('Sidebar')
  const [config, setConfig] = useState<ILayout>(getLayoutFromLocalStorage())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
      window.location.reload()
    } catch (error) {
      setConfig(getLayoutFromLocalStorage())
      setConfigLoading(false)
    }
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayoutFromLocalStorage())
      setResetLoading(false)
    }, 1000)
  }
  const defaultOption = {value: 'Kigamboni district', label: 'Kigamboni district'}
  const defaultOption2 = {value: 'All team members', label: 'All team members'}

  const optionsDistrict = [
    {value: 'Kigamboni district', label: 'Kigamboni district'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ]
  const optionsYear = [
    {value: 'All team members', label: 'All team members'},
    {value: 'June 2023', label: 'June 2023'},
    {value: 'May 2023', label: 'May 2023'},
  ]
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: 'auto',
      height: '50px',
      borderRadius: '8px',
      border: 'solid 0.5px #e0e0df',
      backgroundColor: '#f9f9f9',
      fontSize: '15px',
      fontWeight: 'bold',
    }),
  }
  const customStyles2 = {
    control: (provided: any) => ({
      ...provided,
      width: '176px',
      height: '45px',
      borderRadius: '8px',
      border: 'solid 0.5px #e0e0df',
      backgroundColor: '#f9f9f9',
      fontSize: '15px',
      fontWeight: 'bold',
    }),
  }

  return (
    <>
      <div className='row align-items-center notification-c'>
        <div className='col-lg-12 d-flex justify-content-center fs-16 text-bold'>
          <span className='fw-bold align-items-center'>
            You need to assign team members for the newly onboarded customers.
          </span>
        </div>
      </div>

      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1 className='fs-22 text-bold'>Customers</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='w-225px'>
            <Select options={optionsDistrict} styles={customStyles} defaultValue={defaultOption} />
          </div>
          <div className='w-auto'>
            <button className='btn btn-primary mb-1'>Add New Customer</button>
          </div>
        </div>
      </div>
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
                placeholder='Search by product name…'
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
            <div className='auto'>
              <span className='fs-16 fw-bold'>Filter products</span>
              {/* <Select options={optionsDistrict} styles={customStyles} defaultValue={defaultOption} /> */}
            </div>
            <div className='w-225px mx-5'>
              <Select options={optionsYear} styles={customStyles} defaultValue={defaultOption2} />
            </div>
          </div>
        </div>
      </div>
      {/* begin::Body */}
      <div className='card'>
        <div className='card-body py-3 table-out rounded'>
          {/* begin::Table container */}
          <div className='table-responsive '>
            {/* begin::Table */}
            <table className='table table-row-bordered table-row-light-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-bold'>
                  <th className='min-w-200px'>Customer name</th>
                  <th className='min-w-200px'>Assigned team member</th>
                  <th className='min-w-2000px'>Orders placed</th>
                  <th className='min-w-120px'>Total Sales</th>
                  <th className='min-w-100px text-end'></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/1.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Patrick Richards
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Maisha Supermarket
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>22</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 1,000,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/2.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Laurel Oliver
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Kilimo Fresh Foods
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>17</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>TSh 462,128</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/3.png')} alt='' />
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
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>11</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>TSh 225,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/4.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Denise Jones
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Zamzam Stationery...
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>07</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 213,500</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/5.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Matthew Powell
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Afribon
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>03</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/6.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Barbara Mendoza
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Omros Foods
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>03</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/7.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Kathy Clark
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Super Meals Limited
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>03</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/8.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Barbara Mendoza
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          MacLeans BeneCIB...
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>03</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/9.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Barbara Mendoza
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Nile Perch Fisherie...
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>03</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/customers/10.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Barbara Mendoza
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Elven Agri
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Select
                      options={optionsDistrict}
                      styles={customStyles2}
                      // defaultValue={defaultOption}
                    />
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-center me-2 fs-7 fw-bold'>03</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-center fw-bold '>Tsh 150,000</span>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <button className='btn btn-primary'>View details</button>
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

            <li className='page-item'>
              <a href='#' className='page-link'>
                4
              </a>
            </li>

            <li className='page-item'>
              <a href='#' className='page-link'>
                5
              </a>
            </li>

            <li className='page-item'>
              <a href='#' className='page-link'>
                6
              </a>
            </li>

            <li className='page-item next'>
              <a href='#' className='page-link'>
                <i className='next'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* begin::Body */}
    </>
  )
}

export {BuilderPage}
