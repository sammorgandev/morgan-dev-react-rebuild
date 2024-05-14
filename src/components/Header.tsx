import type { FC } from "react";
import {
	Bars3Icon,
	CodeBracketSquareIcon,
	CodeBracketIcon,
} from "@heroicons/react/20/solid";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
	return (
		<div className="flex px-5 py-8 shadow-sm justify-between items-center">
			<div className="flex items-center gap-2">
				<CodeBracketSquareIcon className="h-8 w-8 text-indigo-600" />
				<h1 className="text-xl font-bold text-indigo-700">morgan/dev </h1>
			</div>
			<Bars3Icon className="h-6 w-6 text-indigo-700" />
		</div>
	);
};
export default Header;
