import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Loader from '../Loader';
import SearchBar from '../Inputs/SearchBar';
import Header from '../Header';
import axios from 'axios';

const Rezepte = ({ API_URL }) => {
    const [rezepte, setRezepte] = useState([]);
    const [searchRezept, setSearchRezept] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRezepte = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/router/rezepte/`);
                if (response) {
                    console.log(response.data)
                    setRezepte(response.data);
                    setIsLoading(false);
                };
            } catch (err) {
                console.log(`ERROR: ${err}`);
            };
        };

        fetchRezepte();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const filteredRezepte = rezepte.filter((rezept) => String(rezept.name).toLowerCase().trim().includes(String(searchRezept).toLowerCase().trim()) || String(rezept.kategory.name).toLowerCase().trim().includes(String(searchRezept).toLowerCase().trim()) );
        setSearchResults(filteredRezepte);
    }, [searchRezept, rezepte]);

    return (
        <>
            <Header searchBar={false} />

            <section className="mt-5 w-100 d-flex justify-content-center">
                <div className='w-100 d-flex align-items-center flex-column gap-4'>
                    <SearchBar 
                        placeholder="Suche Rezepte ..." 
                        label="Rezepte" 
                        search={ searchRezept }
                        setSearch={ setSearchRezept }
                    />

                    {isLoading ? <Loader /> :
                        <>
                            {searchResults.length > 0 ? (
                                <div className="row-cols-5 gap-4 w-100 d-flex justify-content-center flex-wrap">
                                    {searchResults.map(rezept => {
                                        return (
                                            <Card key={ rezept.id } rezept={ rezept } API_URL={ API_URL } />
                                        )
                                    })}
                                </div>
                                
                            ) : String(searchRezept).trim().length > 0 ? 
                            <span>Es gibt keine Rezepte mit dem Namen "{ String(searchRezept).trim().length > 50 ? `${String(searchRezept).trim().slice(0, 50)}...` : String(searchRezept).trim() }"</span>
                            : <span>Es gibt keine Rezepte</span>}
                        </>
                    }
                </div>
            </section>
        </>
    )
}

export default Rezepte