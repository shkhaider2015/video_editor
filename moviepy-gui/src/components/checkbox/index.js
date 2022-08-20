import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";


const Checkbox = (props) => {
    const {
        onClick = () => { },
        initialValue = false,
        label = ''
    } = props;

    const [selected, setSelected] = React.useState(initialValue);

    return <CheckboxWrapper selected={selected} onClick={() => setSelected(!selected)} >
        <div className="box" >{selected ? <div > &#10004; </div> : null}</div>
        <div className="label-con" >
            <span className="label" >
                {label}
            </span>
        </div>
    </CheckboxWrapper>
}

export default Checkbox;

const CheckboxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: space-between;

    .box {
        width: 30px;
        height: 30px;
        background-color : ${props => props.selected ? Colors.Primary : Colors.Light};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border: 3px solid ${Colors.Dark};
    };

    .label-con {
        padding-left: 30px;
    }

    .label {
        color: ${Colors.White};
        width: 100%;
    }

    &:hover {
        .box {
            border: 3px solid ${Colors.Primary};
            transition: border .1s
        }
    }
`;