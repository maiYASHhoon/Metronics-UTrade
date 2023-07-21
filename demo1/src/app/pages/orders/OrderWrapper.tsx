import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {CustomerOrders} from '../customer-profile/CustomerOrder'
const OrderWrapper: FC = () => {
  return (
    <>
  <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1 className='fs-22 text-bold'>Orders</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='col-sm-auto'>
            <button className='btn btn-primary mb-1'
            //  onClick={handleClick}
            >
              Add New Order
            </button>
          </div>
        </div>
      </div>
      <CustomerOrders />
    </>
  )
}
export {OrderWrapper}
