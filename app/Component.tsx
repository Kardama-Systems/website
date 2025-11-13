import { Button } from '@/components/ui/button';

export default function Component() {
	return (
		<div className="max-w-3xl mx-auto text-left space-y-12">
			<p className="flex text-[14px] leading-relaxed text-center text-gray-700 dark:text-gray-300">
				We&apos;re building next-generation operations software for India&apos;s
				distributed renewable energy sector. Currently embedding with solar
				developers to understand the biggest operational bottlenecks — from
				multi-vendor monitoring chaos, site simulation to billing & DISCOM
				reconciliation to asset performance tracking. If you&apos;re spending
				too much time on manual ops work, let&apos;s talk.
			</p>

			<div className="flex justify-center items-center">
				<Button
					variant="secondary"
					asChild
					className="text-[14px] bg-gray-800 text-white hover:bg-gray-300 hover:text-gray-800 hover:cursor-pointer dark:hover:bg-gray-800 dark:text-gray-300 rounded-sm font-medium transition-colors"
				>
					<a href="mailto:shekhar@kardama.systems">Let&apos;s Talk</a>
				</Button>
			</div>

			<div className="space-y-6 text-left">
				<h2 className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">
					Who We Are
				</h2>

				<div className="space-y-4">
					<div>
						<h3 className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
							Shekhar Jha
						</h3>
						<p className="text-[13px] text-gray-600 dark:text-gray-400">
							Founder & CEO. Previously at Peak Energy, where I automated
							sodium-ion battery manufacturing operations. Bringing the same
							automation principles to solve India&apos;s solar operations
							challenges.
						</p>
					</div>

					<div>
						<h3 className="text-[14px] font-medium text-gray-900 dark:text-gray-100">
							Saurya Velagapudi
						</h3>
						<p className="text-[13px] text-gray-600 dark:text-gray-400">
							Advisor. Previously Engineering Manager at Peak Energy and Google
							Earth, Pay, Gmail teams, with deep experience building energy,
							infrastructure software and scaling technical teams.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
