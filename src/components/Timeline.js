import 'react-loading-skeleton/dist/skeleton.css';

import { useContext } from 'react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import FirestoreContext from '../context/LoggedInUser';
import usePhotos from '../hooks/usePhotos';
import Post from './post';

const Timeline = () => {
    const { userData } = useContext(FirestoreContext);

    const { photos } = usePhotos(userData);

    return (
        <div className='container col-span-2'>
            {userData?.following === null ? (
                <Skeleton count={2} width={640} height={500}
                    className='mb-5' />
            ) : userData?.following.length === 0 ? (
                <p className='flex justify-center font-bold'>Follow other people to see Photos</p>
            ) : photos ? (
                photos.map((content) => <Post key={content.docId} content={content} />)
            ) : null}
        </div>
    );
};

export default Timeline;