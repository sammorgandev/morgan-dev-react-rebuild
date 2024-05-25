import type { FC } from "react";
import { Link } from "react-router-dom";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
interface logoProps {}

const Logo: FC<logoProps> = ({}) => {
	return (
		<div className="flex lg:flex-1">
			<Link to="/" className="-m-1.5 p-1.5">
				<span className="sr-only">morgan/dev</span>
				<div className="flex items-center gap-1">
					<CodeBracketSquareIcon className="w-8 h-8 text-indigo-600 font-bold" />
					<h1 className="font-bold text-xl text-indigo-600">morgan/dev</h1>
				</div>
			</Link>
		</div>
	);
};
export default Logo;
