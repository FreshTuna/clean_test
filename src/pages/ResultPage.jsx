import {useEffect} from "react";
import styled from "styled-components";
import FairyTypeTitle from "../components/FairyTypeTitle";
import FairyTypeContent from "../components/FairyTypeContent";
import MyRoom from "../components/MyRoom";
import FairyMatch from "../components/FairyMatch";
import ButtonContainer from "../components/ButtonContainer";

function ResultPage (props) {
    const resultType = props.match.params.id;

    useEffect( () => {
        console.log(props.match.params.id);
    }, []);

    return (
        <>
            <Wrapper>
                <Container>
                    <FairyTypeTitle id={resultType} />
                    {/*<FairyTypeContent id={resultType} content={content} special={special} />*/}
                    <MyRoom id={resultType} />
                    <FairyMatch fit={1} unfit={1}/>
                    <ButtonContainer />
                    <ContentBorder src={"/images/content_border@3x.png"} />
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    max-width: 500px;
    margin: 0 auto;
`;

const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: #FBF9F4;
   display: flex;
   flex-direction: column;
   font-family: "Sandoll GothicNeo3"
   font-size: 15px;
   font-weight: 400;
   font-align: center;
   align-items: center;
`;

const ContentBorder = styled.img`
    margin-top: 30px;
    margin-bottom: 41px;
    width: 289px;
`;

export default ResultPage;

