import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientOnly from "./Components/ClientOnly";

import RegisterModal from "./Components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./Components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./Components/modals/RentModal";
import SearchModal from "./Components/modals/SearchModal";



export const metadata = {
	title: "Airbnb",
	description: "Airbnb clone",
};

const font = Nunito({
	subsets: ["latin"],
})
export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<SearchModal/>
					<RentModal />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				<div className="pb-20 pt-28">
					{children}
				</div>
			</body>
		</html>
	);
}
