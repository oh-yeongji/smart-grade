interface LectureData {
  ilecture: number;
  lectureStrDate: string;
  lectureEndDate: string;
  lectureStrTime: string;
  lectureEndTime: string;
  lectureName: string;
}

interface ProfileData {
  name: string;
  gender: string;
  birthdate: string;
  phone: string;
  pic: string;
  address: string;
  email: string;
  imajor: number;
  majorName: string;
  delYn: number;
  secretKey: string;
}

interface ProfessorProfileData extends ProfileData {
  iprofessor: number;
  createdAt: string;
}

interface StudentProfileData extends ProfileData {
  istudent: number;
  finishedYn: number;
  score: number;
  grade: number;
  studentNum: number;
}

export interface ProfessorProfile {
  lectureList: Array<LectureData>;
  profile: ProfessorProfileData;
}

export interface StudentProfile {
  lectureList: Array<LectureData>;
  profile: StudentProfileData;
}
