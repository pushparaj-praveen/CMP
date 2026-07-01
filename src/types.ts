export interface DeanMessage {
  name: string;
  title: string;
  avatar: string;
  content: string;
  signature: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: "Academic" | "Admissions" | "Event" | "General";
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  hod: string;
  description: string;
  facultyCount: number;
  studentsCount: number;
  streams: string[];
  image: string;
  facilities: string[];
}

export interface StudentRecord {
  id: string;
  name: string;
  rollNo: string;
  department: string;
  year: number;
  email: string;
  gpa: number;
  status: "Dean's List" | "Active" | "On Probation";
  enrollmentDate: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  avatar: string;
  specialty: string;
  publications: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Academics" | "Student Life" | "Athletics";
  description: string;
  image: string;
}

export interface TimetableSlot {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
  time: string; // e.g., "09:00 AM - 10:30 AM"
  subject: string;
  room: string;
  teacher: string;
  department: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapImage: string;
  coordinates: { lat: number; lng: number };
}

export interface UniversityData {
  universityName: string;
  tagline: string;
  established: string;
  location: string;
  deanMessage: DeanMessage;
  announcements: Announcement[];
  events: EventItem[];
  departments: Department[];
  students: StudentRecord[];
  faculty: FacultyMember[];
  gallery: GalleryItem[];
  timetable: TimetableSlot[];
  contactInfo: ContactInfo;
}
