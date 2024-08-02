// create student data

export interface EntryTest{
    isPass: boolean;
    obtainMarks: number;
    totalMark: number
}

export interface students {
    id: number;
    firstName: string;
    lastName: string;
    rollNumber: number;
    email: string;
    isOnSite: boolean;
    entryTest: EntryTest
}




