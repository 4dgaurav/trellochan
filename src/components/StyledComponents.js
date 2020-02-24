import React, { Component } from 'react';
import { 
    StyledListTitleInput, StyledDeleteListButton,
    StyledCardTitleInput, StyledDeleteCard,
    StyledEditCardTitle
} from '../components/Styled';


/* ============ lists =============== */

// list title input

export class ListTitleInput extends Component {
    render() {
        return (
            <StyledListTitleInput {...this.props} />
        );
    }
}

// list delete button


export class DeleteListButton extends Component {
    render() {
        return (
            <StyledDeleteListButton {...this.props}>
                &#10005;
            </StyledDeleteListButton>
        );
    }
}

/* ============ cards =============== */

// card title input

export class CardTitleInput extends Component {
    render() {
        return (
            <StyledCardTitleInput {...this.props} />
        );
    }
}

// card delete 

export class DeleteCard extends Component {
    render() {
        return (
            <StyledDeleteCard {...this.props}>
                &#10005;
            </StyledDeleteCard>
        );
    }
}

// edit card title

export class EditCardTitle extends Component {
  render() {
    return (
      <StyledEditCardTitle {...this.props}>
        {this.props.title}
      </StyledEditCardTitle>
    );
  }
}