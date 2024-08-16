
import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';

import icon1 from 'src/assets/images/svgs/icon-account.svg'
import icon2 from 'src/assets/images/svgs/icon-inbox.svg'
import icon3 from 'src/assets/images/svgs/icon-tasks.svg'

import ddIcon1 from 'src/assets/images/svgs/icon-dd-chat.svg'
import ddIcon2 from 'src/assets/images/svgs/icon-dd-cart.svg'
import ddIcon3 from 'src/assets/images/svgs/icon-dd-invoice.svg'
import ddIcon4 from 'src/assets/images/svgs/icon-dd-date.svg'
import ddIcon5 from 'src/assets/images/svgs/icon-dd-mobile.svg'
import ddIcon6 from 'src/assets/images/svgs/icon-dd-lifebuoy.svg'
import ddIcon7 from 'src/assets/images/svgs/icon-dd-message-box.svg'
import ddIcon8 from 'src/assets/images/svgs/icon-dd-application.svg'
import { IconGauge, IconMoneybag, IconUser } from '@tabler/icons-react';

//
// Notifications dropdown
//
const notifications = [
  {
    icon: IconMoneybag,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    icon: IconMoneybag,
    title: 'Credit Usage',
    subtitle: 'Your credit usage is high',
  },
  {
    icon: IconMoneybag,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
];

//
// Profile dropdown
//
const profile = [
  {
    href: '/user-profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: IconUser,
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
  // {
  //   href: '/apps/notes',
  //   title: 'My Tasks',
  //   subtitle: 'To-do and Daily Tasks',
  //   icon: icon3,
  // },
];

// apps dropdown


const pageLinks = [
  {
    href: '/pricing',
    title: 'Pricing Page'
  },
  {
    href: '/auth/login',
    title: 'Authentication Design'
  },
  {
    href: '/auth/register',
    title: 'Register Now'
  },
  {
    href: '/404',
    title: '404 Error Page'
  },
  {
    href: '/apps/notes',
    title: 'Notes App'
  },
  {
    href: '/user-profile',
    title: 'User Application'
  },
  {
    href: '/apps/blog/posts',
    title: 'Blog Design'
  },
  {
    href: '/apps/ecommerce/eco-checkout',
    title: 'Shopping Cart'
  },
]

export { notifications, profile, pageLinks };
