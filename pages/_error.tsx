import React from "react";
import { useRouter } from "next/router";
import Error from "@/components/Error";
import { frontendBaseUrl } from "@/constants/variables";

const ServerError = () => {
	const router = useRouter();
	return (
		<Error
			title="Oops, something went wrong."
			description="Sorry, something went wrong. We're working on getting this fixed as soon as we can."
			image={`${frontendBaseUrl}/vectors/server-error.svg`}
			button={{
				label: "Let's get you home",
				action: () => router.push("/"),
			}}
		/>
	);
};

ServerError.getInitialProps = ({ res, err }: { res: any; err: any }) => {
	const statusCode = res ? res?.statusCode : err ? err?.statusCode : 404;
	return { statusCode };
};

export default ServerError;
