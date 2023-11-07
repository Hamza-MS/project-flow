"use client"

import { Project, TaskStatus, User } from "@prisma/client"
import {ColumnDef} from "@tanstack/react-table"

export const columns: ColumnDef<TaskStatus>[] = [
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