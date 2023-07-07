/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row 4 boxes */}
    <div className='row gy-5 gx-xl-8 mb-8'>
      <div className='col-12'>
        <div className='row justify-content-between'>
          <div className='col-md-3 col-sm-6'>
            <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#d4e1fc'}}>
              <div className='card-body'>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-primary fs-6'>TSH 462,128</a>
                  <span className='text-muted fw-semibold d-block'>Average Daily Sales</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 card'>
            <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#ccebfd'}}>
              <div className='card-body'>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-primary fs-6'>1200</a>
                  <span className='text-muted fw-semibold d-block'>Orders this Month</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6 card'>
            <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#ccf3f0'}}>
              <div className='card-body'>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-primary fs-6'>35</a>
                  <span className='text-muted fw-semibold d-block'>New Customer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 col-sm-6 card'>
            <div className='card rounded-4 mb-5 mb-md-0' style={{backgroundColor: '#fbebbc'}}>
              <div className='card-body'>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-primary fs-6'>Tsh 13,757,564</a>
                  <span className='text-muted fw-semibold d-block'>Total Sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}

    <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
