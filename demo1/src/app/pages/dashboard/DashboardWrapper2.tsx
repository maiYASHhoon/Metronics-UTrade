/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import Select from 'react-select'
import {Tab} from 'react-bootstrap'
import {ListsWidget11} from '../../../_metronic/partials/widgets/lists/ListsWidget11'
import {Nav} from 'react-bootstrap'
const optionsDistrict = [
  {value: 'Kigamboni district', label: 'Kigamboni district'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
]
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
const defaultOption = {value: 'Kigamboni district', label: 'Kigamboni district'}
const defaultOption2 = {value: 'July 2023', label: 'July 2023'}
const DashboardPage2: FC = () => (
  <>
    {/* begin::Row 4 boxes */}
    <div className='row gy-5 gx-xl-8 mb-8'>
      <div className='col-12'>
        <ListsWidget11 />
      </div>
    </div>
    {/* end::Row */}
    <Tab.Container>
      <div className='row gy-5 gx-xl-8 mb-2'>
        <div className='col-sm-auto'>
          <div className='card bg-light rounded-4 w-100 border' style={{boxShadow: 'none'}}>
            <div className='card-body p-5'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='1' className='fw-bold fs-16'>
                    Assigned Customers(25)
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='2' className='fw-bold fs-16'>
                    Total orders
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='3' className='fw-bold fs-16'>
                    Onboarded Customers
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
      </div>
      <Tab.Content>
        {/* Assigned Customers */}
        <Tab.Pane eventKey='1'>
          {
            <div className='card py-4'>
              <div className='card-body py-3  table-out rounded'>
                {/* begin::Table container */}
                <div className='table-responsive '>
                  {/* begin::Table */}
                  <table className='table table-row-bordered table-row-light-300 align-middle gs-0 gy-4'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fw-bold text-bold'>
                        <th className='min-w-200px'>Customer name</th>
                        <th className='min-w-2000px'>Orders placed</th>
                        <th className='min-w-150px'>Total Sales</th>
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
                  <li className='page-item next'>
                    <a href='#' className='page-link'>
                      <i className='next'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        </Tab.Pane>
        <Tab.Pane eventKey='2'>
          {/* Total Orders */}
          {
            <div className='card py-4 '>
              <div className='card-body py-4 table-out'>
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
          }
        </Tab.Pane>
        <Tab.Pane eventKey='3'>
          {/* Total Orders */}
          {
            <div className='card py-4'>
              <div className='card-body py-3  table-out rounded'>
                {/* begin::Table container */}
                <div className='table-responsive '>
                  {/* begin::Table */}
                  <table className='table table-row-bordered table-row-light-300 align-middle gs-0 gy-4'>
                    {/* begin::Table head */}
                    <thead>
                      <tr className='fw-bold text-bold'>
                        <th className='min-w-200px'>Customer name</th>
                        <th className='min-w-2000px'>Orders placed</th>
                        <th className='min-w-150px'>Total Sales</th>
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
                  <li className='page-item next'>
                    <a href='#' className='page-link'>
                      <i className='next'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          }
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </>
)
const DashboardWrapper2: FC = () => {
  const intl = useIntl()
  return (
    <>
      <div className='row  align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1>Dashboard</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='col-sm-auto'>
            <Select options={optionsYear} styles={customStyles} defaultValue={defaultOption2} />
          </div>
        </div>
      </div>
      <DashboardPage2 />
    </>
  )
}
export {DashboardWrapper2}
