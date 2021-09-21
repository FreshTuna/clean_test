import {useEffect} from "react";
import styled from "styled-components";
import FairyTypeTitle from "../components/FairyTypeTitle";
import FairyTypeContent from "../components/FairyTypeContent";
import MyRoom from "../components/MyRoom";

function ResultPage (props) {
    const resultType = props.match.params.id;

    useEffect( () => {
        console.log(props.match.params.id);
    }, []);

    const content = [
        "내 눈에는 깨끗한데 왜(대체 왜?) \n 더럽다고 하는지 이해 안가요.",
        "방 안에서 간식 먹으면서 누워서 \n 핸드폰 하면 세상 행복해요.",
        "청소는 일주일에 한 번이면 충분하지 않나요? \n 물론 시간나면 하고 계획은 없어요.",
        "그렇지만 은근 집착하는 청소구역이 따로 있어요. \n 화장실 수채 구멍같이 한 구역만 팹니다.",
        "집 이곳 저곳을 꾸미곤 해요. 머릿속에서만요.",
        "누가 청소좀 하라고 하면, 내키지 않아도 \n (터덜터덜) 따르긴 해요."
    ];
    const special = [
        [0,1,2,3,4,5,6,7,8,9],
        [],
        [7,8,9,10,11],
        [1,2],
        [5],
        []];

    return (
        <>
            <Wrapper>
                <Container>
                    <FairyTypeTitle id={resultType} />
                    {/*<FairyTypeContent id={resultType} content={content} special={special} />*/}
                    <MyRoom id={resultType} />
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    max-width: 500px;
    margin: 0 auto;
`;

const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: #FBF9F4;
   display: flex;
   flex-direction: column;
   font-family: "Sandoll GothicNeo3"
   font-size: 15px;
   font-weight: 400;
   font-align: center;
`;

export default ResultPage;

