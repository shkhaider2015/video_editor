import styled from "styled-components";
import { Images } from "../../Theme";

const VideoPlayer = (props) => {
    return <VideoPlayerWrapper>
        <video width="320" height="240" controls poster={Images.videoPlayerThumbnail} >
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
        </video>
    </VideoPlayerWrapper>
}

const VideoPlayerWrapper = styled.div`
    border: 1px solid white;
    display: flex;
    justify-content: center;
`;

export default VideoPlayer;