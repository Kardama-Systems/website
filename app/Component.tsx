import { Button } from '@/components/ui/button';

export default function Component() {
	return (
		<div className="max-w-6xl mx-auto space-y-16">
			{/* Two column layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
				{/* Left column - Mission */}
				<div className="space-y-8">
					<p className="text-[13px] leading-[1.8] text-gray-900 dark:text-gray-100 tracking-wide">
						Embedded operations engineering for India&apos;s distributed solar
						sector.
					</p>
					<p className="text-[13px] leading-[1.8] text-gray-900 dark:text-gray-100 tracking-wide">
						We&apos;re ex-Peak Energy and Google Earth engineers building
						infrastructure software for solar operations. Our approach: embed
						with your ops team, understand your actual workflows, build custom
						automation that fits how you work. From monitoring integration to
						billing reconciliation to site simulation.
					</p>

					<p className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-400 tracking-wide">
						Early stage. Taking on embedded engagements with solar developers.
					</p>

					<p className="pt-2">
						<Button
							asChild
							className="text-[13px] bg-black text-white hover:bg-gray-900 rounded-sm font-medium tracking-wide px-6 py-4 dark:bg-white dark:text-black dark:hover:bg-gray-100"
						>
							<a href="mailto:shekhar@kardama.systems">Let&apos;s Talk</a>
						</Button>
					</p>
				</div>

				{/* Right column - Team */}
				<div className="space-y-8 border-l border-gray-400 pl-12 md:pl-24">
					<h2 className="text-md font-medium tracking-wide text-gray-800 uppercase">
						Who We Are
					</h2>

					<div className="space-y-8">
						<div className="space-y-2">
							<h3 className="text-[13px] font-medium text-gray-900 dark:text-gray-100 tracking-wide">
								Shekhar Jha
							</h3>
							<p className="text-[12px] text-gray-500 dark:text-gray-500 leading-[1.7] tracking-wide">
								Founder & CEO. Previously at Peak Energy, where I automated
								sodium-ion battery manufacturing operations. Bringing the same
								automation principles to solve India&apos;s solar operations
								challenges.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-[13px] font-medium text-gray-900 dark:text-gray-100 tracking-wide">
								Saurya Velagapudi
							</h3>
							<p className="text-[12px] text-gray-500 dark:text-gray-500 leading-[1.7] tracking-wide">
								Advisor. Previously, Engineering Manager at Peak Energy and
								Google Earth, Pay, Gmail team, with deep experience building
								energy, infrastructure software and scaling technical teams.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
