import styled from "styled-components";

function QuestionNumber (props) {
    return (
        <>
            <QuestionText src={`/images/question${props.questionNumber}@3x.png`} />
        </>
    )
}

const QuestionText = styled.img`
    width: 52px;
    margin-bottom: 22px;
`;

export default QuestionNumber;
