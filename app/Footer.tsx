export default function Footer() {
	return (
		<footer className="row-start-3 flex items-end justify-center pb-4 w-full relative">
			{/* Circuit board pattern */}
			<div className="absolute bottom-0 left-0 right-0 h-40 opacity-12 text-gray-500 pointer-events-none">
				<svg
					width="100%"
					height="100%"
					viewBox="-10 0 1450 200"
					preserveAspectRatio="xMidYMid slice"
				>
					{/* Horizontal traces */}
					<line
						x1="0"
						y1="80"
						x2="400"
						y2="80"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<line
						x1="500"
						y1="80"
						x2="900"
						y2="80"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<line
						x1="1000"
						y1="80"
						x2="1400"
						y2="80"
						stroke="currentColor"
						strokeWidth="0.5"
					/>

					{/* Vertical traces */}
					<line
						x1="200"
						y1="35"
						x2="200"
						y2="115"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<line
						x1="700"
						y1="35"
						x2="700"
						y2="115"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<line
						x1="1200"
						y1="35"
						x2="1200"
						y2="115"
						stroke="currentColor"
						strokeWidth="0.5"
					/>

					{/* Connection nodes */}
					<circle cx="0" cy="80" r="3" fill="currentColor" />
					<circle cx="200" cy="40" r="3" fill="currentColor" />
					<circle cx="200" cy="120" r="3" fill="currentColor" />
					<circle cx="200" cy="80" r="3" fill="currentColor" />
					<circle cx="200" cy="80" r="3" fill="currentColor" />
					<circle cx="400" cy="80" r="3" fill="currentColor" />

					<circle cx="500" cy="80" r="3" fill="currentColor" />
					<circle cx="700" cy="40" r="3" fill="currentColor" />
					<circle cx="700" cy="80" r="3" fill="currentColor" />
					<circle cx="700" cy="120" r="3" fill="currentColor" />
					<circle cx="700" cy="80" r="3" fill="currentColor" />
					<circle cx="700" cy="80" r="3" fill="currentColor" />
					<circle cx="900" cy="80" r="3" fill="currentColor" />

					<circle cx="1000" cy="80" r="3" fill="currentColor" />
					<circle cx="1200" cy="40" r="3" fill="currentColor" />
					<circle cx="1200" cy="80" r="3" fill="currentColor" />
					<circle cx="1200" cy="120" r="3" fill="currentColor" />
					<circle cx="1400" cy="80" r="3" fill="currentColor" />

					{/* Small rectangles (chips) */}
					<rect
						x="395"
						y="75"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="895"
						y="75"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>

					{/* Rectangles at line ends */}
					<rect
						x="-5"
						y="75"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="1395"
						y="75"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="195"
						y="35"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="195"
						y="115"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>

					<rect
						x="495"
						y="75"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="695"
						y="35"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="695"
						y="115"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>

					<rect
						x="995"
						y="75"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="1195"
						y="35"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
					<rect
						x="1195"
						y="115"
						width="10"
						height="10"
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
				</svg>
			</div>

			<p className="font-mono text-sm text-gray-600 dark:text-gray-400 relative z-10">
				© 2025 Kardama Systems Private Limited
			</p>
		</footer>
	);
}
