import {useEffect} from "react";
import styled from "styled-components";
import TitleImage from "../img/common_title@3x.png"

function FairyTypeTitle (props) {
    useEffect(() => {

    }, []);

    return(
        <Container>
            <CommonTitle src={TitleImage} />
            <FairyTitle src={`/images/FairyTitle${props.id}@3x.png`} />
            <FairyImage src={`/images/FairyImage${props.id}@3x.png`} />
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
    margin-top: 11px;
    width: 100%;
`;

export default FairyTypeTitle;