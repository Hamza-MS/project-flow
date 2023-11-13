import * as React from 'react';
import TasksPageHeader from './components/tasks-page-header';

type Props = {
    children: React.ReactNode
};
const Layout = (props: Props) => {
    return (
       <main className="relative flex h-full w-full flex-col overflow-hidden bg-custom-background-100">
            <TasksPageHeader/>
            {props.children}
          
       </main>
    );
};

export default Layout;