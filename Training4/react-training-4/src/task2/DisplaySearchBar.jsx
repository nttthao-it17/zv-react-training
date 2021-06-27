import { Input } from "antd";
import { useState, useCallback } from "react";
import { debounce } from "lodash";


import { SearchStyled } from './styled';

const { Search } = Input;

const DisplaySearchBar = (props) => {
    const {
        // handleActiveDelay,
        getAllCountries,
        keyword, setKeyword,
    } = props;

    const [input, setInput] = useState('');

    const onSearch = value => {
        console.log(value)
        getAllCountries();
    };

    const handleChange = (e) => {
        setInput(e.target.value);
        handleActiveDelay(e.target.value);
    }

    const handleActiveDelay = useCallback(debounce((value) => {
        setKeyword(value);
    }, 500), [setKeyword]);

    return (
        <SearchStyled>
            <div className='container'>
                <Search
                    value={input}
                    placeholder="Search Country..."
                    onSearch={onSearch}
                    enterButton
                    onChange={handleChange}
                />
            </div>
        </SearchStyled>

    )
}

export default DisplaySearchBar;