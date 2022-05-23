export interface SidebarItem {
    title: string;
    path: string;
    icon?: any;
    notification?: number;
    iconOpened?: any;
    iconClosed?: any;
    subnav?: SidebarItem[];
}
