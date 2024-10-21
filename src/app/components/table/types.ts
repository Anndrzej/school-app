export interface TableTypes {
  header: string;
  accessor: string;
  className?: string;
}

interface Person {
  id: number;
  name: string;
  email?: string;
  photo?: string;
  phone?: string;
  address: string;
}

export type Teacher = Person & {
  teacherId: string;
  subjects: string[];
  classes: string[];
};

export type Student = Person & {
  studentId: string;
  grade: number;
  class: string;
};

export type Parent = Person & {
  students: string[];
  phone: string;
};
