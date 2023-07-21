import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import { ListsWidget10 } from '../../../_metronic/partials/widgets/lists/ListsWidget10';
import Select from 'react-select'

const optionsYear = [
  {value: 'July 2023', label: 'July 2023'},
  {value: 'June 2023', label: 'June 2023'},
  {value: 'May 2023', label: 'May 2023'},
]
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: '288px',
    height: '50px',
    borderRadius: '8px',
    border: 'solid 0.5px #e0e0df',
    backgroundColor: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
  }),
}

const CustomerDashboard: FC = () => {
  const defaultOption = {value: '01/04/2023 - 07/04/2023', label: '01/04/2023 - 07/04/2023'}

  return (
    <> 
      {/* Listwidget box */}
      <div className='row gy-5 gx-xl-8 mb-8'>
        <div className='col-12'>
          <ListsWidget10 />
        </div>
      </div>

      {/* Purchase products */}

      <div className='card table-out mb-7'>
        <div className='card-header bg-light border-2 py-4 align-items-center'>
          <div className='col-sm'>
            <h3 className='card-title fw-bolder text-dark'>Purchased products</h3>
          </div>
          <div className='col-sm-auto'>
            <Select options={optionsYear} styles={customStyles} defaultValue={defaultOption} />
          </div>
        </div>

        <div className='card-body '>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-light-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-bold'>
                  <th className='min-w-150px'>Product name</th>
                  <th className='min-w-140px'>Unit buy</th>
                  <th className='min-w-100px '>Total Sales</th>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 1,000,000</span>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 462,128</span>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 225,000</span>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 213,500 </span>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 150,000</span>
                      </div>
                    </div>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 150,000</span>
                      </div>
                    </div>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 150,000</span>
                      </div>
                    </div>
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
                        <span className='text-center me-2 fs-7 fw-bold'>Tsh 150,000</span>
                      </div>
                    </div>
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
      </div>
    </>
    )
  }
  export {CustomerDashboard}
  