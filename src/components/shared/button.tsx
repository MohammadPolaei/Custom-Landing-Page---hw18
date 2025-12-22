type buttonProps = {
	text: string;
	link?: string;
};

function Button({ text, link }: buttonProps) {
	return (
		<button className="bg-[#4eb829] w-full rounded-sm shadow-md text-white py-2 hover:bg-[#4eb8aa] hover:shadow-xl transition-[bg shadow] delay-100 ease-in-out duration-300">
			{link ? <a href="https://www.google.com">{text}</a> : text}
		</button>
	);
}

export default Button;
