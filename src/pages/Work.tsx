import { useEffect, useState, FC } from "react";
import { useLocation, Link } from "react-router-dom";
import { BackwardIcon } from "@heroicons/react/20/solid";

export interface Post {
	id: number;
	title: string;
	body: string;
	image?: string;
	tags?: string[];
	category?: string;
	created_at: string;
	company_name?: string;
	company_logo?: string;
	company_description?: string;
	slug: string;
	video?: string;
}

interface ParsedPost extends Post {
	created_at_date: Date;
}
interface WorkProps {}

// eslint-disable-next-line no-empty-pattern
const WorkUI: FC<WorkProps> = ({}) => {
	const [posts, setPosts] = useState<ParsedPost[]>([]);
	const [loading, setLoading] = useState(true);

	console.log(process.env.REACT_APP_API_URL);

	const fetchPosts = () => {
		fetch(
			`${process.env.REACT_APP_API_URL}/posts${
				currentView() === "category"
					? `/category/${pathSegments[2]}`
					: currentView() === "tag"
					? `/tag/${pathSegments[2]}`
					: ""
			}`
		) // ${process.env.REACT_APP_API_URL}/posts
			.then((res) => res.json())
			.then((data) => {
				if (data.posts.length > 0) {
					let parsedPosts = data.posts.map(
						(post: Post): ParsedPost => ({
							...post,
							created_at_date: new Date(post.created_at || Date.now()),
						})
					);
					// Sort posts by created_at_date in descending order
					parsedPosts = parsedPosts.sort(
						(
							a: { created_at_date: { getTime: () => number } },
							b: { created_at_date: { getTime: () => number } }
						) => b.created_at_date.getTime() - a.created_at_date.getTime()
					);

					setPosts(parsedPosts);
					setLoading(false);
				} else {
					console.log(data.posts.length, data);
					throw new Error("Invalid data format");
				}
			})
			.catch((error) => {
				console.error(error);
				// If there's an error, try fetching again after a delay
				setTimeout(fetchPosts, 5000); // 5000 ms = 5 seconds
			});
	};

	useEffect(() => {
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
	console.log(posts);

	function toTitleCase(str: string) {
		return str.replace(/\w\S*/g, function (txt: string) {
			return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
		});
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="max-w-2xl">
			{currentView() !== "work" && (
				<Link to="/work">
					<div className="flex text-xs items-center gap-2 mb-6 text-gray-400 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
						<BackwardIcon width={15} height={15} /> BACK
					</div>
				</Link>
			)}
			<h2 className="text-left lg:text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
				<div className="flex justify-start lg:justify-center gap-4">
					<div className="-mt-0.5">👨‍💻</div>
					{pathSegments.length < 4 && pathSegments[1] === "tags"
						? `# ${pathSegments[2]}`
						: pathSegments.length < 4 && pathSegments.length > 1
						? toTitleCase(pathSegments[2]).replace(/-/g, " ")
						: "Work"}{" "}
				</div>
			</h2>

			<p className="text-left mt-6 lg:text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
				This is my feed of stuff I've worked on. It includes web projects i've
				built, talks and tutorials videos I've done, and blog posts I've
				written.
			</p>

			<div className="mt-8 space-y-20 lg:mt-8 lg:space-y-20">
				{posts.length > 0 &&
					posts.map((post) => (
						<article
							key={post.id}
							className="relative isolate flex flex-col gap-8 lg:flex-row">
							<div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
								<img
									src={post.image ? post.image : "/"}
									alt=""
									className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
							<div>
								<div className="flex items-center gap-x-4 text-xs">
									<time
										dateTime={post.created_at_date?.toLocaleDateString(
											"en-US",
											{
												year: "numeric",
												month: "long",
												day: "numeric",
											}
										)}
										className="text-gray-500 dark:text-gray-300">
										{post.created_at_date?.toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</time>
									<a
										href={
											post.category
												? `/work/categories/${post.category
														.replace(/\s/g, "-")
														.replace(/:/g, "")
														.toLowerCase()}`
												: "/"
										}
										className="relative z-10 rounded-full bg-indigo-50 dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 transition-all ease-in">
										{post.category && post.category}
									</a>
								</div>
								<div className="group relative max-w-xl">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-200 dark:hover:text-indigo-400 hover:text-indigo-600 hover:text-lg transition-all ease-in">
										<a
											href={`/work/categories/${post.category
												?.replace(/\s/g, "-")
												.replace(/:/g, "")
												.toLowerCase()}
												/
												${post.title.replace(/\s/g, "-").replace(/:/g, "").toLowerCase()}`}>
											{post.title}
										</a>
									</h3>
									<p className="text-gray-600 dark:text-gray-400 flex gap-1">
										{post.tags &&
											post.tags.map((tag, index) => (
												<span
													key={index}
													className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:font-bold transition-all ease-in">
													<a
														href={`/work/tags/${tag
															.replace(/\s/g, "-")
															.replace(/:/g, "")
															.toLowerCase()}`}>
														#{tag}
													</a>{" "}
												</span>
											))}
									</p>
									<p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
										{post.body}
									</p>
								</div>
							</div>
						</article>
					))}
			</div>
		</div>
	);
};

export default WorkUI;
