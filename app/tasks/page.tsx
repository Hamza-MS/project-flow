import { Task } from "@prisma/client"
import { columns } from "./components/columns"
import { DataTable } from "./components/data_table"
import { getSession } from "next-auth/react"
import { prisma } from "@/lib/prisma"


type Props = {}
export default async function TasksPage(props: Props) {
  const session = await getSession()
  const tasks : Task[] = await prisma.task.findMany(
    // get only the tasks that belong to the projects in witch the use is a member
    {
      where: {
        project: {
          teamMembers: {
            some: {
              id: session?.user.id
            }
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    }
  )

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tasks} />
    </div>
  )
}
