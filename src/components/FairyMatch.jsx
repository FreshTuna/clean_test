import {useEffect} from "react";
import styled from "styled-components";
import {MBTI_COMBINATION, MBTI_NUMBER} from "../common/constant";
import {useHistory} from "react-router-dom";

function FairyMatch(props) {
    const history = useHistory();
    useEffect( () => {
    }, []);

    const matchingFairy = (mbti) => {
        history.push(`/result/${mbti}`);
    }

    return (
        <Wrapper>
            <MatchContainer>
                <GoodFairy src={"/images/good_mate@3x.png"} />
                <FairyFrame onClick={ () => matchingFairy(props.fit)}>
                    <FairyFrameImage src={`https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/match/${MBTI_COMBINATION[props.fit].NAME}_frame_fit%403x.png`} />
                </FairyFrame>
                <FairyName src={`https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/title/${MBTI_COMBINATION[props.fit].NAME}_title%403x.png`} />
            </MatchContainer>
            <MatchContainer>
                <BadFairy src={"/images/bad_mate@3x.png"} />
                <FairyFrame onClick={ () => matchingFairy(props.unfit)}>
                    <FairyFrameImage src={`https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/match/${MBTI_COMBINATION[props.unfit].NAME}_frame_unfit%403x.png`} />
                </FairyFrame>
                <FairyName src={`https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/title/${MBTI_COMBINATION[props.unfit].NAME}_title%403x.png`} />
            </MatchContainer>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 360px;
`;

const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

const FairyFrame = styled.div`
    margin-bottom: 12px;
    position: relative;
`;

const FairyFrameImage = styled.img`
    width: 144px;
`;

const FairyName = styled.img`
    height: 16px;
`;

const Fairy = styled.div`
    position: absolute;
`;

const FairyImage = styled.img`
    width: 144px;
    height: 124px;
    position: absolute;
    top: 0;
    left: 0;
`;

const GoodFairy = styled.img`
    width: 143px;
`;

const BadFairy = styled.img`
    width: 143px;
`;

export default FairyMatch;