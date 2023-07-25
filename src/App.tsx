import React from "react";
import { Home, Login, Product, Products, User, Users } from "./pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer, Menu, Navbar } from "./components";
import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type Props = {};
const queryClient = new QueryClient();

const App = (props: Props) => {
	const Layout = () => {
		return (
			<div className="main">
				<Navbar />
				<div className="container">
					<div className="menuContainer">
						<Menu />
					</div>
					<div className="contentContainer">
						<QueryClientProvider client={queryClient}>
							<Outlet />
						</QueryClientProvider>
					</div>
				</div>
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/users",
					element: <Users />,
				},
				{
					path: "/products",
					element: <Products />,
				},
				{
					path: "/products/:id",
					element: <Product />,
				},
				{
					path: "/users/:id",
					element: <User />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
