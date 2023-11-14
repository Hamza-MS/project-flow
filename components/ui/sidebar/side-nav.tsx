'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/app/sidebar/constants';
import { SideNavItem } from '@/app/sidebar/types';
import { Icon } from '@iconify/react';
import {WorkspaceSidebarMenu} from "@/components/ui/sidebar/sidebar-menu";

const SideNav = () => {

  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

    return (
        <div
            id="app-sidebar"
            className={`fixed md:relative inset-y-0 flex flex-col bg-custom-sidebar-background-100 h-full flex-shrink-0 flex-grow-0 border-r border-custom-sidebar-border-200 z-20 duration-300 ${
                sidebarCollapsed ? "" : "md:w-[280px]"
            } ${sidebarCollapsed ? "left-0" : "-left-full md:left-0"}`}
        >
          <div className="flex h-full w-full flex-1 flex-col">

            <WorkspaceSidebarMenu  sidebarCollapsed={sidebarCollapsed}/>

          </div>
        </div>
    );
  };
  
  export default SideNav;
  
 /*
 <WorkspaceSidebarDropdown />
 <WorkspaceSidebarQuickAction />
  <ProjectSidebarList />
  <WorkspaceHelpSection />
  */