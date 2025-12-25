import { useState } from "react";
import Button from "../../shared/button";
import type { form } from "../userInteraction";

type formProps = {
	setchange: (data: form) => void;
};

function Form({ setchange }: formProps) {
	const [username, setUsername] = useState<string>("");
	const [offerCode, setOfferCode] = useState<string>("");

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setchange({
			username,
			offerCode,
		});
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col justify-center flex-1 items-center gap-10 bg-white p-15 shadow-md rounded-sm"
		>
			<div className="flex flex-col gap-2 items-center">
				<h2 className="text-[#7f93d1] text-xl font-semibold">User Offers !</h2>
				<p className="text-[#7f93d1]">Enter your name and offer code !</p>
			</div>
			<div className="flex flex-col gap-2 w-full">
				<input
					type="text"
					className="rounded-sm bg-white border-2 outline-0 border-[#7f93d155] py-3 w-full px-3 text-[#00000055]"
					placeholder="Your name"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="text"
					className="rounded-sm bg-white border-2 outline-0 border-[#7f93d155] py-3 w-full px-3 text-[#00000055]"
					placeholder="Your OFFER code"
					value={offerCode}
					onChange={(e) => setOfferCode(e.target.value)}
				/>
			</div>

			<Button text="Submit" />
		</form>
	);
}

export default Form;
