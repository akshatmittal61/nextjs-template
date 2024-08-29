import { User, UserModel } from "@/models";
import { getNonNullValue, getObjectFromMongoResponse } from "@/utils";

export const findOne = async (query: Partial<User>): Promise<User | null> => {
	const res = await UserModel.findOne(query).select("-password");
	return getObjectFromMongoResponse<User>(res);
};

export const findById = async (id: string): Promise<User | null> => {
	const res = await UserModel.findById(id)
		.select("-password")
		.catch((error: any) => {
			if (error.kind === "ObjectId") return null;
			return Promise.reject(error);
		});
	return getObjectFromMongoResponse<User>(res);
};

export const find = async (
	query: Partial<User>
): Promise<User | User[] | null> => {
	const res = await UserModel.find(query).select("-password");
	if (res.length > 1) {
		const parsedRes = res
			.map((user) => getObjectFromMongoResponse<User>(user))
			.filter((user) => user !== null) as User[];
		if (parsedRes.length > 0) return parsedRes;
	} else if (res.length === 1) {
		return getObjectFromMongoResponse<User>(res[0]);
	}
	return null;
};

export const findAll = async (): Promise<Array<User>> => {
	const res = await UserModel.find({})
		.select("-password")
		.sort({ createdAt: -1 });
	const parsedRes = res
		.map((user) => getObjectFromMongoResponse<User>(user))
		.filter((user) => user !== null) as User[];
	if (parsedRes.length > 0) return parsedRes;
	return [];
};

export const create = async (
	user: Omit<User, "id" | "createdAt" | "updatedAt">
): Promise<User> => {
	const res = await UserModel.create(user);
	return getNonNullValue(getObjectFromMongoResponse<User>(res));
};

export const update = async (
	query: Partial<User>,
	update: Partial<Omit<User, "id" | "createdAt" | "updatedAt">>
): Promise<User | null> => {
	const res = query.id
		? await UserModel.findByIdAndUpdate(query.id, update, {
				new: true,
			}).select("-password")
		: await UserModel.findOneAndUpdate(query, update, { new: true }).select(
				"-password"
			);
	return getObjectFromMongoResponse<User>(res);
};

export const remove = async (query: Partial<User>): Promise<User | null> => {
	const res = query.id
		? await UserModel.findByIdAndDelete(query.id).select("-password")
		: await UserModel.findOneAndDelete(query).select("-password");
	return getObjectFromMongoResponse<User>(res);
};
