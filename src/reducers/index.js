const listsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_LISTS": {
            return { ...state, ...action.payload }
        }
        case "ADD_CARD":
            state.lists.find(list => list.id === action.payload.listId).cards.push(action.payload);
            return { ...state };
        case "ADD_LIST": {
            state.lists.push(action.payload);
            debugger;
            return { ...state };
        }
        case "DELETE_LIST": {
            const { id } = action.payload;
            state.lists = state.lists.filter(el => el.id !== id)
            return { ...state }
        }
        case "EDIT_LIST_TITLE": {
            const { listId, listTitle } = action.payload;
            const listIndex = state.lists.findIndex(el => el.id === listId);
            state.lists[listIndex].listTitle = listTitle;
            return { ...state };
        }
        case "EDIT_CARD_TITLE": {
            const { cardTitle, cardId, listId } = action.payload;
            const listIndex = state.lists.findIndex(el => el.id === listId);
            const cardIndex = state.lists[listIndex].cards.findIndex(el => el.id === cardId);
            state.lists[listIndex].cards[cardIndex].cardTitle = cardTitle;
            return { ...state };
        }
        case "DELETE_CARD": {
            const { id, listId } = action.payload;
            const listIndex = state.lists.findIndex(el => el.id === listId);
            state.lists[listIndex].cards = state.lists[listIndex].cards.filter(el => el.id !== id)
            return { ...state };
        }
        case "REORDER_LIST": {
            const {
                sourceIndex,
                destinationIndex,
                sourceId,
                destinationId
            } = action.payload;
            if (sourceId === destinationId) {
                const listIndex = state.lists.findIndex(el => `list_${el.id}` === sourceId);
                var crds = state.lists[listIndex].cards;
                const [removedCard] = crds.splice(sourceIndex, 1);
                crds.splice(destinationIndex, 0, removedCard);
                return { ...state };
            }

            const sourcelistIndex = state.lists.findIndex(el => `list_${el.id}` === sourceId);
            var sourcecrds = state.lists[sourcelistIndex].cards;

            const destlistIndex = state.lists.findIndex(el => `list_${el.id}` === destinationId);
            var destcrds = state.lists[destlistIndex].cards;

            const [removedCard] = sourcecrds.splice(sourceIndex, 1);
            destcrds.splice(destinationIndex, 0, removedCard);
            return { ...state };
        }
        case "REORDER_LISTS": {
            const { sourceIndex, destinationIndex } = action.payload;
            var b = state.lists;
            const [removedList] = b.splice(sourceIndex, 1);
            b.splice(destinationIndex, 0, removedList);
            return { ...state };
        }
        default:
            return state;
    }
};

const boardsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_BOARDS": {
            debugger;
            return { ...state, ...action.payload }
        }
        case "ADD_BOARD": {
            debugger;
            var h = Object.values(state.boards);
            h.unshift(action.payload);
            Object.assign(state.boards, h)
            return { ...state };
        }
        case "DELETE_BOARD": {
            const { id } = action.payload;
            state.boards = state.boards.filter(el => el.id !== id)
            return { ...state }
        }
        default:
            return state;
    }
};

export default { listsReducer, boardsReducer };
