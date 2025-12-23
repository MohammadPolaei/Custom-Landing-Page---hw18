type props = {
	text: string;
};

function TittleHeader({ text }: props) {
	return (
		<h1 className="text-[#7f93d1] font-semibold text-2xl pb-3 border-b-2 border-[#7f93d155]">
			{text}
		</h1>
	);
}
export default TittleHeader;
