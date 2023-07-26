import {FC} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import Select from 'react-select'
import {BrandAndTotalSales} from '../../../utils/dummyJSON'
import {useNavigate} from 'react-router-dom'
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
  const navigate = useNavigate()
  const handleClick = () => navigate('/order-details')
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
              {BrandAndTotalSales.map((order, index) => (
                <>
                  <tbody>
                    <tr key={index}>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='d-flex justify-content-start flex-column'>
                            <a className='text-dark fw-bold text-hover-primary fs-15'>
                              {order.dateTime}
                            </a>
                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                              {order.code}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className='badge badge-light-dark fs-15 '
                          style={{backgroundColor: '#f9f9f9'}}
                        >
                          {order.orderBy}
                        </span>
                      </td>
                      <td className='text-end'>
                        <div className='d-flex flex-column w-100 me-2'>
                          <div className='d-flex flex-stack mb-2'>
                            <span className='text-center me-2 fs-15 fw-bold'>{order.quantity}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content flex-shrink-0'>
                          <div className='d-flex justify-content flex-shrink-0'>
                            <span className='text-center fs-15 fw-bold '>{order.totalAmount}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <div className='d-flex justify-content-end flex-shrink-0'>
                            <button className='btn btn-primary ' onClick={handleClick}>
                              View details
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <div className='line'></div>
                  </tbody>
                </>
              ))}
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
