import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, label, search, setSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearch(query);
    }
  }, [location.search]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
    navigate(`?q=${e.target[0].value}`, { replace: true });
  };

  return (
    <form className="input-group mb-3 w-50" onSubmit={(e) => handleFormSubmit(e)}>
        <input type="search" className="form-control p-2" value={ search } onChange={ (e) => { setSearch(e.target.value); }} placeholder={ placeholder } aria-label={ label } aria-describedby="basic-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary h-100" type="submit" style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </div>
    </form>
  )
}

export default SearchBar