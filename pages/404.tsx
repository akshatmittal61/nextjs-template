import React from "react";
import { useRouter } from "next/router";
import Error from "@/components/Error";

const PageNotFound: React.FC = () => {
	const router = useRouter();
	return (
		<Error
			title="Oops! You seem to be lost"
			description="The page you are looking for does not exist."
			button={{
				label: "Let's get you home",
				action: () => router.push("/"),
			}}
		/>
	);
};

export default PageNotFound;
