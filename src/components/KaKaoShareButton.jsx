import styled from "styled-components";
import {MBTI_NUMBER, SHARE_FAIRY_TITLE} from "../common/constant";

const { Kakao } = window;

function KaKaoShareButton({ _title, _sub, _imageUrl, _finalType }) {

    function onClickKaKaoShare() {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content:{
                title: SHARE_FAIRY_TITLE[_imageUrl].TITLE,
                description:"나는 어떤 청소요정일까?",
                imageUrl: `https://cleaning-fairy.vercel.app/images/fairies/${_imageUrl}@3x.png`,
                link:{
                    webUrl:"https://cleaning-fairy.vercel.app/",
                    mobileWebUrl: "https://cleaning-fairy.vercel.app/",
                },
            },
            buttons: [
                {
                    title: '자세히 보기',
                    link: {
                        webUrl: `https://cleaning-fairy.vercel.app/result/${MBTI_NUMBER[_imageUrl].KEY}`,
                        mobileWebUrl: `https://cleaning-fairy.vercel.app/result/${MBTI_NUMBER[_imageUrl].KEY}`,
                    }
                },
                {
                    title: '테스트 시작하기',
                    link: {
                        webUrl:"https://cleaning-fairy.vercel.app/",
                        mobileWebUrl: "https://cleaning-fairy.vercel.app/",
                    }
                }
            ]
        })
    }

    return(
        <>
            <ShareButton id={"button_share"} src={"/images/share_btn@3x.png"} onClick={onClickKaKaoShare} />
        </>
    )
}
const ShareButton = styled.img`
    width: 150px;
    cursor: pointer;
`;

export default KaKaoShareButton;