import { useState, useEffect } from "react";

import { SearchStyled, ListCountryStyled } from './styled';
import DisplaySearchBar from './DisplaySearchBar';
import { throttle } from "lodash";

const API_URL = 'https://restcountries.eu/rest/v2/all';

const SearchCountries = () => {
    const [country, setCountry] = useState([]);
    const [keyword, setKeyword] = useState('');

    const getAllCountries = async () => {
        const d = await fetch(API_URL)
            .then(res => res.json())
            .then(data => setCountry(data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getAllCountries();
    }, [])

    ////
    const [visible, setVisible] = useState(10);

    const loadMore = throttle(() => {
        if (visible < country.length) {
            setVisible(visible + 10);
        }
    }, 1000);
    ////

    const searchKey = keyword.toLowerCase();

    return (
        <SearchStyled>
            <div>
                <DisplaySearchBar
                    getAllCountries={getAllCountries}
                    keyword={keyword} setKeyword={setKeyword}
                />
                <div className='mapping-country'>
                    {country && country.filter(item => item.name.toLowerCase()
                        .includes(searchKey))
                        .slice(0, visible)
                        .map((c) => (
                            <ListCountryStyled>
                                <div className="CountryList" key={c.name}>
                                    <div className='load-list'>
                                        <div className="CountryListImg">
                                            <img src={c.flag} alt="" width="200px" height='100px' />
                                        </div>
                                        <h2>{c.name}</h2>
                                    </div>
                                    <div className='country-details'>
                                        <div>Capital: {c.capital} </div>
                                        <div>Population: {c.population}</div>
                                        <div>Region: {c.region}</div>
                                        <div>Subregion: {c.subregion}</div>
                                        <div>Currencies: {c.currencies.map((crr) => `${crr.name}`).join(', ')}</div>
                                        <div>Languages: {c.languages.map((language) => `${language.name}`).join(', ')}
                                        </div>
                                    </div><br />
                                </div>
                            </ListCountryStyled>
                        ))
                    }
                </div>
                <div className='btn-btn-loadMore'>
                    <button onClick={loadMore}>Load 10 more</button>
                </div>
            </div>
        </SearchStyled >
    )
}

export default SearchCountries;