import * as React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';
import ListAdder from '../components/AddList';
import { reorderList, getLists, reorderBoard } from '../actions/ListActions';
import { 
    BoardWrapper, ListWrapper,
    BoardTitle, BoardTitleWrapper 
} from '../components/Styled';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardTitle: props.boardTitle,
            boardId: props.boardId,
            boards: props.boards,
            lists: props.lists,
        };
    }

    componentDidMount = () => {
        this.props.getLists(this);
    }

    onDragEnd = ({ draggableId, source, destination, type }) => {
        if (!destination) return;
        const { dispatch, boardId } = this.props;
        if (type === "LIST") {
            dispatch(
                reorderBoard(
                    draggableId,
                    source.droppableId,
                    source.index,
                    destination.index
                )
            );
            return;
        }
        dispatch(
            reorderList(
                draggableId,
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index,
                boardId
            )
        );
    };
    render = () => {
        const { lists, boardId, boardTitle } = this.props;
        if (!boardTitle) {
            return <div>Loading...</div>
        }
        return (
            <React.Fragment>
                <BoardTitleWrapper>
                    <BoardTitle>{boardTitle}</BoardTitle>
                </BoardTitleWrapper>
                <BoardWrapper>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId={"board_" + boardId} type="LIST" direction="horizontal">
                            {droppableProvided => (
                                <ListWrapper className="lists" ref={droppableProvided.innerRef}>
                                    {lists.map((list, index) => (
                                        <Draggable
                                            key={`board_${boardId}_list_${list.id}`}
                                            draggableId={'list_' + list.id}
                                            index={index}
                                        >
                                            {provided => (
                                                <React.Fragment>
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        data-react-beautiful-dnd-draggable="0"
                                                        data-react-beautiful-dnd-drag-handle="0"
                                                    >
                                                        <List
                                                            list={list}
                                                            boardId={boardId}
                                                        />
                                                    </div>
                                                    {provided.placeholder}
                                                </React.Fragment>
                                            )}
                                        </Draggable>
                                    ))}
                                    {droppableProvided.placeholder}
                                    <ListAdder boardId={boardId} />
                                </ListWrapper>
                            )}
                        </Droppable>
                    </DragDropContext>
                </BoardWrapper>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    debugger;
    const { id } = ownProps.match.params;
    
    const boardIndex = state.boardsReducer.boards.findIndex(el => el.id === id);
    if (state.listsReducer.lists && state.listsReducer.lists.length > 0 && state.listsReducer.lists[0].boardId === state.boardsReducer.boards[boardIndex].id){
        state.boardsReducer.boards[boardIndex].lists = state.listsReducer.lists || [];
    }
    
    const board = state.boardsReducer.boards.find(obj => obj.id === id);
    return {
        boards: Object.values(state.boardsReducer.boards || []),
        lists: Object.values(board.lists || []),
        boardTitle: board.boardTitle,
        boardId: id
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getLists: (page) => {
        dispatch(getLists(page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
