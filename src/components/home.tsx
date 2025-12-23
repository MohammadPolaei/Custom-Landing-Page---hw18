import Header from "./header/header";
import SocialProof1 from "./socialProof/socialProof1";
import UserInteraction from "./userIntraction/userInteraction";

function Home() {
	return (
		<div className="bg-[#c1d0fa] w-full h-full flex flex-col items-center justify-between gap-10">
			<Header />
			<UserInteraction />
			<SocialProof1 />
		</div>
	);
}
export default Home;
