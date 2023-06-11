import { api } from "@/utils/api";
import { type Example } from "@prisma/client";

interface TableProps {
    data: Example[];
}


export default function Table({ data }: TableProps) {

    const deletemutation = api.something.delete_note.useMutation()

    const Delete = (id: string) => {
        deletemutation.mutate(id);
        window.location.href = "/trpc/display"
    }

    return (
        <div className="flex flex-col w-full max-w-3xl">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase">text</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase">createdAt</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase">id</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-white uppercase">action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200 dark:text-gray-200">{item.text}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 dark:text-gray-200">{item.createdAt.toUTCString()}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200 dark:text-gray-200">{item.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button onClick={(e) => { e.preventDefault(); Delete(item.id) }} className="text-blue-500 hover:text-blue-700" >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}