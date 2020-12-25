import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour} from './Data';
import { InfoSection, Pricing } from '../../components';

const Home = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;
