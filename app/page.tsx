import Image from 'next/image';
import Component from './Component';

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[auto_auto_1fr] justify-items-center min-h-screen p-4 gap-6 sm:p-10">
			<header className="row-start-1 flex items-center justify-center pt-4">
				<Image
					className="dark:invert"
					src="/kardamaDark.svg"
					alt="Kardama Systems logo"
					width={200}
					height={100}
					priority
				/>
			</header>
			<main className="row-start-2 pt-40">
				<Component />
			</main>
			<footer className="row-start-3 flex items-end justify-center pb-4">
				<p className="font-mono text-sm text-gray-600 dark:text-gray-400">
					Kardama Systems
				</p>
			</footer>
		</div>
	);
}
