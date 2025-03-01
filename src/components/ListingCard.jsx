import {Card, CardContent} from '@/components/ui'
import { getImageUrl } from '@/lib/utils/images'
import { DollarSign, Pin, Users } from 'lucide-react';
import ListingCardImages from '@/components/ListingCardImages'
import { Link } from 'react-router-dom';

const ListingCard=({listing})=>{


    return (
      <Link to = {`/listings/${listing.id}`}>
        <Card className='w-[320px]'>
        <ListingCardImages listing={listing} />
           <CardContent className='flex flex-col gap-2 p-4'>
        <h2 className='mb-2 text-xl font-semibold'>{listing.name}</h2>
        <div className='flex items-center gap-2'>
          <DollarSign className='h-4 w-4 text-primary' />
          <span className='text-muted-foreground'>
            <span className='font-bold text-foreground'>{listing.price}</span> /
            night
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <Pin className='h-4 w-4 text-primary' />
          <span className='text-muted-foreground'>{listing.location.name}</span>
        </div>
        <div className='flex items-center gap-2'>
          <Users className='h-4 w-4 text-primary' />
          <span className='text-muted-foreground'>
            {listing.maxGuests} Guests
          </span>
        </div>
          </CardContent>
        </Card>
        </Link>
      );

}

export default  ListingCard;