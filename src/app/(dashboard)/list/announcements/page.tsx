import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import Image from "next/image";
import { Announcement, Class, Prisma } from "@prisma/client";
import { getRole } from "@/lib/utils";

type AnnouncementList = Announcement & { class: Class };

const baseColumns = [
  { header: "Title", accessor: "title" },
  { header: "Class", accessor: "class" },
  { header: "Date", accessor: "date", className: "hidden md:table-cell" },
];

export default async function AnnouncementListPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const role = await getRole();
  const p = searchParams.page ? parseInt(searchParams.page) : 1;
  const search = searchParams.search;

  const where: Prisma.AnnouncementWhereInput = search
    ? { title: { contains: search, mode: "insensitive" } }
    : {};

  const [announcementsData, count] = await prisma.$transaction([
    prisma.announcement.findMany({
      where,
      include: {
        class: { select: { name: true } },
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.announcement.count({ where }),
  ]);

  const columns =
    role === "admin" || role === "teacher"
      ? [...baseColumns, { header: "Actions", accessor: "action" }]
      : baseColumns;

  const renderRow = async (item: AnnouncementList) => {
    const role = await getRole();
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 text-sm even:bg-slate-50 hover:bg-purpleLight"
      >
        <td className="flex items-center gap-4 p-4">{item.title}</td>
        <td>{item.class.name}</td>
        <td className="hidden md:table-cell">
          {new Intl.DateTimeFormat("en-US").format(item.date)}
        </td>
        {role === "admin" ||
          (role === "teacher" && (
            <td>
              <div className="flex items-center gap-2">
                <FormModal table="announcement" type="update" data={item} />
                <FormModal table="announcement" type="delete" id={item.id} />
              </div>
            </td>
          ))}
      </tr>
    );
  };

  return (
    <div className="m-4 mt-0 flex-1 rounded-md bg-white p-4">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">
          All Announcements
        </h1>
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" ||
              (role === "teacher" && (
                <FormModal table="announcement" type="create" />
              ))}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
}
