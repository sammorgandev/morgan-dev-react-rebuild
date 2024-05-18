import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "./logo";
import { useLocation } from "react-router-dom";
const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Work", href: "/work" },
	{ name: "Blog", href: "/blog" },
];

/**
 * This is an example comment.
 */

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	const currentPath = location.pathname;

	return (
		<header className="bg-transparent">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<Logo />

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={
								currentPath === item.href.toLowerCase()
									? "text-indigo-600 text-sm font-semibold leading-6 hover:text-indigo-600"
									: "text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
							}>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						to="/contact"
						className="text-sm font-semibold leading-6 text-gray-900">
						Contact <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
			<Dialog
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Logo />
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								className="h-6 w-6 text-indigo-600"
								aria-hidden="true"
							/>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6" onClick={() => setMobileMenuOpen(false)}>
								<Link
									to="/contact"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
									Contact
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Dialog>
		</header>
	);
}
