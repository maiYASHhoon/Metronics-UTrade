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
    width: 'auto',
    height: '50px',
    borderRadius: '8px',
    border: 'solid 0.5px #e0e0df',
    backgroundColor: '#f9f9f9',
    fontSize: '15px',
    fontWeight: 'bold',
  }),
}
const defaultOption2 = {value: 'July 2023', label: 'July 2023'}
const ViewProduct: FC = () => {
  return (
    <>
      <div className='col-lg-6 pt-8 mb-7 fs-22'>
        <h1>Selling products</h1>
      </div>
      <div className=' bg-light mb-3 border-2 rounded mb-1pt-2'>
        <div className='row  align-items-center'>
          <div className='col-lg-6 my-6'>
            <div className='d-flex align-items-center position-relative  px-5'>
              <KTSVG
                path='/media/icons/duotune/general/gen021.svg'
                className='svg-icon-1 position-absolute ms-6'
              />
              <input
                type='text'
                data-kt-user-table-filter='search'
                className='form-control search  form-control-solid bg-white  ps-14'
                placeholder='Search by product name…'
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className=' col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
            <div className=' auto'>
              <span className='fs-16 fw-bold'>Filter products</span>
              {/* <Select options={optionsDistrict} styles={customStyles} defaultValue={defaultOption} /> */}
            </div>
            <div className='w-225px mx-5'>
              <Select options={optionsYear} styles={customStyles} defaultValue={defaultOption2} />
            </div>
          </div>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}

      <div className='card'>
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-light-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className=' fw-bold text-bold'>
                  <th className='min-w-200px'>Product name</th>
                  <th className='min-w-100px'>Unit sold</th>
                  <th className='min-w-100px'>
                    Total <br />
                    Customer
                  </th>
                  <th className='min-w-100px'>Total Sales</th>
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
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/food/chilli.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Redgold Chilli Sauce
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Nile Perch Fisheries Ltd
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
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/food/milk.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Lato Milk Powder (400g)
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Zamzam Stationery Supermarket
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
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl('/media/food/pen.png')} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                          Freedom Ball Pen
                        </a>
                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                          Cool Blue
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
      {/* end::Body */}
    </>
  )
}

export {ViewProduct}
