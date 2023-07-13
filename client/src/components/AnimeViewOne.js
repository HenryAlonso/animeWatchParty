import { React } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';

import { Container, Box, Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from '../styles.module.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AnimeViewOne = ({ animeWatchParties, removeFromDom }) => {

    const { id } = useParams();

    const selectedWatchParty = animeWatchParties.find(watchParty => watchParty._id === id);

    if (!selectedWatchParty) {
        return <div>Loading...</div>;
    }

    const { title, location, time, cosplayRequired } = selectedWatchParty;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    const formatTime = (timeString) => {
        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        const time = new Date(timeString);
        return time.toLocaleTimeString(undefined, options);
    };

    return (
        <Container maxWidth="lg">
            <div className={styles.nav}>
                <h1>Anime Watch Parties</h1>
                <Link className={`${styles.link} ${styles.noAnchorStyling}`} to={`/`}>
                    View All Watch Parties
                </Link>
            </div>
            <Container maxWidth="md">
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={8}>
                        <span>
                            <Item sx={{ fontSize: '1.25em' }}> What's happening?</Item>
                            <Item sx={{ fontSize: '2em' }}>{ title }</Item>
                        </span>
                        <span>
                            <Item sx={{ fontSize: '1.25em' }}> Where are we watching?</Item>
                            <Item sx={{ fontSize: '2em' }}>{ location }</Item>
                        </span>
                        <span>
                            <Item sx={{ fontSize: '1.25em' }}>What time are we watching?</Item>
                            <Item sx={{ fontSize: '2em' }}>{ formatDate(time)}, {formatTime(time) }</Item>
                        </span>
                        <span>
                            <Item sx={{ fontSize: '1.25em' }}>Is cosplay required for the watch party?</Item>
                            <Item sx={{ fontSize: '2em' }}>{ cosplayRequired ? 'Yes' : 'No'}</Item>
                        </span>
                    </Stack>
                </Box>
                <Button style={{ marginTop: '15px', marginLeft: '10px' }} variant='contained' size='medium'>
                    <Link style={{color: 'white', textDecoration: 'none'}} to={`/anime/edit/${id}`}>Update Watch Party</Link>
                </Button>
                <DeleteButton animeId={ id } successAction= {() => removeFromDom( id )} />
            </Container>
        </Container>
    )
};
export default AnimeViewOne;