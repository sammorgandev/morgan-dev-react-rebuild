import { useEffect, useState, FC } from "react";
interface Post {
	id: number;
	title: string;
	body: string;
	image?: string;
	tags?: string[];
	category?: string;
	created_at?: string;
	company_name?: string;
	company_logo?: string;
	company_description?: string;
}
interface WorkProps {}

// eslint-disable-next-line no-empty-pattern
const WorkUI: FC<WorkProps> = ({}) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);

	console.log(process.env.REACT_APP_API_URL);

	const fetchPosts = () => {
		fetch(`${process.env.REACT_APP_API_URL}/posts`)
			.then((res) => res.json())
			.then((data) => {
				if (data.posts.length > 0) {
					setPosts(data.posts);
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

	console.log(posts);
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2 className="text-left lg:text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Work{" "}
			</h2>
			<p className="text-left lg:text-center mt-2 text-lg leading-8 text-gray-600">
				This is my feed of stuff I've worked on.
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
									<time dateTime={post.created_at} className="text-gray-500">
										{post.created_at}
									</time>
									<a
										href={post.category ? `/${post.category}` : "/"}
										className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
										{post.category && post.category}
									</a>
								</div>
								<div className="group relative max-w-xl">
									<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
										<a href={`/${post.id}`}>
											<span className="absolute inset-0" />
											{post.title}
										</a>
									</h3>
									<p className="mt-5 text-sm leading-6 text-gray-600">
										{post.body}
									</p>
								</div>
								<div className="mt-6 flex border-t border-gray-900/5 pt-6">
									<div className="relative flex items-center gap-x-4">
										<img
											src={post.company_logo ? post.company_logo : "/"}
											alt=""
											className="h-10 w-10 rounded-full bg-gray-50"
										/>
										<div className="text-sm leading-6">
											<p className="font-semibold text-gray-900">
												<a
													href={
														post.company_name ? `/${post.company_name}` : "/"
													}>
													<span className="absolute inset-0" />
													{post.company_name && post.company_name}
												</a>
											</p>
											<p className="text-gray-600">
												{post.company_description && post.company_description}
											</p>
										</div>
									</div>
								</div>
							</div>
						</article>
					))}
			</div>
		</div>
	);
};

export default WorkUI;
