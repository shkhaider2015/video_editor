import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { Button, Checkbox, CustomVideoPlayer, FormHandler, ProgressBar, VideoPlayer } from "../../components";
import { CutterSchema } from "../../schema";

const Home = () => {
    const [state, setState] = React.useState({
        isCutter: false,
        cutterForm: {
            startTime: '',
            endTime: ''
        },
        file: null
    })
    const submitRef = React.useRef();
    const fileRef = React.useRef();

    function _cutterClick(value) {
        setState(pS => ({ ...pS, cutterForm: value }))
    }

    function _onSubmit(values) {
        console.log("Values : ", values);
    }

    function _onClickSubmit() {
       submitRef.current?.click();
      
    }

    function _uploadVideo(e) {
       let file = e.target.files[0]
       console.log("My File : ", file);
       setState(pS => ({...pS, file: file }))
    }

    return <HomeWrapper>
        <div className="row-1" >
            <div className="col-1" >
                <Button title="Upload Video" width={'50%'} onClick={()=> fileRef.current?.click()} />
                <input ref={fileRef} type="file" id="file" accept=".mp4, .mpeg|video/*" style={{display: "none"}} onChange={_uploadVideo} />
                <div className="checkbox-con" >
                    <Checkbox label="Use Cutter" initialValue={state.isCutter} onClick={_cutterClick} />
                    <Checkbox label="Use Cutter" />
                    <Checkbox label="Use Cutter" />
                </div>
                <div style={{ padding: 8 }} >
                    <FormHandler
                         btnRef={submitRef} 
                         initialValues={state.cutterForm} 
                         validationSchema={CutterSchema} 
                         onSubmit={_onSubmit} 
                    />
                </div>
                <div style={{ marginTop: '10%' }} >
                    <Button title="Start" width={'25%'} onClick={_onClickSubmit} />
                </div>
            </div>
            <div className="col-2" >
                {/* <VideoPlayer /> */}
                {
                    state.file
                    ? <CustomVideoPlayer file={URL.createObjectURL(state.file)} />
                    : <VideoPlayer />
                }
                
                {/* <VideoEditor /> */}
                <span style={{ color: '#fff' }} > { state.file?.name?.split(" ")?.pop() } </span>
            </div>
        </div>

        <div className="row-2" >
            <ProgressBar />
            <Button title="Done" disable={true} width={'25%'} />
        </div>
    </HomeWrapper>
}

export default Home;

const HomeWrapper = styled.div`
    min-height: 100vh;
    padding: 100px 20px 20px 60px;

    .checkbox-con {
        margin-top: 5%;
    }

    .row-1 {
        display: flex;
        flex-direction: row;
        border: 1px solid green;
    };
    .row-2 {
        display: flex;
        flex-direction: row;
        border: 1px solid green;
        justify-content: space-between;
        align-items: center;
        padding-top: 5%;
    };

    .row-1 .col-1 {
        border: 1px solid red;
        width: 50%;
    };
    .row-1 .col-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border: 1px solid white;
        width: 50%;
    };
`;