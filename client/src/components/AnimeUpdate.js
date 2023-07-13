import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AnimeForm from '../components/AnimeForm';

const AnimeUpdate = (props) => {
    const { animeWatchParties, setAnimeWatchParties } = props;

    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const selectedWatchParty = animeWatchParties.find(watchParty => watchParty._id === id);

    if (!selectedWatchParty) {
        return <div>Loading...</div>;
    }
    const { title, location, time, cosplayRequired } = selectedWatchParty;

    const updateAnimeWatchParty = animeData => {
        axios
            .put(`http://localhost:8000/api/anime/${id}`, animeData)
            .then(res => {
                const updatedWatchParties = animeWatchParties.map((watchParty) => {
                    if (watchParty._id === id) {
                        return { ...watchParty, ...animeData };
                    }
                    return watchParty;
                });
                console.log(res);
                setAnimeWatchParties(updatedWatchParties);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <div>
            <AnimeForm onSubmitProp={updateAnimeWatchParty} errors={errors} initialTitle={title} initialLocation={location} initialTime={time} initialCosplayRequired={cosplayRequired} />
        </div>
    )
}
export default AnimeUpdate;