import Footer from "./footer/footer";
import Header from "./header/header";
import SocialProofContainer from "./socialProof/socialProofContainer";
import UserInteraction from "./userIntraction/userInteraction";

function Home() {
	return (
		<div className="bg-[#c1d0fa] w-full h-full flex flex-col items-center justify-between gap-10 py-10">
			<Header />
			<UserInteraction />
			<SocialProofContainer />
			<Footer />
		</div>
	);
}
export default Home;
