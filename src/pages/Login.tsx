import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
	const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
	const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			"Supabase URL and/or anonymous key are not defined in the environment variables."
		);
	}

	const supabase = createClient(supabaseUrl, supabaseAnonKey);

	const App = () => (
		<div className="flex flex-col gap-10">
			{" "}
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
					<div className="flex justify-start lg:justify-center gap-4">
						<div className="-mt-0.5">🔑</div> Authentication
					</div>{" "}
				</h2>

				<p className="text-left mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
					Why sign up for my site with a username and password? Theres a few
					cool tools that use APIs I don't want to leave out there for spammers.
				</p>
			</div>
			<Auth
				supabaseClient={supabase}
				appearance={{
					theme: ThemeSupa,
					extend: false,
					className: {
						input:
							"block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6",
						button:
							"mt-4 block w-full rounded-md bg-indigo-600 dark:bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
						label:
							"mb-2 block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300",
						container: "flex flex-col h-full gap-4",
						anchor: "text-indigo-600 dark:text-indigo-500 hover:underline",
					},
				}}
				providers={[]}
			/>
		</div>
	);

	return <App />;
}
