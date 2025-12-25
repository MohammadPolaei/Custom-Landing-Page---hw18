type SocialProof2Type = {
	title: string;
	description: string;
	profilePicture: string;
};

function SocialProof2Items({
	title,
	description,
	profilePicture,
}: SocialProof2Type) {
	return (
		<div className="bg-linear-to-r from-white to-[#fffa] shadow-md rounded-sm px-10 w-1/2 h-3/4 flex flex-col justify-center gap-5 items-center relative ">
			<div className="text-3xl font-semibold text-[#000b]">{title}</div>
			<p className="text-center text-[#0008]">{description}</p>
			<img
				className="w-30 rounded-[100%] absolute bottom-[-12%] border border-white shadow-2xl"
				src={profilePicture}
			/>
		</div>
	);
}

export default SocialProof2Items;
