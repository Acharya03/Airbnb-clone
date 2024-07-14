import EmptyState from "../Components/EmptyState";
import ClientOnly from "../Components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import FavouritesClient from "./FavouritesClient";

const ListingPage = async () => {
    const listings = await getFavouriteListings();
    const currentUser = await getCurrentUser();
    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favourites found"
                    subtitle="Looks like you have no favourite listings"
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavouritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default ListingPage