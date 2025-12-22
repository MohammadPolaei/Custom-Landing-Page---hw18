import Description from "../shared/description";
import TittleHeader from "../shared/titleHeader";

function Header() {
	return (
		<div className="flex flex-col items-center gap-2">
			<TittleHeader text={"Madd Beats"} />
			<Description
				text={"Hi , welcome to Madd Beats . too many BEATs you can choose !"}
			/>
		</div>
	);
}

export default Header;
