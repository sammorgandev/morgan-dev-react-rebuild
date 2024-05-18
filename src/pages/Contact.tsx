import {
	BugAntIcon,
	ChatBubbleLeftRightIcon,
	ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<div className="max-w-lg justify-center">
			<div>
				<h2 className="text-left lg:text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Contact me
				</h2>
				<p className="text-left lg:text-center mt-2 text-lg leading-8 text-gray-600">
					There are a few different ways you can get in touch.{" "}
				</p>
			</div>
			<div className="mx-auto mt-20 max-w-lg space-y-16">
				<div className="flex gap-x-6">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
						<ChatBubbleLeftRightIcon
							className="h-6 w-6 text-white"
							aria-hidden="true"
						/>
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							By email
						</h3>
						<p className="mt-2 leading-7 text-gray-600">
							Get in touch about collaborations or other opportunities. I don't
							respond to sales emails.
						</p>
						<p className="mt-4">
							<Link
								to="#"
								className="text-sm font-semibold leading-6 text-indigo-600">
								Send an email <span aria-hidden="true">&rarr;</span>
							</Link>
						</p>
					</div>
				</div>
				<div className="flex gap-x-6">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
						<BugAntIcon className="h-6 w-6 text-white" aria-hidden="true" />
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							On twitter (@_sambubble)
						</h3>
						<p className="mt-2 leading-7 text-gray-600">
							I'm most active on twitter - follow me here for updates about
							@bubble and my other projects.
						</p>
						<p className="mt-4">
							<Link
								to="#"
								className="text-sm font-semibold leading-6 text-indigo-600">
								Follow me <span aria-hidden="true">&rarr;</span>
							</Link>
						</p>
					</div>
				</div>
				<div className="flex gap-x-6">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
						<ComputerDesktopIcon
							className="h-6 w-6 text-white"
							aria-hidden="true"
						/>
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-gray-900">
							Instagram
						</h3>
						<p className="mt-2 leading-7 text-gray-600">
							I mostly post about my personal life and my travels on instagram.
						</p>
						<p className="mt-4">
							<Link
								to="#"
								className="text-sm font-semibold leading-6 text-indigo-600">
								Get in touch <span aria-hidden="true">&rarr;</span>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
