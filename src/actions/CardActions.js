import axios from 'axios';
import shortid from 'shortid';

const baseURL = 'http://localhost:3001';

export const addCard = (cardTitle, listId, boardId) => dispatch => {
    const cardId = shortid.generate();
    const data = { cardTitle, listId: listId, boardId: boardId, id: cardId };
    dispatch({
        type: "ADD_CARD",
        payload: { ...data }
    });
    axios
        .post(`${baseURL}/cards`, data)
        .then(() => {})
        .catch(() => {})
};

export const editCardTitle = (cardTitle, cardId, list, boardId) => dispatch => {
    dispatch({
        type: "EDIT_CARD_TITLE",
        payload: { cardTitle, cardId: cardId, listId: list.id, boardId: boardId }
    });
    axios
        .put(`${baseURL}/cards/${cardId}`, { cardTitle, listId: list.id, boardId: boardId })
        .then(() => {})
        .catch(() => {})
};

export const deleteCard = (id, listId, boardId) => dispatch => {
    dispatch({
        type: "DELETE_CARD",
        payload: { id, listId, boardId }
    });
    axios
        .delete(`${baseURL}/cards/${id}`)
        .then(() => {})
        .catch(() => {})
};
