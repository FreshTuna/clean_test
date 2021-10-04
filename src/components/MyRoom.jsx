import styled from "styled-components";


function MyRoom(props) {

    return (
        <Wrapper>
            <MyRoomImage src={`/images/my_room_image${props.id}@3x.png`} />
            {/*<MyRoomStatistic src={`/images/my_room_stat_${props.id}@3x.png`} />*/}
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

const MyRoomTitle = styled.img`
    margin-top: 54px;
    width: 148px;
    margin-bottom: 5px;
`;

const MyRoomImage = styled.img`
    width: 100%;
`;

const MyRoomStatistic = styled.img`
    width: 286px;
    margin-top: 8px;
    margin-bottom: 15px;
`;


export default MyRoom;