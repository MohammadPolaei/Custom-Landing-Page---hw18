type props = {
	text: string;
};

function Description({ text }: props) {
	return <p className="text-[#7f93d1]">{text}</p>;
}
export default Description;
