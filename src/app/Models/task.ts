import { Priority } from "./priority";
import { Status } from "./status";
import { User } from "./user";


export interface Task {
    id: string,
    user: User,
    status: Status,
    dueDate: Date,
    priority: Priority,
    comment: string
}
