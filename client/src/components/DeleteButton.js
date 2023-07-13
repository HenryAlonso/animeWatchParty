import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = props => {
    const { animeId, successAction } = props;
    const navigate = useNavigate();

    const deleteWatchParty = e => {
        axios
            .delete(`http://localhost:8000/api/anime/${animeId}`)
            .then(res => {
                successAction();
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Button style={{ marginTop: '15px', marginLeft: '10px' }} startIcon={<DeleteIcon />} color='error' variant="contained" size="medium" onClick={deleteWatchParty}>
            Delete Watch Party
        </Button>
    )
};
export default DeleteButton;