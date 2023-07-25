import {FC, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { MyTeam } from '../../../utils/dummyJSON';
const MyTeamTable: FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  return (
    <>
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
            <div className='row-auto'>
              <span className='fs-16 fw-bold'>Filter by dates</span>
            </div>
            <div className='w-225px mx-5'>
              <DatePicker
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                className='form-control '
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
                  <th className='min-w-200px fs-16'>Member Name</th>
                  <th className='min-w-200px fs-16'>Onboarded Customers</th>
                  <th className='min-w-200px fs-16'>Orders placed</th>
                  <th className='min-w-100px fs-16'>Total sales</th>
                  <th className='min-w-100px text-end'></th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              {MyTeam.map((team, index) => (
                <>
                  <tbody>
                    <tr key={index}>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={team.image} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-primary fs-6'>
                              {team.name}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className=' fs-7 fw-bold'>{team.customer}</span>
                      </td>
                      <td className='text-end'>
                        <div className='d-flex flex-column w-100 me-2'>
                          <div className='d-flex flex-stack mb-2'>
                            <span className='text-center me-2 fs-7 fw-bold'>{team.orders}</span>
                          </div>
                        </div>
                      </td>
                      <td className='text-end'>
                        <div className='d-flex flex-column w-100 me-2'>
                          <div className='d-flex flex-stack mb-2'>
                            <span className='text-center me-2 fs-7 fw-bold'>{team.sales}</span>
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
    </>
  )
}
export {MyTeamTable}
