import { User } from "@/models";

export type T_USER_ROLE = "ADMIN" | "USER" | "GUEST";

export interface IUser extends Omit<User, "createdAt" | "updatedAt"> {}
