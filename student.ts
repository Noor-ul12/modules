import students from "./data";

export const getAllStudent = () => {
    return students;
}


export const getOnsiteStudent = () => {
    const result = students.filter((student) => student.isOnSite)
    return result;
}