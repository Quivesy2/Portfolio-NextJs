import {SideNavItem} from "@/components/mobile/types";

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Projects',
        path: '/projects',
        submenu: true,
        subMenuItems: [
            {title: 'All', path: '/projects'},
            {title: 'Spotify Clone', path: '/projects/spotify-clone'},
            {title: 'Portfolio', path: '/projects/portfolio'},
            {title: 'GIP', path: '/projects/gip'},
        ],
    },
    {
        title: 'Contact',
        path: '/contact',

    },

];
