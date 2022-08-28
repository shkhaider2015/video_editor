import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import Dragable from 'react-draggable';
import { useWindowSize } from "../../hooks";

// URL.createObjectURL(state.file)
const CustomVideoPlayer = (props) => {
    const { file = '' } = props;

    const [points, setPoints] = React.useState([])
    const [divWidth, setDivWidth] = React.useState(0)
    const { width  } = useWindowSize(100);

    function _addPoints() {
        setPoints([...points,  points[points.length] + 1])
    }

    function widthSetter(e) {
        let screenX = e.screenX;
        
    }

    console.log("file ");
    return <CustomVideoPlayerWrapper>
        <ReactPlayer
            url={file}
            light={true}
            controls={true}
            width={'100%'}
        />
        <div className="bottom-con ll" >
            {/* {
                points.map((item, ind) => < ><Point /> <div /> <Point /> </> )
            } */}
            <Point onDrag={widthSetter} />
            <div style={{ backgroundColor: 'gray', width: width }} />
            <Point onDrag={widthSetter} />
        </div>
        <button onClick={_addPoints} >More</button>
    </CustomVideoPlayerWrapper>
}

const Point = ({ onDrag=()=>{} }) => <Dragable
axis="x"
onStart={(e) => { console.log("onStart : ", e) }}
onDrag={(e) => { console.log("onDrag : ", e) }}
onStop={(e) => { console.log("onStop : ", e) }}
bounds="parent"
>
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}  >
<div 
        style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '4px', 
                backgroundColor: 'yellow' 
                }} />
    <div style={{
        width: '2px',
        height: '50px',
        backgroundColor: 'red',
        borderRadius: '2px',

    }} />
    <div 
        style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '4px', 
                backgroundColor: 'yellow' 
                }} />
</div>
</Dragable>

const CustomVideoPlayerWrapper = styled.div`


    .bottom-con {
        height: 50px;
        width: 89%;
        margin-left: 5%;
        margin-top: -10px;
        z-index: 222;
        border: 2px solid red;
        background-color: #000;
        display: flex;
        flex-direction: row;
        position: relative;
    }
`;


export default CustomVideoPlayer;