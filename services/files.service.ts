import { FileExtension } from "@/types";

export const getContentType = (extension: FileExtension) => {
	switch (extension) {
		case "txt":
			return "text/plain";
		case "md":
			return "text/markdown";
		case "json":
			return "application/json";
		case "csv":
			return "text/csv";
		default:
			return "text/plain";
	}
};

export const saveFile = (
	content: string,
	name: string,
	extension: FileExtension
) => {
	const blob = new Blob([content], { type: getContentType(extension) });
	const url = window.URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `${name}.${extension}`;
	link.click();
	window.URL.revokeObjectURL(url);
	if (link.parentNode) {
		link.parentNode.removeChild(link);
	}
};

export const readFile = (file: File) => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result as string);
		};
		reader.onerror = () => {
			reject(reader.error);
		};
		reader.readAsText(file);
	});
};

export const exportAsJSON = (data: any, name: string) => {
	const json = JSON.stringify(data, null, 2);
	saveFile(json, name, "json");
};

export const jsonToCsv = (json: any[]) => {
	const replacer = (_: any, value: any) => (value === null ? "" : value);
	const header = Object.keys(json[0]);
	let csv = json.map((row: any) =>
		header
			.map((fieldName) => JSON.stringify(row[fieldName], replacer))
			.join(",")
	);
	csv.unshift(header.join(","));
	return csv.join("\r\n");
};

export const exportAsCSV = (data: any[], name: string) => {
	const csv = jsonToCsv(data);
	saveFile(csv, name, "csv");
};
