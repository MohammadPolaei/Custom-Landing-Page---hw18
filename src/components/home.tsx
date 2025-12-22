import Header from "./header/header";
import UserInteraction from "./userIntraction/userInteraction";

function Home() {
	return (
		<div className="bg-[#c1d0fa] w-full h-screen flex flex-col items-center justify-between">
			<Header />
			<UserInteraction />
		</div>
	);
}
export default Home;
