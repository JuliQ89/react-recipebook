import React, { useState, useEffect } from 'react';
import Header from "../Header";
import HeaderMain from "../HeaderMain";
import KategorieList from '../Kategory/KategorieList';
import SearchBar from "../generallyComponents/Inputs/SearchBar";
import Footer from "../Footer";
import axios from 'axios';

const Home = ({ API_URL }) => {
    const [searchRecipe, setSearchRecipe] = useState("");
    const [searchKategory, setSearchKategory] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [kategories, setKategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchKategories = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/router/kategory/`);
                if (response) {
                    setKategories(response.data);
                    setIsLoading(false);
                };
            } catch (err) {
                console.log(`ERROR: ${err}`);
            };
        };

        fetchKategories();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const filteredKategories = kategories.filter((kategory) => String(kategory.name).toLowerCase().trim().includes(String(searchKategory).toLowerCase().trim()));
        setSearchResults(filteredKategories);
    }, [kategories, searchKategory]);

    return (
        <>
            <Header
                searchBar={true}
                searchRecipe={searchRecipe}
                setSearchRecipe={setSearchRecipe}
            />

            <div className="d-flex">
                <HeaderMain />
            </div>

            <section>
                <div className="container w-100 text-center">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section>

            <section className="container mt-5 w-100 d-flex align-items-center flex-column gap-2">
                <SearchBar 
                    placeholder="Suche Kategorien ..." 
                    label="Kategorien" 
                    search={ searchKategory }
                    setSearch={ setSearchKategory }
                />

                <KategorieList 
                    kategories={ searchResults }
                    API_URL={ API_URL }
                    isLoading={ isLoading }
                    searchKategory={ searchKategory }
                />
            </section>

            <Footer />
        </>
    )
}

export default Home