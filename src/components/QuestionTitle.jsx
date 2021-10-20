import styled from "styled-components";

function QuestionTitle (props) {
    return (
        <>
            <QuestionText src={`/images/questions/question_${props.questionNumber}_title@3x.png`} />
        </>
    )
}

const QuestionText = styled.img`
    width: 100%;
    margin-bottom: 22px;
`;

export default QuestionTitle;
