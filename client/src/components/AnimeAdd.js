import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AnimeForm from '../components/AnimeForm';

const AnimeAdd = (props) => {
    const{ animeWatchParties, setAnimeWatchParties } = props;
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const createAnimeWatchParty = (animeParam) => {
        axios
            .post(`http://localhost:8000/api/anime`, animeParam)
            .then(res => {
                
                console.log(res.data);
                setAnimeWatchParties([...animeWatchParties, res.data]);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.err.errors);
            })
    };

    return(
        <div>
            <AnimeForm onSubmitProp={createAnimeWatchParty} errors={errors} initialTitle="" initialLocation="" initialTime={new Date().toISOString().substr(0, 16)} initialCosplayRequired={false} />
        </div>
    )
};

export default AnimeAdd;