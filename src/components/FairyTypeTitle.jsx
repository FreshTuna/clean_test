import {useEffect, useState} from "react";
import styled from "styled-components";
import TitleImage from "../img/common_title@3x.png"
import {MBTI_NUMBER} from "../common/constant";

function FairyTypeTitle (props) {

    const [mbtiId, setMbtiId] = useState(1);

    useEffect(() => {
        // setMbtiId(MBTI_NUMBER[props.mbti].key);
    }, []);

    return(
        <Container>
            {/*<CommonTitle src={TitleImage} />*/}
            {/*<FairyTitle src={`/images/FairyTitle${props.id}@3x.png`} />*/}
            {/*<FairyImage src={`/images/FairyImage${props.id}@3x.png`} />*/}
            <FairyImage src={`/images/results/result_main_frame_${props.result}@3x.png`}></FairyImage>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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