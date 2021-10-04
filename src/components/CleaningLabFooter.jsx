import styled from "styled-components";

function CleaningLabFooter() {


    return (
        <Wrapper>
            <ContentBorder src={"/images/content_border@3x.png"} />
            <Container>
                <CleaningLabIcon src={"/images/symbol_blue@4x.png"} />
                <InnerContainer>
                    <LinkTitle src={"/images/app_link_title@3x.png"} />
                    <AppButtonContainer>
                        <AppIcon src={"/images/app_link_android@3x.png"} />
                        <AppIcon src={"/images/app_link_ios@3x.png"} marginRight={"17px"} />
                    </AppButtonContainer>
                </InnerContainer>
            </Container>
            <ContentBorder src={"/images/content_border@3x.png"} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentBorder = styled.img`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 289px;
`;

const Container = styled.div`
    display: flex;
`;

const CleaningLabIcon = styled.img`
    width: 95px;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 176px;
    justify-content: space-between;
    margin-left: 16px;
`;

const LinkTitle = styled.img`
    width: 100%;
`;

const AppButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AppIcon = styled.img`
    height: 23px;
    margin-right: ${ props => props.marginRight ? props.marginRight : "0px"};
`;

export default CleaningLabFooter;