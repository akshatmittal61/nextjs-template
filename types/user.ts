import { User } from "@/models";

export type T_USER_ROLE = "ADMIN" | "USER" | "GUEST";

export type IUser = Omit<User, "createdAt" | "updatedAt">;
