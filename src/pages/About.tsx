import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<div className="max-w-2xl overflow-scroll">
			<h1 className="text-left lg:text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
				<div className="flex justify-start lg:justify-center gap-4">
					<div className="-mt-0.5">💁‍♂️</div> About
				</div>
			</h1>

			<div className="mt-6 text-left max-w-2xl dark:text-slate-300">
				<p>
					This site is my home for personal work and side projects. I don&apos;t
					take on a lot of freelance development work, but I&apos;m particularly
					passionate about helping small businesses and niche industries use
					technology and automation to supercharge their operations - so if that
					sounds like something you&apos;re looking for in a developer, I&apos;m
					always open to networking and connection opportunities.
				</p>
				<h2 className="text-xl font-bold mt-10">
					Here are a few things I&apos;m looking for in collaborators:
				</h2>
				<ul className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-slate-300">
					<li className="flex gap-x-3">
						<CheckCircleIcon
							className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-500"
							aria-hidden="true"
						/>
						<span>
							<strong className="font-semibold text-gray-900 dark:text-slate-300">
								Intuitive thinkers & learners{" "}
							</strong>{" "}
							I like to work with people who are quick to adapt and learn new
							things, and who follow their intuition.
						</span>
					</li>
					<li className="flex gap-x-3">
						<CheckCircleIcon
							className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-500"
							aria-hidden="true"
						/>
						<span>
							<strong className="font-semibold text-gray-900 dark:text-slate-300">
								Ship fast mindsets
							</strong>{" "}
							I like to work with people who ship and fail fast. I&apos;m
							comfortable iterating and changing course if the market speaks to
							me.
						</span>
					</li>
					<li className="flex gap-x-3">
						<CheckCircleIcon
							className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-500"
							aria-hidden="true"
						/>
						<span>
							<strong className="font-semibold text-gray-900 dark:text-slate-300">
								Design backgrounds
							</strong>{" "}
							I&apos;m a builder at heart, and if you&apos;re a designer at
							heart we should work together.
						</span>
					</li>
				</ul>
				<div className="mt-10 flex items-center justify-left gap-x-6 lg:justify-left">
					<a
						href="/contact"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Get in touch
					</a>
					<a
						href="/work"
						className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300 hover:text-indigo-600 transition-all ease-in">
						Browse work <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	);
}
