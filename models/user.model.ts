import { USER_ROLES } from "@/constants";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		role: {
			type: String,
			default: USER_ROLES.USER,
			enum: Object.values(USER_ROLES),
		},
	},
	{
		timestamps: true,
	}
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;

export interface User {
	id: string;
	name: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}
