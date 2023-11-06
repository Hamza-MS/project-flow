// @flow
import * as React from 'react';
import ProjectPageHeader from "@/app/auth/signin/components/project-page-header";
import {PlusIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {SearchInput} from "@/components/ui/search-input";
import {Dialog} from "@/components/ui/dialog";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import ProjectCreateForm from "@/app/projects/components/project-create-form";

type Props = {
    children: React.ReactNode
};
const Layout = (props: Props) => {
    return (
       <main className="relative flex h-full w-full flex-col overflow-hidden bg-custom-background-100">

           {props.children}
       </main>
    );
};

export default Layout;