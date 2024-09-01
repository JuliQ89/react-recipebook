import React, { useState, useEffect} from 'react';
import Loader from '../Loader';
import Header from '../Header';
import RezeptInfo from './RezeptInfo';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { RiArrowLeftFill } from "@remixicon/react";
import axios from 'axios';

const Rezept = ({ API_URL }) => {
    const [rezept, setRezept] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchRezepte = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/router/rezepte/${id}`);
                if (response) {
                    console.log(response.data)
                    setRezept(response.data);
                    setIsLoading(false);
                };
            } catch (err) {
                console.log(`ERROR: ${err}`);
            };
        };

        fetchRezepte();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Header searchBar={false} />

            <section className="mt-5 w-100 d-flex justify-content-center">
                <div className='w-100 d-flex align-items-center flex-column gap-4 position-relative'>
                    <Link to="/rezepte" className='btn btn-primary d-flex align-items-center justify-content-center gap-1 text-white position-absolute top-0 start-0'>
                        <RiArrowLeftFill size={20} /> Rezepte
                    </Link>
                    {isLoading ? <Loader /> :
                        <>
                            {rezept ? (
                                <div className="row-cols-5 gap-4 w-100 d-flex justify-content-center flex-wrap">
                                    
                                    <RezeptInfo rezept={rezept} API_URL={API_URL} />

                                </div>
                                
                            ) : <span>Dieses Rezept existiert nicht</span>}
                        </>
                    }
                </div>
            </section>
        </>
    )
}

export default Rezept