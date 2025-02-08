import ListingCard from "./ListingCard";
const ListingList =({listings})=>{

    return (
        <div className ='flex flex-wrap justify-center gap-4'>
            {listings.length>0 ? (
                listings.map(listing =>(
                    <ListingCard  key ={listing.id} listing ={listing} />
                ))
            ):(<div><p>No listings found!</p></div>

            )}
        </div>
    )
}

export  default  ListingList;