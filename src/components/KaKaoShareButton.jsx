import styled from "styled-components";

const { Kakao } = window;

function KaKaoShareButton({ _title, _sub, _imageUrl, _finalType }) {

    function onClickKaKaoShare() {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content:{
                title:"hi",
                description:"test share",
                imageUrl: `https://clean-test.vercel.app/images/fairy/${_imageUrl}@3x.png`,
                link:{
                    webUrl:"https://clean-test.vercel.app/",
                    mobileWebUrl: "https://clean-test.vercel.app/",
                }
            }
        })
    }

    return(
        <>
            <ShareButton src={"/images/share_btn@3x.png"} onClick={onClickKaKaoShare} />
        </>
    )
}
const ShareButton = styled.img`
    width: 150px;
    cursor: pointer;
`;

export default KaKaoShareButton;