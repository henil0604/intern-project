import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { AuthLoader, RootLayout } from "@/components/layouts/root";
import { CONST } from "@/lib/const";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />} loader={AuthLoader}>
				<Route
					path="*"
					lazy={async () => ({
						Component: () => <div>Not Found</div>,
					})}
				/>
				<Route
					index
					lazy={async () => {
						return {
							Component: (await import("@/routes/Home")).HomePage,
						};
					}}
				/>
				<Route
					path={CONST.ROUTES.register()}
					lazy={async () => {
						return {
							Component: (await import("@/routes/Auth/Register"))
								.RegisterPage,
						};
					}}
				/>
			</Route>
		</>,
	),
);
