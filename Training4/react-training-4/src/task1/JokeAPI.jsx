import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { JokeStyled } from './styled';

const API_URL = 'https://official-joke-api.appspot.com/random_joke';

const JokeAPI = () => {
    const [joke, setJoke] = useState('');

    const onRandomJoke = debounce(async () => {
        const d = await fetch(API_URL)
            .then(res => res.json())
            .then(data => setJoke(`${data.setup} ${data.punchline}`))
            .catch(err => console.log(err));
    }, 200);

    useEffect(() => {
        onRandomJoke();
    }, [])

    return (
        <JokeStyled>
            <div className='container'>
                <div className='box'>
                    <h1>RANDOM JOKE WITH JOKE API</h1><br />
                    <p>{joke}</p><br />
                    <button className='button' onClick={onRandomJoke}>Get more joke</button>
                </div>
            </div>
        </JokeStyled >

    )
}

export default JokeAPI;