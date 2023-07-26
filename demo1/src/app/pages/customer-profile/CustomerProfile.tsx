import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {ListsWidget10} from '../../../_metronic/partials/widgets/lists/ListsWidget10'
import Select from 'react-select'
import {Link} from 'react-router-dom'

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

const CustomerProfile: FC = () => {
  const defaultOption = {value: '01/04/2023 - 07/04/2023', label: '01/04/2023 - 07/04/2023'}
  return (
    <>
      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1 className='fs-22 text-bold'>Customer profile</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='w-235px'>
            <button className='btn btn-primary mb-1 fw-bolder'>Edit Profile Details</button>
          </div>
          <div className='w-auto'>
            <img alt='' src={toAbsoluteUrl('/media/icons/button.svg')} className='h-47px' />
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className='card'>
        <div className='card-body table-out mb-8'>
          <div className='row'>
            <div className='col-lg-2'>
              <img className='upload-logo' src={toAbsoluteUrl('/media/customers/1.png')} alt='' />
            </div>
            <div className='col-lg-10'>
              <div className='row mb-5'>
                <div className='col-lg-5'>
                  <h2>Maisha Supermarket</h2>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <img alt='' src={toAbsoluteUrl('/media/icons/call.svg')} className='h-47px' />
                      <span>+255 657 727 427</span>
                    </div>
                    <div className='col-lg-7'>
                      <img
                        alt=''
                        src={toAbsoluteUrl('/media/icons/email.svg')}
                        className='h-47px'
                      />
                      <span className='px-1'>patrick.richards@mail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className='row'>
                <div className='col-lg-auto mb-5'>
                  <div className='card bg-light rounded-4 w-100 border' style={{boxShadow: 'none'}}>
                    <div className='card-body p-5'>
                      <h2 className='fs-22 fw-bold text-black mb-1'>24</h2>
                      <span className='fs-16 fw-500'>Total orders</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-auto mb-5'>
                  <div className='card bg-light rounded-4 w-100 border' style={{boxShadow: 'none'}}>
                    <div className='card-body p-5'>
                      <h2 className='fs-22 fw-bold text-black mb-1'>Tsh 4,271,163</h2>
                      <span className='fs-16 fw-500'>Total order value</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-auto mb-5'>
                  <div className='card bg-light rounded-4 w-100 border' style={{boxShadow: 'none'}}>
                    <div className='card-body p-5'>
                      <h2 className='fs-22 fw-bold text-black mb-1'>NA</h2>
                      <span className='fs-16 fw-500'>Assigned member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card Footer */}
          <div className='card-footer p-0 pt-3 ' style={{border: 'none'}}>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-sm-auto'>
                    <Link to='/crafted/pages/profile/documents' className='link-dark'>
                      <span className='fw-bold'>Dashboard</span>
                    </Link>
                  </div>
                  <div className='col-sm-auto'>
                    <Link to='/auth/forgot-password' className='link-dark'>
                      <span className='fw-bold'>Business details</span>
                    </Link>
                  </div>
                  <div className='col-sm-auto'>
                    <Link to='/auth/forgot-password' className='link-dark'>
                      <span className='fw-bold'>Orders</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      {/* Basic Details */}
      <div className='card table-out mb-7'>
        <div className='card-header bg-light border-2 pt-2'>
          <h3 className='card-title fw-bold text-dark'>Basic details</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Name:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>Patrick Richards</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Business name:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>Maisha Supermarket</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Phone number:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>+255 657 727 427</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Email:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>patrick.richards@mail.com</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>TIN number:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>772392332</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>VAT number:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>200921876</span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Business type:</span>
                </div>
                <div className='col-lg-8'>
                  <span className=' badge badge-light-dark text-gray-800 fw-bold fs-6'>
                    Manufacture
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2 '>
              <div className='row align-items-center'>
                <div className='col-lg-4'>
                  <span className='text-gray-800 fw-bold fs-6'>Business address:</span>
                </div>
                <div className='col-lg-8'>
                  <span className='text-gray-800 fw-bold fs-6'>
                    Kibada St, Dar es Salaam, Tanzania
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Delivery Address */}

      <div className='card table-out'>
        <div className='card-header bg-light border-2 pt-2'>
          <h3 className='card-title fw-bold text-dark'>Delivery address</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-lg-6 pt-2 '>
              <div className='card' style={{boxShadow: 'none'}}>
                <div className='d-flex align-items-center mb-8 customer'>
                  <div className='flex-grow-1'>
                    <span className='text-gray-800 fw-bold fs-6'>Barbara Mendoza</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>+255 657 727 427</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>
                      Kibada St, Dar es Salaam, Tanzania
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 pt-2'>
              <div className='card' style={{boxShadow: 'none'}}>
                <div className='d-flex align-items-center mb-8 customer'>
                  <div className='flex-grow-1'>
                    <span className='text-gray-800 fw-bold fs-6'>Barbara Mendoza</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>+255 657 727 427</span>
                    <span className='text-gray-800 fw-bold fs-6 d-block'>
                      Kibada St, Dar es Salaam, Tanzania
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders */}
      <br />
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
export {CustomerProfile}
