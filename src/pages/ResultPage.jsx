import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import FairyTypeTitle from "../components/FairyTypeTitle";
import FairyMatch from "../components/FairyMatch";
import ButtonContainer from "../components/ButtonContainer";
import ResultFooter from "../components/ResultFooter";
import CleaningLabFooter from "../components/CleaningLabFooter";
import {MBTI_COMBINATION, MBTI_NUMBER, NUMBER_MBTI, SHARE_FAIRY_TITLE} from "../common/constant";
import {Helmet} from "react-helmet";


function ResultPage (props) {
    const resultType = props.match.params.id;
    const location = useLocation();
    let mbti = ""
    if (location.state) {
        mbti = location.state.mbti;
    }

    useEffect( () => {
        console.log(props.match.params.id);
    }, []);

    return (
        <>
            <Helmet>
                <title>{SHARE_FAIRY_TITLE[NUMBER_MBTI[resultType].NAME].TITLE}</title>
                <meta property="og:image" content={`https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/og/og_share_${resultType}.png`} />
            </Helmet>
            <Wrapper>
                <Container>
                    <FairyTypeTitle result={resultType} />
                    <FairyMatch fit={MBTI_COMBINATION[resultType].PERFECT} unfit={MBTI_COMBINATION[resultType].ANTI}/>
                    <ButtonContainer result={resultType} />
                    <CleaningLabFooter />
                    <ResultFooter />
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

export default ResultPage;

