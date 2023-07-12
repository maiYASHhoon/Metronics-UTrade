/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import Select from 'react-select'

import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
} from '../../../_metronic/partials/widgets'
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
const DashboardPage: FC = () => (
  <>
    {/* begin::Row 4 boxes */}
    <div className='row gy-5 gx-xl-8 mb-8'>
      <div className='col-12'>
        <ListsWidget6 />
      </div>
    </div>

    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8 mb-2'>
      <div className='col-xl-12'>
        hiii
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8 table-out' />
      </div>
    </div>
    {/* end::Row */}

    <div className='row g-9'>
      <div className='col-xxl-6'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-8 mb-5 table-out' />
      </div>
      <div className='col-xxl-6 '>
        <ListsWidget4 className='card-xxl-stretch mb-xl-8 mb-5' />
      </div>
    </div>

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-12'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8 table-out' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <div className='row  align-items-center mb-5 pt-5'>
        <div className='col-lg-6 pt-4 mb-3'>
          <h1>Dashboard</h1>
        </div>
        <div className='col-lg-6 d-flex justify-content-end align-items-center gap-2 gap-lg-3'>
          <div className='w-225px'>
            <Select options={optionsDistrict} styles={customStyles} defaultValue={defaultOption} />
          </div>
          <div className='w-175px'>
            <Select options={optionsYear} styles={customStyles} defaultValue={defaultOption2} />
          </div>
        </div>
      </div>

      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
