import {
  IconActivity,
  IconNotification,
  IconLayoutDashboard,
  IconSettings,
  IconUsersGroup,
  IconCards,
  IconChartPie,
  IconShieldLock
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Manage",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard"
  },
  {
    id: uniqueId(),
    title: "My Cards",
    icon: IconCards,
    href: "/mycards"
  },
  {
    id: uniqueId(),
    title: "Activity",
    icon: IconActivity,
    href: "/activity"
  },
  // {
  //   id: uniqueId(),
  //   title: "Statistics",
  //   icon: IconChartPie,
  //   href: "/#"
  // },

  {
    navlabel: true,
    subheader: "Preferences",
  },
  {
    id: uniqueId(),
    title: "My Contacts",
    icon: IconUsersGroup,
    href: "/contacts"
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconSettings,
    href: "/settings"
    // href: "/creditreport/accountage"
  },
  // {
  //   navlabel: true,
  //   subheader: 'Credit Report',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Score Factors',
  //   icon: IconGauge,
  //   href: '#',
  //   submenu: [
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '#',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '/scorefactors',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '/scorefactors',
  //     },
  //     {
  //       id: uniqueId(),
  //       title: 'My Accounts',
  //       icon: IconUser,
  //       href: '/scorefactors',
  //     },

  //   ],
  // },
  
];

export default Menuitems;
