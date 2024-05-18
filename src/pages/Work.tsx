import { useEffect, useState, type FC } from "react";

interface AboutProps {}

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const About: FC<AboutProps> = ({}) => {
	const [workpostarray, setWorkPosts] = useState<Post[]>([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data: Post[]) => setWorkPosts(data));
	}, []);

	return (
		<div className="bg-transparent py-10 sm:py-10">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						From the blog
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						Learn how to grow your business with our expert advice.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{workpostarray.map((post) => (
						<article
							key={post.id}
							className="flex flex-col items-start justify-between">
							<div className="relative w-full">
								<img
									src="https://placehold.co/600x400"
									alt=""
									className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
							</div>
							<div className="group relative">
								<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
									<a href={post.title}>
										<span className="absolute inset-0" />
										{post.title}
									</a>
								</h3>
								<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
									{post.body}
								</p>
							</div>
							<div className="relative mt-8 flex items-center gap-x-4">
								<img
									src=" https://placehold.co/600x400"
									alt=""
									className="h-10 w-10 rounded-full bg-gray-100"
								/>
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="absolute inset-0" />
											{post.id}
										</a>
									</p>
									<p className="text-gray-600">{post.id}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
