import Button from "../../shared/button";

function Form() {
	return (
		<div className="flex flex-col flex-1 items-center gap-10 bg-white p-15 shadow-md rounded-sm">
			<div className="flex flex-col gap-2 items-center">
				<h2 className="text-[#7f93d1] text-xl font-semibold">User Offers !</h2>
				<p className="text-[#7f93d1]">Enter your name and offer code !</p>
			</div>
			<div className="flex flex-col gap-2 w-full">
				<input
					type="text"
					className="rounded-sm bg-white border-2 outline-0 border-[#7f93d155] py-3 w-full"
				/>
				<input
					type="text"
					className="rounded-sm bg-white border-2 outline-0 border-[#7f93d155] py-3 w-full"
				/>
			</div>

			<Button text="Submit" />
		</div>
	);
}

export default Form;
