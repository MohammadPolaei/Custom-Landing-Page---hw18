import Button from "../shared/button";
import Description from "../shared/description";
import TittleHeader from "../shared/titleHeader";

function Footer() {
	return (
		<div className="w-full flex flex-col gap-5 items-center px-25 pb-20">
			<TittleHeader text="Contact Us" />
			<Description text="So you can use the service and support contacting us via our Email : support@MyLandingPage.com" />
			<Description text="for more information and special services just submit a Ticket at below link 👇" />
			<div className="w-1/3">
				<Button text="Submit your Ticket" link="https://www.google.com" />
			</div>
		</div>
	);
}

export default Footer;
