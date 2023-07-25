import { useIntl } from 'react-intl';
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen001.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/dashboard2'
        icon='/media/icons/duotune/art/art009.svg'
        title="Dashboard 2"
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Customer'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/my-team'
        icon='/media/icons/duotune/general/gen008.svg'
        title='My Team'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/orders'
        icon='/media/icons/duotune/general/gen004.svg'
        title='Orders'
        fontIcon='bi-layers'
      />
      {/* <SidebarMenuItem
        to='/'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Order'
        fontIcon='bi-layers'
      /> */}
    </>
  )
}

export {SidebarMenuMain}
