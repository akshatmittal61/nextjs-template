import React from "react";
import { useRouter } from "next/router";
import { Error } from "@/components";
import { frontendBaseUrl } from "@/constants";

const PageNotFound: React.FC = () => {
	const router = useRouter();
	return (
		<Error
			title="Oops! You seem to be lost"
			description="The page you are looking for does not exist."
			image={`${frontendBaseUrl}/vectors/not-found.svg`}
			button={{
				label: "Let's get you home",
				action: () => router.push("/"),
			}}
		/>
	);
};

export default PageNotFound;
