import { HomeIcon } from "@heroicons/react/20/solid";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
	const location = useLocation();
	const pathSegments = location.pathname
		.split("/")
		.filter((segment) => segment);
	const currentView = () => {
		if (pathSegments.length === 3 && pathSegments[1] === "tags") {
			return "tag";
		} else if (pathSegments.length === 3 && pathSegments.length > 1) {
			return "category";
		} else if (pathSegments.length === 4) {
			return "post";
		} else {
			return "work";
		}
	};
	const pages = pathSegments.map((segment) => {
		return {
			name: segment,
			href: `/${
				segment === pathSegments[0]
					? pathSegments[0]
					: segment === pathSegments[1]
					? `${pathSegments[0]}/${pathSegments[1]}`
					: segment === pathSegments[2]
					? `${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}`
					: segment === pathSegments[3]
					? `${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}/${pathSegments[3]}`
					: ""
			}`,
			current: segment === pathSegments[pathSegments.length],
		};
	});

	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol role="list" className="flex items-center space-x-4">
				<li>
					<div>
						<a
							href="#"
							className="text-gray-400 dark:text-gray-100 dark:hover:text-gray-200 hover:text-gray-500">
							<HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
							<span className="sr-only">Home</span>
						</a>
					</div>
				</li>
				{pages.map((page) => (
					<li key={page.name}>
						<div className="flex items-center">
							<svg
								className="h-5 w-5 flex-shrink-0 text-gray-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true">
								<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
							</svg>
							<a
								href={page.href}
								className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-700"
								aria-current={page.current ? "page" : undefined}>
								{page.name}
							</a>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
