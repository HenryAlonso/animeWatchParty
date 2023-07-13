import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Divider } from '@mui/material';
import Paper from '@mui/material/Paper';

import styles from '../styles.module.css';

const AnimeDisplay = (props) => {
    const { animeWatchParties } = props;

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
                <Link className={`${styles.link} ${styles.noAnchorStyling}`} to={`/anime/new`}>
                    Create your own Anime Watch Party
                </Link>
            </div>
            <Divider component="div" role='presentation' />
            <p className={styles.containerSpacing}>Experience these amazing shows with friends!</p>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Anime Watch Parties (Check them out!)</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Cosplay Required</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {animeWatchParties.map((watchParty) => {
                            return (
                            <TableRow key={watchParty._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Link
                                        className={`${styles.titleLink} ${styles.noAnchorStyling}`}
                                        to={`/anime/${watchParty._id}`}
                                    >
                                        {watchParty.title}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{watchParty.location}</TableCell>
                                <TableCell align="right">{formatDate(watchParty.time)}, {formatTime(watchParty.time)}</TableCell>
                                <TableCell align="right">{watchParty.cosplayRequired ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                            )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default AnimeDisplay;
