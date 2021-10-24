import {useEffect} from "react";
import styled from "styled-components";
import {MBTI_COMBINATION, MBTI_NUMBER} from "../common/constant";

function FairyMatch(props) {
    useEffect( () => {

    }, []);

    return (
        <Wrapper>
            <MatchContainer>
                <GoodFairy src={"/images/good_mate@3x.png"} />
                <FairyFrame>
                    <FairyFrameImage src={"/images/fairy_match_frame@3x.png"} />
                    <FairyImage src={`/images/fairies/${MBTI_COMBINATION[props.fit].NAME}@3x.png`} />
                </FairyFrame>
                <FairyName src={`/images/fairy_name1@3x.png`} />
            </MatchContainer>
            <MatchContainer>
                <BadFairy src={"/images/bad_mate@3x.png"} />
                <FairyFrame>
                    <FairyFrameImage src={"/images/fairy_match_frame@3x.png"} />
                    <FairyImage src={`/images/fairies/${MBTI_COMBINATION[props.unfit].NAME}@3x.png`} />
                </FairyFrame>
                <FairyName src={`/images/fairy_name1@3x.png`} />
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
    width: 103px;
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