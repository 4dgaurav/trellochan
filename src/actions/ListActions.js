import axios from 'axios';
import shortid from 'shortid';

const baseURL = 'http://localhost:3001';

export const getLists = (page) => dispatch => {
    dispatch({
        type: "GET_LISTS",
        payload: { boardTitle: page.props.boardTitle, id: page.props.boardId, lists: page.props.lists }
    });
    axios
        .get(`${baseURL}/boards/${page.props.boardId}?_embed=lists&_embed=cards`)
        .then(({ data }) => {
            data.lists.every(list => list.cards = data.cards.filter(obj => obj.listId === list.id) || []);
            dispatch({
                type: "GET_LISTS",
                payload: data
            });
        })
        .catch(error => { });
};

export const reorderList = (cardId, sourceId, destinationId, sourceIndex, destinationIndex, boardId) => dispatch => {
    // to do reorder List server call
    dispatch({
        type: "REORDER_LIST",
        payload: { sourceId, destinationId, sourceIndex, destinationIndex }
    });
};

export const addList = (page, listTitle, boardId) => dispatch => {
    debugger;
    const listId = shortid.generate();
    const data = { listTitle, boardId: boardId, id: listId, cards: [] };
    dispatch({
        type: "ADD_LIST",
        payload: data
    });
    axios
        .post(`${baseURL}/lists`, { listTitle, boardId: boardId, id: listId })
        .then(() => { })
        .catch(() => { })
};

export const editListTitle = (listTitle, listId, boardId) => dispatch => {
    dispatch({
        type: "EDIT_LIST_TITLE",
        payload: { listTitle, listId, boardId }
    });
    axios
        .put(`${baseURL}/lists/${listId}`, { listTitle, boardId: boardId })
        .then(() => { })
        .catch(() => { })
};

export const deleteList = (id) => dispatch => {
    dispatch({
        type: "DELETE_LIST",
        payload: { id }
    });
    axios
        .delete(`${baseURL}/lists/${id}`)
        .then(() => { }).catch(() => { })
};

export const reorderBoard = (listId, sourceId, sourceIndex, destinationIndex) => dispatch => {
    // to do reorder board server call
    dispatch({
        type: "REORDER_LISTS",
        payload: { sourceId, sourceIndex, destinationIndex }
    });
};
