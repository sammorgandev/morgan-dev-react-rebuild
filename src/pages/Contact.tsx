/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [agreed, setAgreed] = useState(false);

	return (
		<div className="bg-transparent px-6 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					<div className="flex justify-start lg:justify-center gap-4">
						<div className="-mt-0.5">🤝</div> Get in touch
					</div>{" "}
				</h2>

				<p className="mt-6 text-lg leading-8 text-gray-600">
					I&apos;m a builder at heart, and if you&apos;re a designer at heart we
					should work together.{" "}
				</p>
			</div>
			<form action="#" method="POST" className="mx-auto mt-7 max-w-xl">
				<div className="flex flex-col gap-6">
					<div>
						<label
							htmlFor="first-name"
							className="block text-sm font-semibold leading-6 text-gray-900">
							First name
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="given-name"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="last-name"
							className="block text-sm font-semibold leading-6 text-gray-900">
							Last name
						</label>
						<div className="mt-2.5">
							<input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-semibold leading-6 text-gray-900">
							Email
						</label>
						<div className="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm font-semibold leading-6 text-gray-900">
							Message
						</label>
						<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								defaultValue={""}
							/>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<button
						type="submit"
						className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
						Let's talk
					</button>
				</div>
			</form>
		</div>
	);
}
