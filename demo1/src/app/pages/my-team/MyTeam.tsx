import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {CustomerOrders} from '../customer-profile/CustomerOrder'
import {MyTeamTable} from './MyTeamTable'
import Select from 'react-select'
const optionsDistrict = [
  {value: 'Kigamboni district', label: 'Kigamboni district'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
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
const defaultOption = {value: 'Kigamboni district', label: 'Kigamboni district'}
const MyTeam: FC = () => {
  return (
    <>
      <div className='row align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1 className='fs-22 text-bold'>My Team</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='col-sm-auto'>
            <Select options={optionsDistrict} styles={customStyles} defaultValue={defaultOption} />
          </div>
        </div>
      </div>
      <MyTeamTable />
    </>
  )
}
export {MyTeam}
