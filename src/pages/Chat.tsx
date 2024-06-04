import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
	PaperAirplaneIcon,
	UserIcon,
	SparklesIcon,
} from "@heroicons/react/16/solid";
import CodeBlock from "../components/CodeBlock";

type Message = {
	text: string;
	streaming: boolean;
};

export default function Chat() {
	const [prompt, setPrompt] = useState<string>("");
	const [rawText, setRawText] = useState<string>("");
	const [streamUrl, setStreamUrl] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);
	//@TODO - Add state for isAuthorized and token
	const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
	const [token, setToken] = useState<string>("");

	//handleSubmit function to send a POST request to the server with the prompt and prompt_template
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
				return fetch(`${process.env.REACT_APP_API_URL}/chat`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						stream: true,
						input: {
							prompt: prompt,
							prompt_template:
								"<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
						},
					}),
				});
			})
			.then((response) => {
				if (!response.ok) {
					throw new Error("There was an error with the api. Please try again.");
				}
				return response.json();
			})
			.then((data) => {
				setMessages((prevMessages) => [
					...prevMessages,
					{ text: prompt, streaming: true },
				]);
				console.log(messages);
				setIsAuthorized(true);
				setPrompt("");
				setStreamUrl(data);
			})
			.catch((error) => {
				alert(error.message);
			});
		// OLD AXIOS CODE - DEPRECATED
		//		const response = await axios.post(
		//			"http://localhost:8080/chat",
		//			{
		//				stream: true,
		//				input: {
		//					prompt: prompt,
		//					prompt_template:
		//						"<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
		//				},
		//			},
		//			{
		//				headers: {
		//					Authorization:
		//						"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBhYmFzZSIsImV4cCI6MTcxNzU0ODU4Mn0.4nK1MHFtxmlVPZkDGNSEQG45irWFQ_c1lN6fNPupaEA",
		//				},
		//			}
		//		);
		//      setStreamUrl(response.data);
		//      setMessages((prevMessages) => [
		//      	...prevMessages,
		//      	{ text: prompt, streaming: true },
		//      ]);
		//      console.log(messages);

		//      setPrompt("");
	};
	const messagesRef = useRef<Message[] | undefined>();
	messagesRef.current = messages || [];
	const rawTextRef = useRef<string | undefined>();
	rawTextRef.current = rawText;

	//useEffect to update the ReactMarkdown component with EventSource data and handle errors
	useEffect(() => {
		if (!streamUrl) {
			return;
		}

		let eventSource = new EventSource(streamUrl);

		eventSource.addEventListener("output", (evt) => {
			setRawText((prevText) => prevText + evt.data);
		});
		eventSource.addEventListener("done", (evt) => {
			console.log("stream is complete");
			const currentRawText = rawTextRef.current;
			setRawText("");

			setMessages((prevMessages) => [
				...prevMessages,
				{ text: currentRawText ?? "", streaming: false },
			]);

			eventSource.close();
		});
		eventSource.onopen = (event) => {
			console.log("Connection to server opened");
		};

		eventSource.onerror = (event) => {
			if (eventSource.readyState === EventSource.CLOSED) {
				console.log("Connection was closed by the server");
			} else {
				console.error("An error occurred:", event);
			}
		};

		// Remember to close the connection when the component unmounts
		return () => {
			eventSource.close();
		};
	}, [streamUrl]);

	//DEBUG useEffect to log messages to the console
	useEffect(() => {
		if (messages.length === 0) {
			return;
		} else {
			console.log(messages);
		}
	}, [messages]);
	//END DEBUG

	return (
		<div className="max-w-2xl flex-col justify-between">
			<div>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100">
						<div className="flex justify-start lg:justify-center gap-4">
							<div className="-mt-0.5">💬</div> Chat with SamBot
						</div>{" "}
					</h2>

					<p className="text-left mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
						This is an experimental chatbot - mostly built as a portfolio
						demonstration. I make no promises about the responses it outputs.
					</p>
				</div>
				<div className="flex min-h-96 flex-col justify-start gap-4 mt-4">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`p-4 flex gap-2 items-center rounded-xl ${
								message.streaming
									? "text-indigo-600 text-right bg-indigo-50 justify-end"
									: "text-black text-left bg-gray-100"
							}`}>
							<div className="flex items-start gap-4">
								<div className="bg-gray-200 p-2 rounded-full">
									{message.streaming ? (
										<UserIcon className="h-8 w-8 flex-shrink-0" />
									) : (
										<SparklesIcon className="h-8 w-8 flex-shrink-0" />
									)}
								</div>

								<ReactMarkdown
									className={`self-center${
										message.streaming && " order-first"
									}`}
									children={message.text}
									components={{
										p: ({ node, children, ...props }) => (
											<div {...props}>{children}</div>
										),
										code: ({ node, className, children, ref, ...props }) => {
											return (
												<CodeBlock
													language="javascript"
													children={children}
													{...props}
												/>
											);
										},
									}}
								/>
							</div>
						</div>
					))}
					{rawText && (
						<div className="p-4 rounded-xl text-black text-left bg-gray-100">
							<ReactMarkdown
								children={rawText}
								components={{
									code: ({ node, className, children, ref, ...props }) => {
										return (
											<CodeBlock
												language="javascript"
												children={children}
												{...props}
											/>
										);
									},
								}}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="mt-10">
				<form onSubmit={handleSubmit}>
					<div className="flex">
						<input
							type="text"
							value={prompt}
							className="block w-full rounded-md border-0 dark:bg-white/5 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 sm:text-sm sm:leading-6"
							onChange={(e) => setPrompt(e.target.value)}
						/>
						<div className="flex ml-4 gap-2 bg-indigo-700 text-white p-2 rounded-md">
							<button type="submit" className="">
								Send
							</button>
							<PaperAirplaneIcon className="h-5 w-5 mt-0.5" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
