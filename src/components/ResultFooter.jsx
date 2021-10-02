import styled from "styled-components";

function ResultFooter () {

    return (
        <Wrapper>
            <PresentBy src={"/images/footer_text@3x.png"} />
            <Contributors src={"/images/contributors@3x.png"} />
        </Wrapper>
    )
}

const SymbolImage = styled.img`
    width: 70px;
    margin-bottom: 24px;
`;

const PresentBy = styled.img`
    width: 85px;
    margin-bottom: 5px;
`;

const Contributors = styled.img`
    margin-top: 5px;
    width: 185px;
`;

const Wrapper = styled.section`
    margin-bottom: 135px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export default ResultFooter;