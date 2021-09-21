import styled from "styled-components";

function FairyTypeContent (props) {
    return (
        <Wrapper>
            {
                props.content.map((v,index) => {
                    return(
                        <>
                            <ContentContainer>
                                {
                                    v.split(" ").map((o, i) => {
                                        return (
                                            o == "\n" ? <br/> :
                                            <FairyContent i={i} index={props.special[index]}>{o} </FairyContent>
                                        )
                                    })
                                }
                            </ContentContainer>
                            { index == props.content.length - 1 ? null : <ContentBorder src={"/images/content_border@3x.png"} /> }
                        </>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FairyContent = styled.span`
    color: ${props => props.index.includes(props.i)? "#4284E7" : "#212121" };
    margin: 0 auto;
`;

const ContentBorder = styled.img`
    width: 289px;
`;

const ContentContainer = styled.div`
    margin-bottom: 9px;
    margin-top: 10px;
`;


export default FairyTypeContent;