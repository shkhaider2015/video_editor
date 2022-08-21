import styled from "styled-components";
import ReactPlayer from 'react-player'

// URL.createObjectURL(state.file)
const CustomVideoPlayer = (props) => {
    const {file=''} = props;

    console.log("file ");
    return <CustomVideoPlayerWrapper>
        <ReactPlayer
            url={file} 
            light={true}
            controls={false}
            width={'100%'}
            />
        <div className="buttom-con" >
            
        </div>
    </CustomVideoPlayerWrapper>
}

const CustomVideoPlayerWrapper = styled.div`


    .buttom-con {
        height: 50px;
        width: 100%;
        margin-top: -10px;
        z-index: 222;
        border: 2px solid red;
        background-color: #000;
    }
`;


export default CustomVideoPlayer;