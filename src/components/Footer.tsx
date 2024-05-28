import { JSX, SVGProps, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const socialLinks = {
	social: [
		{
			name: "Instagram",
			href: "https://instagram.com/_sambubble",
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: "X",
			href: "https://x.com/_sambubble",
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
				</svg>
			),
		},
		{
			name: "GitHub",
			href: "https://github.com/sammorgandev",
			icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

const currentYear = new Date().getFullYear();
const successAlert = () => toast("Success! You are now subscribed.");

export default function Footer() {
	const [email, setEmail] = useState("");
	const [token, setToken] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
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
				return fetch(`${process.env.REACT_APP_API_URL}/contacts`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ email }),
				});
			})
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						"There was an error adding your email. Please try again."
					);
				}
				successAlert();
				setEmail("");
				(document.getElementById("email-address") as HTMLInputElement).value =
					"";
			})
			.catch((error) => {
				alert(error.message);
				setEmail("");
				(document.getElementById("email-address") as HTMLInputElement).value =
					"";
			});
	};

	return (
		<footer className="bg-transparent" aria-labelledby="footer-heading">
			<div className="mx-auto max-w-full pb-4">
				<div className="border-t px-6 border-gray-900/10 pt-4 dark:border-gray-400/20 lg:flex lg:items-center lg:justify-between">
					<div>
						<h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
							Subscribe to my newsletter
						</h3>
						<p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
							I send out monthly thoughts on no-code, code, and building things.
						</p>
					</div>
					<ToastContainer />
					<form
						className="mt-4 sm:flex sm:max-w-md lg:mt-0"
						onSubmit={handleSubmit}>
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							type="email"
							name="email-address"
							id="email-address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete="email"
							required
							className="block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
							placeholder="Enter your email"
						/>
						<div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
							<button
								type="submit"
								className="flex w-full items-center justify-start md:justify-center bg-transparent px-1 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
								Subscribe →
							</button>
						</div>
					</form>
				</div>
				<div className="mt-4 px-6 border-t border-gray-900/10 pt-4 md:flex md:items-center md:justify-between">
					<div className="flex space-x-6 md:order-2">
						{socialLinks.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:font-bold transition-all ease-in">
								<span className="sr-only">{item.name}</span>
								<item.icon
									className="h-6 w-6 transition-all ease-in"
									aria-hidden="true"
								/>
							</a>
						))}
					</div>
					<p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400 md:order-1 md:mt-0">
						&copy; {currentYear} 💁‍♂️ This site is built from a react front end
						and rust 🦀 backend.{" "}
						<a href="/" className="text-indigo-400">
							Learn more
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
