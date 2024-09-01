import React from 'react';
import KategorieIcon from "../Kategory/KategorieIcon";
import Loader from '../Loader';

const KategorieList = ({ kategories, API_URL, isLoading, searchKategory }) => {
  return (
    <>
        {isLoading ? <Loader /> : 
            <>
                {kategories.length > 0 ? (
                    <div className="container d-flex gap-5 justify-content-center w-100 flex-wrap">
                        {kategories.map(kategory => {
                            return (
                                <KategorieIcon key={ kategory.id } kategory={ kategory } API_URL={ API_URL } />
                            )
                        })}
                    </div>
                ) : String(searchKategory).trim().length > 0 ? 
                <span>Es gibt keine Kategorie mit dem Namen "{ String(searchKategory).trim().length > 50 ? `${String(searchKategory).trim().slice(0, 50)}...` : String(searchKategory).trim() }"</span>
                : <span>Es gibt keine Kategorien</span>}
            </>
        }
    </>
  )
}

export default KategorieList