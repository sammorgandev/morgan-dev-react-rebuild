import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const successAlert = () =>
	toast("Thanks for reaching out! I'll get back to you soon.");

export default function Contact() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [token, setToken] = useState("");
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const first = (form.elements.namedItem("first-name") as HTMLInputElement)
			.value;
		const last = (form.elements.namedItem("last-name") as HTMLInputElement)
			.value;
		const email = (form.elements.namedItem("email") as HTMLInputElement).value;
		const message = (form.elements.namedItem("message") as HTMLInputElement)
			.value;

		fetch(`${process.env.REACT_APP_API_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: process.env.REACT_APP_API_CLIENT_USERNAME,
				password: process.env.REACT_APP_API_CLIENT_KEY,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"There was an error getting your token. Please try again."
					);
				}
				return response.json();
			})
			.then((data) => {
				setToken(data.token);
				console.log(data.token);
				return data.token;
			})
			.then((token) => {
				return fetch(`${process.env.REACT_APP_API_URL}/send_form`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ first, last, email, message }),
				});
			})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"There was an error sending your form. Please try again."
					);
				}
				successAlert();
				form.reset();
			})
			.catch((error) => {
				alert(error.message);
				form.reset();
			});
	};
	return (
		<div className="bg-transparent ">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
					<div className="flex justify-start lg:justify-center gap-4">
						<div className="-mt-0.5">🤝</div> Get in touch
					</div>{" "}
				</h2>

				<p className="text-left mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
					I&apos;m a builder at heart, and if you&apos;re a designer at heart we
					should work together. I&apos;m particularly passionate about helping
					small businesses and niche industries use technology and automation to
					supercharge their operations.
				</p>
			</div>
			<form
				action="#"
				method="POST"
				className="mx-auto mt-7 max-w-2xl"
				onSubmit={handleSubmit}>
				<div className="flex flex-col gap-6">
					<div className="flex w-full gap-6">
						<div className="w-full">
							<label
								htmlFor="first-name"
								className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
								First name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="w-full">
							<label
								htmlFor="last-name"
								className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
								Last name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
							Email
						</label>
						<div className="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
								className="block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
							Message
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className="block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<button
						type="submit"
						className="block w-full rounded-md bg-indigo-600 dark:bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Let's talk
					</button>
				</div>
			</form>
		</div>
	);
}
