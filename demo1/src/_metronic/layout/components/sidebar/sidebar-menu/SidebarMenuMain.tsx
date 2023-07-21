/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/dashboard2'
        icon='/media/icons/duotune/art/art002.svg'
        title="Dashboard 2"
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Customer'
        fontIcon='bi-layers'
      />
      {/* <SidebarMenuItem
        to='/'
        icon='/media/icons/duotune/general/gen019.svg'
        title='My Team'
        fontIcon='bi-layers'
      /> */}
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
