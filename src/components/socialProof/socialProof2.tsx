import SocialProof2Items from "./socialProof2-items";

function SocialProof2() {
	return (
		<div className="w-full h-150 bg-[#43517a] shadow-md flex flex-row justify-around gap-15 items-center px-25">
			<SocialProof2Items
				title="Good support"
				description="the support was great 👍 I solved the problem really fast ."
				profilePicture="../../../src/assets/userPhotos/user1.jpg"
			/>
			<SocialProof2Items
				title="Offers are great Idea , thank you"
				description="I hope to have an Offer on this weekend so I can cook some fire with your packages 🔥"
				profilePicture="../../../src/assets/userPhotos/user2.webp"
			/>
			<SocialProof2Items
				title="Great packages"
				description="still waiting for your VIP soundFX packages . your team is great and I hope to see better features in the future !"
				profilePicture="../../../src/assets/userPhotos/user3.webp"
			/>
		</div>
	);
}

export default SocialProof2;
