import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../pages/Work";
import { BackwardIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const jobOpenings = [
	{
		id: 1,
		role: "Full-time designer",
		href: "#",
		description:
			"Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
		salary: "$75,000 USD",
		location: "San Francisco, CA",
	},
	{
		id: 2,
		role: "Laravel developer",
		href: "#",
		description:
			"Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
		salary: "$125,000 USD",
		location: "San Francisco, CA",
	},
	{
		id: 3,
		role: "React Native developer",
		href: "#",
		description:
			"Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
		salary: "$105,000 USD",
		location: "San Francisco, CA",
	},
];

export default function WorkPost() {
	const { slug } = useParams<{ slug: string }>();
	const [post, setPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState(true);

	const fetchPost = () => {
		fetch(`${process.env.REACT_APP_API_URL}/posts/${slug}`)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					setPost(data);
					setLoading(false);
				} else {
					console.log(data.post, data);
					throw new Error("Invalid data format");
				}
			})
			.catch((error) => {
				console.error(error);
				// If there's an error, try fetching again after a delay
				setTimeout(fetchPost, 5000); // 5000 ms = 5 seconds
			});
	};

	useEffect(() => {
		fetchPost();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="bg-transparent flex flex-col">
			<div className="flex-col mx-auto max-w-2xl lg:px-4">
				<Link to="/work">
					<div className="flex text-xs items-center gap-2 mb-6 text-gray-400 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
						<BackwardIcon width={15} height={15} /> BACK
					</div>
				</Link>
				<div className="flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none">
					<div className="w-full max-w-2xl lg:flex-auto">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
							📋 {post?.title}{" "}
						</h2>

						<p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
							{post?.body}
						</p>
						<img
							src={post?.image}
							alt=""
							className="mt-16 aspect-auto w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
						/>
					</div>
					<div className="w-full max-w2xl lg:flex-auto">
						<h3 className="sr-only">Job openings</h3>
						<ul className="-my-8 divide-y divide-gray-100">
							{jobOpenings.map((opening) => (
								<li key={opening.id} className="py-8">
									<dl className="relative flex flex-wrap gap-x-3">
										<dt className="sr-only">Role</dt>
										<dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
											<a href={opening.href}>
												{opening.role}
												<span className="absolute inset-0" aria-hidden="true" />
											</a>
										</dd>
										<dt className="sr-only">Description</dt>
										<dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600 dark:text-gray-300">
											{opening.description}
										</dd>
										<dt className="sr-only">Salary</dt>
										<dd className="mt-4 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300">
											{opening.salary}
										</dd>
										<dt className="sr-only">Location</dt>
										<dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500 dark:text-gray-400">
											<svg
												viewBox="0 0 2 2"
												className="h-0.5 w-0.5 flex-none fill-gray-300"
												aria-hidden="true">
												<circle cx={1} cy={1} r={1} />
											</svg>
											{opening.location}
										</dd>
									</dl>
								</li>
							))}
						</ul>
						<div className="mt-8 flex border-t border-gray-100 pt-8">
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
								View all openings <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
