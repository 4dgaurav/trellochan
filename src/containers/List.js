import * as React from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
    CardTitleInput, DeleteCard,
    DeleteListButton, ListTitleInput, EditCardTitle
} from '../components/StyledComponents';
import { addCard, editCardTitle, deleteCard } from '../actions/CardActions';
import { editListTitle, deleteList } from '../actions/ListActions';
import {
    ListTitleTextareaWrapper, CardWrapper,
    CardForm, CardTitleForm,
    ListTitle, StyledListTitleButton,
    StyledCard, ListConatiner, ComposerWrapper
} from '../components/Styled';

class List extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newCardFormIsOpen: false,
            newCardTitle: "",
            cardInEdit: null,
            editableCardTitle: "",
            isListTitleInEdit: false,
            newListTitle: "",
            cards: props.list.cards,
            lists: props.lists,
            list: props.list,
            listTitle: props.list.listTitle,
            listId: props.list.listId
        };
    }

    toggleCardComposer = () =>
        this.setState({ newCardFormIsOpen: !this.state.newCardFormIsOpen });

    onCardComposerChange = (event) => {
        this.setState({ newCardTitle: event.target.value });
    };

    onKeyDown = (event) => {
        if (event.keyCode === 13) {
            this.onSubmitCard(event);
        }
    };

    onSubmitCard = event => {
        event.preventDefault();
        const { newCardTitle } = this.state;
        const { list, boardId, dispatch } = this.props;
        if (newCardTitle === "") return;
        dispatch(addCard(newCardTitle, list.id, boardId));
        this.setState({ newCardTitle: "", newCardFormIsOpen: false });
    };

    openCardEditor = card => {
        this.setState({ cardInEdit: card.id, editableCardTitle: card.cardTitle });
    };

    onCardEditorChange = (event) => {
        this.setState({ editableCardTitle: event.target.value });
    };

    onEditKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.onSubmitCardEdit();
        }
    };

    onSubmitCardEdit = () => {
        const { editableCardTitle, cardInEdit } = this.state;
        const { list, boardId, dispatch } = this.props;
        if (editableCardTitle === "") {
            this.deleteCard(cardInEdit);
        } else {
            dispatch(editCardTitle(editableCardTitle, cardInEdit, list, boardId));
        }
        this.setState({ editableCardTitle: "", cardInEdit: null });
    };

    deleteCard = cardId => {
        const { dispatch, list, boardId } = this.props;
        dispatch(deleteCard(cardId, list.id, boardId));
    };

    openTitleEditor = () => {
        this.setState({
            isListTitleInEdit: true,
            newListTitle: this.props.list.listTitle
        });
    };

    onListTitleEditorChange = (event) => {
        this.setState({ newListTitle: event.target.value });
    };

    onListTitleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.onSubmitListTitle();
        }
    };

    onSubmitListTitle = () => {
        const { newListTitle } = this.state;
        const { list, boardId, dispatch } = this.props;
        if (newListTitle === "") return;
        dispatch(editListTitle(newListTitle, list.id, boardId));
        this.setState({
            isListTitleInEdit: false,
            newListTitle: ""
        });
    };

    deleteList = id => {
        const { dispatch } = this.props;
        dispatch(deleteList(id));
    };

    render = () => {
        const { list } = this.props;
        const {
            newCardFormIsOpen,
            newCardTitle,
            cardInEdit,
            editableCardTitle,
            isListTitleInEdit,
            newListTitle
        } = this.state;
        return (
            <ListConatiner>
                {isListTitleInEdit ? (
                    <ListTitleTextareaWrapper>
                        <ListTitleInput
                            autoFocus
                            useCacheForDOMMeasurements
                            value={newListTitle}
                            onChange={this.onListTitleEditorChange}
                            onKeyDown={this.onListTitleKeyDown}
                            onBlur={this.onSubmitListTitle}
                        />
                    </ListTitleTextareaWrapper>
                ) : (
                        <ListTitle>
                            <StyledListTitleButton
                                onFocus={this.openTitleEditor}
                                onClick={this.openTitleEditor}>
                                {list.listTitle}
                            </StyledListTitleButton>
                            <DeleteListButton onClick={() => this.deleteList(list.id)} />
                        </ListTitle>
                    )}
                {newCardFormIsOpen && (

                    <CardTitleForm
                        onSubmit={this.onSubmitCard}
                    >
                        <CardTitleInput
                            autoFocus
                            useCacheForDOMMeasurements
                            onChange={this.onCardComposerChange}
                            onKeyDown={this.onKeyDown}
                            value={newCardTitle}
                            onBlur={this.toggleCardComposer}
                        />
                    </CardTitleForm>

                )}
                {newCardFormIsOpen || (
                    <ComposerWrapper
                        text="Add new card"
                        onClick={this.toggleCardComposer}>
                        + Add new card
                    </ComposerWrapper>
                )}
                <Droppable droppableId={"list_" + list.id}>
                    {provided => (
                        <StyledCard ref={provided.innerRef}>
                            {list.cards.map((card, index) => (
                                <Draggable key={card.id} draggableId={'card_' + card.id} index={index}>
                                    {({
                                        innerRef,
                                        draggableProps,
                                        dragHandleProps,
                                        placeholder
                                    }) => (
                                            <React.Fragment>
                                                {cardInEdit !== card.id ? (
                                                    <div
                                                        ref={innerRef}
                                                        {...draggableProps}
                                                        {...dragHandleProps}
                                                        data-react-beautiful-dnd-draggable="0"
                                                        data-react-beautiful-dnd-drag-handle="0"
                                                    >
                                                        <CardWrapper>
                                                            <EditCardTitle title={card.cardTitle} onClick={() => this.openCardEditor(card)} />
                                                            <DeleteCard onClick={() => this.deleteCard(card.id)} />
                                                        </CardWrapper>
                                                    </div>
                                                ) : (
                                                        <CardForm 
                                                            ref={innerRef}
                                                            {...draggableProps}
                                                            {...dragHandleProps}
                                                            data-react-beautiful-dnd-draggable="0"
                                                            data-react-beautiful-dnd-drag-handle="0">
                                                            <CardTitleInput
                                                                autoFocus
                                                                useCacheForDOMMeasurements
                                                                value={editableCardTitle}
                                                                onChange={this.onCardEditorChange}
                                                                onKeyDown={this.onEditKeyDown}
                                                                onBlur={this.onSubmitCardEdit}
                                                            />
                                                        </CardForm>
                                                    )}
                                                {placeholder}
                                            </React.Fragment>
                                        )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </StyledCard>
                    )}
                </Droppable>
            </ListConatiner>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        lists: Object.values(state.listsReducer.lists || []),
        listTitle: state.listsReducer.listTitle || "",
        listId: state.listsReducer.listId || "",

    }
};

export default connect(mapStateToProps)(List);
