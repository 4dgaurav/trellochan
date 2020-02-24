import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard, deleteBoard, getBoards } from '../actions/BoardActions';
import { 
    StyledHome, StyledLink,
    StyledForm, StyledInput,
    List, Row, StyledDeleteBoardButton

} from '../components/Styled';

class Home extends Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            newBoardTitle: props.newBoardTitle,
            boardCount: props.boardCount,
            isLoading: props.isLoading,
            boards: props.boards
        };
    }

    componentDidMount = () => {
        this.props.getBoards(this);
    }

    handleTitleChange = (event) => {
        this.setState({ newBoardTitle: event.target.value });
    }

    handleScroll = event => {
        const element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.props.getBoards(this);
        }
    };

    addBoard = (boardTitle, event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(addBoard(this));
    };

    deleteBoard = id => {
        const { dispatch } = this.props;
        dispatch(deleteBoard(id));
    };

    render = () => {
        const { boards, isLoading } = this.props;
        return (
            <React.Fragment>
                <StyledForm onSubmit={(e) => this.addBoard(this.state.newBoardTitle, e)}>
                    <StyledInput
                        autoFocus
                        value={this.state.newBoardTitle}
                        onChange={this.handleTitleChange}
                        placeholder="Add New Board"
                    />
                </StyledForm>
                <StyledHome onScroll={this.handleScroll}>
                    <List>
                        {boards.map(board => (
                            <Row key={`row-${board.id}`}>
                                <StyledLink
                                    to={`board/${board.id}`}
                                >
                                    {board.boardTitle}
                                </StyledLink>
                                <StyledDeleteBoardButton
                                    onClick={() => this.deleteBoard(board.id)}
                                >
                                    &#10005;
                                </StyledDeleteBoardButton>
                            </Row>
                        ))}
                        {isLoading && (
                            <div>loading...</div>
                        )}
                    </List>
                </StyledHome>
            </React.Fragment>
        );
    };
}

const mapStateToProps = state => {
    debugger;
    return {
        boards: Object.values(state.boardsReducer.boards || []),
        isLoading: state.boardsReducer.isLoading,
        newBoardTitle: state.boardsReducer.newBoardTitle || '',
        boardCount: state.boardsReducer.boardCount || 1
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    getBoards: (page) => {
        dispatch(getBoards(page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
