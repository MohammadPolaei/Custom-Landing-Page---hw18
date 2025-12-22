function Button(text: string, link?: string) {
	return (
		<button>{link ? <a href="https://www.google.com">{text}</a> : text}</button>
	);
}

export default Button;
