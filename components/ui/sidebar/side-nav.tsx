import React from 'react';
import {WorkspaceSidebarMenu} from "@/components/ui/sidebar/sidebar-menu";
import WorkspaceSidebarDropdown from "@/components/ui/sidebar/sidebar-dropdown";
import ProjectSidebarList from "@/components/ui/sidebar/sidebar-projects";
import WorkPlaceToggles from "@/components/ui/sidebar/sidebar-toggles";

const SideNav = () => {

    const sidebarCollapsed = false; // TODO: get from context

    return (
        <div
            id="app-sidebar"
            className={`fixed md:relative inset-y-0 flex flex-col bg-background h-full flex-shrink-0 flex-grow-0 border-r border-border z-20 duration-300 ${
                sidebarCollapsed ? "" : "md:w-[280px]"
            } ${sidebarCollapsed ? "left-0" : "-left-full md:left-0"}`}
        >
            <div className="flex h-full w-full flex-1 flex-col">
                <WorkspaceSidebarDropdown />
                <WorkspaceSidebarMenu />
                <ProjectSidebarList/>
                <WorkPlaceToggles/>
            </div>
        </div>
    );
};

export default SideNav;
