import React from 'react';
import Banner from '../Banner/Banner';
import { Spinner } from 'react-bootstrap';
import PickUp from '../PickUp/PickUp';
import Services from '../Services/Services';
import useAuth from '../../hooks/useAuth';
import Membership from '../Membership/Membership';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />

    }

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PickUp></PickUp>
            <Membership></Membership>
        </div>
    );
};

export default Home;