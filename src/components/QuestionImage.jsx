import styled from "styled-components";

function QuestionImage (props) {
    return (
        <>
            <QuestionText src={`/images/question_main${props.questionNumber}@3x.png`} />
        </>
    )
}

const QuestionText = styled.img`
    width: 100%;
`;

export default QuestionImage;
