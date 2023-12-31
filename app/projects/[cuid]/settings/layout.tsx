import * as React from 'react';
import {SidebarNav} from "@/app/projects/[cuid]/settings/components/sidebar-nav";
import ProjectSettingsHeader from "@/app/projects/[cuid]/settings/components/project-settings-header";

type Props = {
    children: React.ReactNode,
    params: {
        cuid: string
    }
};


const Layout = (props: Props) => {



    const sidebarNavItems = [
        {
            title: "General",
            href: `/projects/${props.params.cuid}/settings`,
        },
        {
            title: "Members",
            href: `/projects/${props.params.cuid}/settings/members`,
        },
        {
            title: "Integrations",
            href: `/projects/${props.params.cuid}/settings/integrations`,
        },
        {
            title: "Estimates",
            href: `/projects/${props.params.cuid}/settings/estimates`,
        },
        {
            title: "Automations",
            href: `/projects/${props.params.cuid}/settings/automations`,
        },
    ]

    return (
        <main className={"relative flex h-full w-full flex-col overflow-hidden bg-custom-background-100"}>
            <ProjectSettingsHeader/>
            <div className={"h-full w-full overflow-hidden"}>
                <div className={"h-full w-full overflow-x-hidden overflow-y-scroll"}>
                    <div className={"flex flex-row gap-2 h-full"}>
                        <div className={"w-80 pt-8 overflow-y-hidden flex-shrink-0"}>
                            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                                <aside className="w-80 px-5">
                                    <div className={"flex flex-col gap-2"}>
                                        <span className="text-xs text-muted-foreground font-semibold">SETTINGS</span>
                                        <SidebarNav items={sidebarNavItems}/>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className={"pr-9 py-8 w-full overflow-y-auto"}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Layout;