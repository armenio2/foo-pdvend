import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
    height: 6vh;
    cursor: pointer;
    padding: 12px;
    border-left: 10px solid transparent;
    &:hover {
        border-left: 10px solid #37CBFA;
        background: #F4F8FE;
    }
`;
const activeItem = {
    borderLeft: '10px solid #37CBFA',
    background: '#F4F8FE'
}
function NavItem(props) {
    return (
        <Div style={props.selected ? activeItem : null}>
            <div class="row align-items-center">
                <div class="col-3">
                    <img src={props.icon} />
                </div>
                <div class="col-9">
                    <span>{props.label}</span>
                </div>
            </div>
        </Div>
    );
}

export default NavItem;
