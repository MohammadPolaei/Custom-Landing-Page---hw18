import { useState } from "react";
import Form from "./form/form";
import OfferAndBenefits from "./offer/offerAndBenefits";

export interface form {
	username: string;
	offerCode: string;
}

function UserInteraction() {
	const [formData, setchanges] = useState<form>({
		username: "",
		offerCode: "",
	});
	return (
		<div className="flex flex-row justify-between w-4/5 gap-10">
			<Form setchange={setchanges} />
			<OfferAndBenefits {...formData} />
		</div>
	);
}
export default UserInteraction;
