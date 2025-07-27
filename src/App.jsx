import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

function App() {
	const users = [
		{
			userName: 'hernan_esteche',
			imageUrl: 'https://unavatar.io/deviantart/spyed',
			initialIsFollowing: true,
		},
		{
			userName: 'luana_esteche',
			imageUrl: 'https://unavatar.io/deviantart/spyed',
			initialIsFollowing: false,
		},
	];

	return (
		<section className="bg-neutral-800 h-screen w-full flex flex-col gap-2 items-center justify-center">
			{users.map(({ userName, imageUrl, initialIsFollowing }) => (
				<TwitterFollowCard
					key={userName}
					userName={userName}
					imageUrl={imageUrl}
					initialIsFollowing={initialIsFollowing}
				>
					{userName}
				</TwitterFollowCard>
			))}
		</section>
	);
}

export default App;
