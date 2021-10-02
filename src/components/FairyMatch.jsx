import {useEffect} from "react";
import styled from "styled-components";

function FairyMatch(props) {
    useEffect( () => {

    }, []);

    return (
        <Wrapper>
            <MatchContainer>
                <GoodFairy src={"/images/good_mate@3x.png"} />
                <FairyFrame src={"/images/fairy_match_frame@3x.png"} />
                <FairyName src={`/images/fairy_name${props.fit}@3x.png`} />
            </MatchContainer>
            <MatchContainer>
                <BadFairy src={"/images/bad_mate@3x.png"} />
                <FairyFrame src={"/images/fairy_match_frame@3x.png"} />
                <FairyName src={`/images/fairy_name${props.unfit}@3x.png`} />
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

const FairyFrame = styled.img`
    width: 144px;
    margin-bottom: 12px;
`;

const FairyName = styled.img`
    width: 103px;
`;

const GoodFairy = styled.img`
    width: 143px;
`;

const BadFairy = styled.img`
    width: 143px;
`;

export default FairyMatch;