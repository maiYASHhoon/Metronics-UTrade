import {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {ProductDetails} from '../../../utils/dummyJSON'
const OrderDetails: FC = () => {
  return (
    <>
      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1 className='fs-22 text-bold'>Order details</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='w-235px'>
            <button className='btn btn-primary mb-1 fw-bolder'>Download Invoice</button>
          </div>
          <div className='w-auto'>
            <img alt='' src={toAbsoluteUrl('/media/icons/button.svg')} className='h-47px' />
          </div>
        </div>
      </div>
      {/* Basic & Delivery Details */}
      <div className='row'>
        <div className='col-6'>
          <div className='card table-out mb-7'>
            <div className='card-header bg-light border-2 pt-2'>
              <h3 className='card-title fw-bold text-dark'>Basic details</h3>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Customer Name:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>abc</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Order ID:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>#00982</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Order placed on:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>25/03/23 - 21:30</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Payment method:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>Tigo pesa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card table-out mb-7'>
            <div className='card-header bg-light border-2 pt-2'>
              <h3 className='card-title fw-bold text-dark'>Delivery details</h3>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Shop name:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>Maisha Supermarket</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Phone number:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>+255 657 727 427</span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>Delivery address:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>
                        Kibada St, Dar es Salaam, Tanzania
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 pt-2 '>
                  <div className='row align-items-center'>
                    <div className='col-lg-4'>
                      <span className='text-gray-800 fw-bold fs-6'>District & city:</span>
                    </div>
                    <div className='col-lg-8'>
                      <span className='text-gray-800 fw-bold fs-6'>Kigamboni, Dar es Salaam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Status */}
      <div className='row'>
        <div className='col-12'>
          <div className='card border mb-7'>
            <div className='card-header bg-light border-2 pt-2'>
              <h3 className='card-title fw-bold text-dark'></h3>
            </div>
          </div>
        </div>
      </div>
      {/* Product Name */}
      <div className='row'>
        <div className='col-12'>
          <div className='card border mb-7'>
            <div className='card-body py-3'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed table-row-light-300 align-middle gs-0 gy-4'>
                  {/* begin::Table head */}
                  <thead>
                    <tr className='fw-bold text-bold'>
                      <th className='min-w-150px'>Product name</th>
                      <th className='min-w-140px'>Unit price</th>
                      <th className='min-w-140px'>Qty. & Type</th>
                      <th className='min-w-140px text-end'>Total amount</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  {ProductDetails.records.map((product, index) => (
                    <>
                      <tbody>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='symbol symbol-45px me-5'>
                                <img src={product.productImage} alt='' />
                              </div>
                              <div className='d-flex justify-content-start flex-column'>
                                <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                                  {product.productDescription}
                                </a>
                                <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                  {product.productCompany}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className='fs-8 fw-bold'>{product.unitPrice}</span>
                          </td>
                          <td className='text-end'>
                            <div className='d-flex flex-column w-100 me-2'>
                              <div className='d-flex flex-stack mb-2'>
                                <span className='text-center me-2 fs-7 fw-bold'>
                                  {product.quantityType}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className='d-flex justify-content-end flex-shrink-0'>
                              <div className='d-flex justify-content-end flex-shrink-0'>
                                <span className='text-center fw-bold '>{product.totalAmount}</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        
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
        </div>
      </div>
    </>
  )
}
export {OrderDetails}
