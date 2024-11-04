import prisma from "@/lib/prisma";
import Image from "next/image";

const UserCard = async ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "parent";
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };

  const data = await modelMap[type].count();

  return (
    <div className="min-w-[130px] flex-1 rounded-2xl p-4 odd:bg-purple even:bg-yellow">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="my-4 text-2xl font-semibold">{data}</h1>
      <h2 className="text-sm font-medium capitalize text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
