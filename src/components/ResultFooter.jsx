import styled from "styled-components";

function ResultFooter () {

    return (
        <Wrapper>
            <PresentBy src={"/images/present_by@3x.png"} />
            <Contributors>
                <a href={"https://naver.com"} target="_blank" rel="noopener noreferrer">
                    <Contributor src={"/images/contributor_kaya@3x.png"} />
                </a>

                <Dot src={"/images/dot@3x.png"} />

                <a href={"https://naver.com"} target="_blank" rel="noopener noreferrer">
                    <Contributor src={"/images/contributor_henry@3x.png"} />
                </a>

                <Dot src={"/images/dot@3x.png"} />

                <a href={"https://naver.com"} target="_blank" rel="noopener noreferrer">
                    <Contributor src={"/images/contributor_alex@3x.png"} />
                </a>
            </Contributors>
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

const Contributors = styled.div`
    display: flex;
    align-items:center;
    margin-top: 5px;
`;

const Dot = styled.img`
    width: 24px;
`;

const Contributor = styled.img`
    width: 64px;
`;

const Wrapper = styled.section`
    margin-bottom: 135px;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export default ResultFooter;