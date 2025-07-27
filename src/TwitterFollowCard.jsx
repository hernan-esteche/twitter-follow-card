import { useState } from 'react';

function TwitterFollowCard({
	children,
	userName,
	imageUrl,
	initialIsFollowing,
}) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	function toggleFollow() {
		setIsFollowing((prev) => !prev);
	}

	const buttonText = isFollowing ? (
		<>
			<span className="block group-hover:hidden">Siguiendo</span>
			<span className="hidden group-hover:block ">Dejar de seguir</span>
		</>
	) : (
		'Seguir'
	);

	const buttonClassName = isFollowing
		? 'bg-white text-black hover:bg-gray-100 hover:border-red-600 hover:text-red-600 hover:bg-red-600/10'
		: 'bg-blue-500 text-white hover:bg-blue-600';

	return (
		<article className="flex items-center justify-between px-4 py-4 min-w-[400px] bg-neutral-900 rounded-full shadow-md">
			<div className="flex gap-2">
				<img
					src={imageUrl}
					alt={`Avatar de ${children}`}
					className="rounded-full size-12"
				/>
				<div className="flex flex-col">
					<strong className="font-semibold text-white">{children}</strong>
					<span className="text-sm text-gray-400/70">@{userName}</span>
				</div>
			</div>

			<button
				type="button"
				aria-pressed={isFollowing}
				onClick={toggleFollow}
				className={`group py-2 px-4 rounded-full border border-transparent font-semibold hover:cursor-pointer transition ${buttonClassName}`}
			>
				{buttonText}
			</button>
		</article>
	);
}

export default TwitterFollowCard;
