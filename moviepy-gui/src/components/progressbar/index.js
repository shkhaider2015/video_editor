import styled from "styled-components"
import { Colors } from "../../Theme";

const ProgressBar = (props) => {
    const {} = props;

    return <ProgressBarWrapper>
            <div className="fill" >
                <span className="label" >25%</span>
            </div>
    </ProgressBarWrapper>
}

const ProgressBarWrapper = styled.div`
    height: 25px;
    background-color: ${Colors.secondary};
    border-radius: 20px;
    width: 60%;

    .fill {
        height: 25px;
        background-color: ${Colors.Primary};
        border-radius: 20px;
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    };

    .label {
        color: ${Colors.White};
    }


`;

export default ProgressBar;