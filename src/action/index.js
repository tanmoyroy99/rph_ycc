export const LOGIN_USER     = "LOGIN_USER";
export const STUDENT_LIST   = "STUDENT_LIST";
export const STUDENT_HEADER = "STUDENT_HEADER";

export function setStudentHeader(data){
            return {
                type: STUDENT_HEADER,
                data
            }
        }

export function setStudentList(data){
            return {
                type: STUDENT_LIST,
                data
            }
        }

export function setLoginUser(data){
            return {
                type: STUDENT_LIST,
                data
            }
        }