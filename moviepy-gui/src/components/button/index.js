import styled from "styled-components";
import { Colors } from "../../Theme";


const Button = (props) => {
    const {
        title='default',
        onClick= ()=>{},
        width= '100%',
        disable=false
    } = props;

    return <ButtonWrapper onClick={onClick} width={width} disable={disable} >
        <span className={`btn`} >{title}</span>
    </ButtonWrapper>
}

export default Button;

const ButtonWrapper = styled.div`
    display: flex;
    width: ${props => props.width};
    min-height: 50px;
    background-color: ${props => props.disable ? Colors.secondary : Colors.Primary};
    border: 2px solid ${props => props.disable ? Colors.secondary : Colors.Primary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.disable ? 'text' : 'pointer' };

    .btn {
        color: ${props => props.disable ? Colors.Light : Colors.White};
        font-weight: bold;
        font-size: 16px;
    };

    &:hover {
        background-color: ${props => props.disable ? Colors.secondary : Colors.Dark};
        border: 2px solid ${props => props.disable ? Colors.secondary : Colors.Primary};
        transition: background-color .3s;

        .btn {
            color: ${props => props.disable ? Colors.Light : Colors.Primary};
        }
    }
`;