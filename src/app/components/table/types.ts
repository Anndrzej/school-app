export interface TableTypes {
  header: string;
  accessor: string;
  className?: string;
}

export interface Base {
  id: number;
  name?: string;
  email?: string;
  photo?: string;
  phone?: string;
  address?: string;
}

export interface Teacher extends Base {
  teacherId: string;
  subjects: string[];
  classes: string[];
  phone: string;
  address: string;
}

export interface Student extends Base {
  studentId: string;
  grade: string;
  phone: string;
  address: string;
  class: string;
}

export interface Parent extends Base {
  students: string[];
  phone: string;
  address: string;
}

export interface Subject extends Base {
  teachers: string[];
}

export interface Class extends Base {
  capacity: number;
  grade: number;
  supervisor: string;
}

export interface Lesson extends Base {
  subject: string;
  class: string;
  teacher: string;
}

export interface Exam extends Base {
  subject: string;
  class: string;
  teacher: string;
  date: string;
}
export interface Assignment extends Base {
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
}

export interface Result extends Base {
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
}

export interface Event extends Base {
  title: string;
  class: string;
  date: string;
  startTime?: string;
  endTime?: string;
}

export interface Announcement extends Event {}
