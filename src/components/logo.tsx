import type { FC } from "react";
import { Link } from "react-router-dom";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
interface logoProps {}

// eslint-disable-next-line no-empty-pattern
const Logo: FC<logoProps> = ({}) => {
	return (
		<div className="flex">
			<Link to="/" className="-m-1.5 p-1.5">
				<span className="sr-only">morgan/dev</span>
				<div className="flex items-center gap-1">
					<CodeBracketSquareIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 font-bold" />
					<h1 className="font-bold text-xl text-indigo-600 dark:text-indigo-400">
						morgan/dev
					</h1>
				</div>
			</Link>
		</div>
	);
};
export default Logo;
