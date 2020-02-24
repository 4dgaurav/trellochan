import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/ListActions';
import { ListTitleInput } from './StyledComponents';
import { ListTitleInputWrapper, AddNewList } from  './Styled';

class ListAdder extends Component {
    constructor() {
        super();
        this.state = {
            listEdit: false,
            newListTitle: ""
        };
    }
    onBlur = () => {
        this.setState({ listEdit: !1 });
    };
    /**
     * Change List title.
     *
     * @param {event} HTMLEvent
     */
    onChange = event => {
        this.setState({ newListTitle: event.target.value });
    };
    /**
     * Track Enter press.
     *
     * @param {event} HTMLEvent
     */
    onKeyDown = event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            this.onSubmit();
        }
    };
    /**
     * Submit New List.
     *
     */
    onSubmit = () => {
        const { dispatch, boardId } = this.props;
        const { newListTitle } = this.state;
        dispatch(addList(this, newListTitle, boardId));
        this.setState({ listEdit: !1, newListTitle: "" });
    };
    render = () => {
        const { listEdit, newListTitle } = this.state;
        if (!listEdit) {
            return (
                <AddNewList onClick={() => this.setState({ listEdit: !0 })}>
                    + Add a New List
                </AddNewList>
            );
        }
        return (
            <div className="list">
                <ListTitleInputWrapper className="list-title-textarea-wrapper">
                    <ListTitleInput
                        autoFocus
                        useCacheForDOMMeasurements
                        value={newListTitle}
                        onChange={this.onChange}
                        onKeyDown={this.onKeyDown}
                        onBlur={this.onBlur}
                    />
                </ListTitleInputWrapper>
            </div>
        );
    };
}

export default connect()(ListAdder);
