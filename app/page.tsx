import Image from 'next/image';
import Component from './Component';
import Footer from './Footer';

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[auto_auto_1fr] justify-items-center min-h-screen px-4 py-2 gap-6 sm:p-10">
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
			<main className="row-start-2 pt-16 w-full">
				<Component />
			</main>
			<Footer />
		</div>
	);
}
