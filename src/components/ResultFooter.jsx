import styled from "styled-components";

function ResultFooter () {

    return (
        <>
            <SymbolImage src={"/images/symbol_blue@4x.png"} />
        </>
    )
}

const SymbolImage = styled.img`
    width: 70px;
    margin-bottom: 24px;
`;

export default ResultFooter;