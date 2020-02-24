import axios from 'axios';
import shortid from 'shortid';

const baseURL = 'http://localhost:3001';

export const getBoards = (page) => dispatch => {
    dispatch({
        type: "GET_BOARDS",
        payload: { boardCount: page.props.boardCount, boards: page.props.boards }
    });
    axios
        .get(`${baseURL}/boards?_order=desc&_sort=id&_page=${page.props.boardCount}&_limit=10`)
        .then(({ data }) => {
            data.every(board => {
                board.lists = [];
                return !page.props.boards.find(obj => obj.id === board.id) && page.props.boards.push(board);
            });
            dispatch({
                type: "GET_BOARDS",
                payload: { isLoading: false, boardCount: data.length > 0 ? page.state.boardCount : page.state.boardCount + 1, boards: page.props.boards }
            });
        })
        .catch(() => {});
};

export const addBoard = (page) => dispatch => {
    const boardId = shortid.generate();
    const boardTitle = page.state.newBoardTitle;
    dispatch({
        type: "ADD_BOARD",
        payload: { boardTitle: boardTitle, id: boardId }
    });
    axios
        .post(`${baseURL}/boards`, { boardTitle: boardTitle, id: boardId })
        .then(() => {})
        .catch(() => {})
};

export const deleteBoard = (id) => dispatch => {
    dispatch({
        type: "DELETE_BOARD",
        payload: { id }
    });
    axios
        .delete(`${baseURL}/boards/${id}`)
        .then(() => {})
        .catch(() => {})
};

