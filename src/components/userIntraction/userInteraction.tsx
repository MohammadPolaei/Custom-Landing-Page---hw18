import Form from "./form/form";
import OfferAndBenefits from "./offer/offerAndBenefits";

function UserInteraction() {
	return (
		<div className="flex flex-row justify-between w-4/5 gap-10">
			<Form />
			<OfferAndBenefits />
		</div>
	);
}
export default UserInteraction;
