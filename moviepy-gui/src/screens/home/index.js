import styled from "styled-components";
import { Button, Checkbox, ProgressBar } from "../../components";

const Home = () => {
     
    return <HomeWrapper>
        <Button title="Upload Video" width={'30%'} />
        <div className="checkbox-con" >
            <Checkbox label="Use Cutter" />
            <Checkbox label="Use Cutter" />
            <Checkbox label="Use Cutter" />
        </div>
        <Button title="Start" width={'15%'} />
        <ProgressBar />
        <Button title="Done" disable={true} width={'15%'} />
    </HomeWrapper>
}

export default Home;

const HomeWrapper = styled.div`
    min-height: 100vh;
    padding: 100px 20px 20px 100px;

    .checkbox-con {
        margin-top: 5%;
        width: 20%;
    }
`;