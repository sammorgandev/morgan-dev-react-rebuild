import type { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
	return (
		<div className="flex flex-col w-full p-5">
			<div className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-slate-100 flex justify-left lg:justify-center gap-8">
				<div className="wave-element">👋</div>
				<div>
					<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
						Contact{" "}
					</h1>
				</div>
			</div>
			<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
				I&apos;m a computer nerd, product enthusiast, and developer who is
				passionate about{" "}
				<b>helping small businesses and niche industries grow</b> and thrive. I
				work for{" "}
				<a href="https://bubble.io" target="_blank">
					@bubble
				</a>
				by day, and I build websites, mobile apps, custom CRMs, lead tracking
				solutions, and business ops management software in my spare time.
			</p>
			<div className="mt-10 flex items-center justify-left gap-x-6 lg:justify-center">
				<a
					href="/contact"
					className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Get in touch
				</a>
				<a
					href="/about"
					className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
					Learn more <span aria-hidden="true">→</span>
				</a>
			</div>
		</div>
	);
};
export default About;
