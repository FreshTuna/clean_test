import styled from "styled-components";

function ProgressBar (props) {

    return (
        <ProgressSection>
            <ProgressValue fill={props.fill} />
        </ProgressSection>
    )
}


const ProgressSection = styled.section`
    width: 100%;
    height: 8px;
    background-color: #E9E5DA;
`;

const ProgressValue = styled.div`
    width: ${props => props.fill}%;
    background-color: #00BED6;
    height: 8px;
    transition: all ease 1.5s 0s;
`;

export default ProgressBar;