"use client"

import { Task } from "@prisma/client"
import {ColumnDef} from "@tanstack/react-table"

export const columns: ColumnDef<Task>[] = [
    {accessorKey: "id", header: "ID"},
    {accessorKey: "project", header: "Project"},
    {accessorKey: "name", header: "Name"},
    {accessorKey: "description", header: "Description"},
    {accessorKey: "startDate", header: "Start date"},
    {accessorKey: "endDate", header: "Due date"},
    {accessorKey: "status", header: "Status"},
    {accessorKey: "assignedTo", header: "Assigned to"},
    {accessorKey: "createdBy", header: "Created by"},

]