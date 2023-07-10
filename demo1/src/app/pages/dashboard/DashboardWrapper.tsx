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
  ListsWidget1,
} from '../../../_metronic/partials/widgets'

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
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8 table-out' />
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
