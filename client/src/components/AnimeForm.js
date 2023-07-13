import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, InputLabel, TextField, Button, FormControlLabel, Checkbox, Paper } from '@mui/material';
import styles from '../styles.module.css';

const AnimeForm = (props) => {

    const formatTime = (time) => {
        if (time) {
            return new Date(time).toISOString().slice(0, -8);
        }
        return '';
    };

    const { initialTitle, initialLocation, initialTime, initialCosplayRequired, onSubmitProp, errors } = props;
    const [title, setTitle] = useState(initialTitle);
    const [location, setLocation] = useState(initialLocation);
    const [time, setTime] = useState(formatTime(initialTime));
    const [cosplayRequired, setCosplayRequired] = useState(initialCosplayRequired);

    const onSubmitHandler = e => {
        e.preventDefault();

        const formData = {
            title,
            location,
            time,
            cosplayRequired,
        };

        onSubmitProp(formData);
    }



    return (
        <Container maxWidth="md">
            <div className={styles.nav}>
                <h1>Anime Watch Party</h1>
                <Link className={`${styles.link} ${styles.noAnchorStyling}`} to={`/`}>
                    Home
                </Link>
            </div>
            <Paper elevation={3}>
                <form onSubmit={onSubmitHandler}>
                    <div className={styles.containerSpacing}>
                        <InputLabel>What anime are we watching?</InputLabel>
                        {errors.title ? <p className={styles.errors}>{errors.title.message}</p> : null}
                        <TextField
                            // label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className={styles.containerSpacing}>
                        <InputLabel>Where is the watch party located at?</InputLabel>
                        {errors.location ? <p className={styles.errors}>{errors.location.message}</p> : null}
                        <TextField
                            // label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className={styles.containerSpacing}>
                        <InputLabel>What time is the watch party?</InputLabel>
                        <TextField
                            type="datetime-local"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    <div className={styles.containerSpacing}>
                        <InputLabel>Is cosplay required?</InputLabel>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={cosplayRequired}
                                    onChange={(e) => setCosplayRequired(e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="Check to let the viewers know it is! (No by default)"
                        />
                    </div>

                    <div className={styles.containerSpacing}>
                        <Button variant='contained' size='medium' type="submit">Submit</Button>
                    </div>
                </form>
            </Paper>
        </Container>
    )
};
export default AnimeForm;