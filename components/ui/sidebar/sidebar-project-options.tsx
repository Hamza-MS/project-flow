"use client"
import * as React from 'react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {BotIcon, CableIcon, LayersIcon, Settings} from "lucide-react";

type Props = {
    name: string,
    id: string,
    emojiIcon: string,
};
const ProjectSidebarOptions = (props: Props) => {

    const pathname = usePathname()


    const links=[
        {
            Icon: LayersIcon,
            name: "Tasks",
            href: `/projects/${props.id}/tasks`,
        },
        {
            Icon: CableIcon,
            name: "Charts",
            href: `/projects/${props.id}/charts`,
        },
        {
            Icon: BotIcon,
            name: "Automation",
            href: `/projects/${props.id}/automation`,
        },
        {
            Icon: Settings,
            name: "Settings",
            href: `/projects/${props.id}/settings`,
        }
    ]

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className={"border-0"}>
                <AccordionTrigger className={"hover:no-underline p-2 hover:bg-muted rounded-md"}>
                    <span className={"text-foreground text-sm"}>{props.emojiIcon} {props.name}</span>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="w-full cursor-pointer space-y-1">
                        {links.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    buttonVariants({variant: "ghost"}),
                                    pathname === item.href
                                        ? "bg-muted hover:bg-muted"
                                        : "hover:bg-transparent hover:underline",
                                    "justify-start w-full gap-2.5 font-medium outline-none py-2 "
                                )}
                            >
                                {<item.Icon className={"h-4 w-4 font-medium shrink-0 !text-lg"}/>}
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default ProjectSidebarOptions;