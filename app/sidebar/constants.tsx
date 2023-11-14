import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/sidebar',
    icon: <Icon icon="lucide:home" width="22" height="22" />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:layout-dashboard" width="22" height="22" />,
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <Icon icon="mdi:analytics" width="22" height="22" />,
  },
  {
    title: 'Issues',
    path: '/issues',
    icon: <Icon icon="ant-design:issues-close-outlined" width="22" height="22" />,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <Icon icon="ion:notifications-outline" width="22" height="22" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="22" height="22" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Issues', path: '/projects/issues' },
      { title: 'Cycles', path: '/projects/cycles' },
      { title: 'Modules', path: '/projects/modules' },
      { title: 'Views', path: '/projects/views' },
      { title: 'Pages', path: '/projects/pages' },
      { title: 'Settings', path: '/projects/settings' },
    ],
  },
];