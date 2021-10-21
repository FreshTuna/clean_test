import styled from "styled-components";
import {MBTI_NUMBER} from "../common/constant";

const { Kakao } = window;

function KaKaoShareButton({ _title, _sub, _imageUrl, _finalType }) {
    console.log(`https://clean-test.vercel.app/images/fairy/${_imageUrl}@3x.png`);
    function onClickKaKaoShare() {
        Kakao.Link.sendDefault({
            objectType: "feed",
            content:{
                title:"나의 청소요정은?",
                description:"",
                imageUrl: `https://clean-test.vercel.app/images/fairies/${_imageUrl}@3x.png`,
                link:{
                    webUrl:"https://clean-test.vercel.app/",
                    mobileWebUrl: "https://clean-test.vercel.app/",
                },
            },
            buttons: [
                {
                    title: '자세히 보기',
                    link: {
                        webUrl: `https://clean-test.vercel.app/result/${MBTI_NUMBER[_imageUrl].KEY}`,
                        mobileWebUrl: `https://clean-test.vercel.app/result/${MBTI_NUMBER[_imageUrl].KEY}`,
                    }
                },
                {
                    title: '테스트 시작하기',
                    link: {
                        webUrl:"https://clean-test.vercel.app/",
                        mobileWebUrl: "https://clean-test.vercel.app/",
                    }
                }
            ]
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