import {useEffect, useState} from "react";
import styled from "styled-components";
import {MBTI_NUMBER} from "../common/constant";

function FairyTypeTitle (props) {

    const [mbtiId, setMbtiId] = useState(1);

    useEffect(() => {
        // setMbtiId(MBTI_NUMBER[props.mbti].key);
    }, []);

    return(
        <Container>
            <FairyImage src={`https://cleanhome-dev.s3.ap-northeast-2.amazonaws.com/mbti/results/result_main_frame_${props.result}.png`}></FairyImage>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
`;

const CommonTitle = styled.img`
    margin-top: 60px;
    width: 164px;
`;


const FairyTitle = styled.img`
    margin-top: 6px;
    width: 281px;
`

const FairyImage = styled.img`
    width: 100%;
`;

export default FairyTypeTitle;