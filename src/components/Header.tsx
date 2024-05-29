import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "./logo";
import { useLocation } from "react-router-dom";
import { useDarkMode } from "./ThemeProvider";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Work", href: "/work" },
];

/**
 * This is an example comment.
 */

export default function Header() {
	const { theme, setTheme } = useDarkMode();
	const toggleDarkMode = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	const currentPath = location.pathname;

	return (
		<header className="bg-transparent">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<Logo />
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={
								currentPath === item.href.toLowerCase()
									? "text-indigo-600 text-sm font-semibold leading-6 hover:text-indigo-600 dark:text-indigo-400"
									: "text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 dark:text-gray-50"
							}>
							{item.name}
						</a>
					))}
				</div>
				<div className="flex gap-4">
					<div
						className={`relative inline-block w-10 align-middle select-none transition duration-200 ease-in `}>
						<input
							type="checkbox"
							name="toggle"
							id="toggle"
							className="toggle-checkbox hidden"
							onClick={toggleDarkMode}
						/>
						<label
							htmlFor="toggle"
							className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-100 hover:shadow-sm dark:bg-white/10 cursor-pointer"></label>
						<div
							className={`toggle-inner ${
								theme === "dark" ? "translate-x-4" : ""
							} absolute left-0 top-0 mt-1 ml-1 w-4 h-4 rounded-full transition-transform duration-200 ease-in bg-yellow-100 dark:bg-indigo-100`}>
							{theme === "dark" ? (
								<MoonIcon width={15} height={15} className="text-indigo-600" />
							) : (
								<SunIcon width={15} height={15} className="text-yellow-600" />
							)}
						</div>
					</div>

					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
								aria-hidden="true"
							/>
						</button>
					</div>

					<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6">
						<Link
							to="/contact"
							className={
								currentPath === "/contact"
									? "text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-600 dark:text-indigo-400"
									: "text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 dark:text-gray-50"
							}>
							Get in touch{" "}
							<span aria-hidden="true" className="transition-all ease-in">
								{location.pathname === "/contact" ? "↓" : "→"}
							</span>
						</Link>
					</div>
				</div>
			</nav>

			<Dialog
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Logo />
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon
								className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
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
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/5">
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6" onClick={() => setMobileMenuOpen(false)}>
								<Link
									to="/contact"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-white/5">
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
