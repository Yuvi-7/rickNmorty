import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table"
import type { TypeCharacter } from "../types/rm"
import { Link } from "@tanstack/react-router"

type Props = {
    data: TypeCharacter[]
    isLoading?: boolean
    isError?: boolean
    error?: Error | null
  }
  
  const columns: ColumnDef<TypeCharacter>[] = [
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }) => {
        const c = row.original
        return (
          <Link to="/character/$id" params={{ id: String(c.id) }} className="text-blue-600 hover:underline">
            {c.name}
          </Link>
        )
      },
    },
    { header: "Status", accessorKey: "status" },
    { header: "Species", accessorKey: "species" },
    { header: "Gender", accessorKey: "gender" },
    {
      header: "Location",
      accessorFn: (c) => c.location?.name ?? "",
    },
    {
      header: "Episodes",
      accessorFn: (c) => c.episode?.length ?? 0,
    },
  ]
  

const CharactersTable = ({ data, isLoading }: Props) => {

    console.log(data, 'dat')
    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    
      if (isLoading) {
        return <div>Loading characters…</div>
      }
    
      
  return (
    <div className="overflow-x-auto border rounded-md border-gray-100">
    <table className="w-full text-sm">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <th key={header.id} className="text-left p-3 font-medium dark:text-black">
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="odd:bg-background even:bg-muted/30 text-left">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-3 align-top">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default CharactersTable