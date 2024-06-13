export const getObjectFromMongoResponse = <T>(response: any): T | null => {
	if (response === null || response === undefined) {
		return null;
	}
	const object = response.toObject ? response.toObject() : response;

	// eslint-disable-next-line no-unused-vars
	const { _id, __v, createdAt, updatedAt, ...rest } = object;
	const data = {
		id: (_id ?? object.id).toString(),
		...rest,
	};
	if (createdAt) {
		data.createdAt = new Date(createdAt).toISOString();
	}
	if (updatedAt) {
		data.updatedAt = new Date(updatedAt).toISOString();
	}
	return data;
};
