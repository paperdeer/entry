import React, { useRef } from 'react';
import './Team.scss';
import Female from '../../assets/Female.png';
import JWY from '../../assets/JWY.jpg';
import KHG from '../../assets/KHG.jpg';
import KJH from '../../assets/kjh.jpg';
import KJW from '../../assets/kjw.png';
import LYS from '../../assets/lys.jpg';
import Male from '../../assets/Male.png';
import SWJ from '../../assets/swj.jpg';
import LWC from '../../assets/LWC.jpg';
function Team(props) {
    const {refs} = props;
    const TeamRef = useRef(null);
    refs.TeamRef = TeamRef;
    const memberArr = [
        {
            name : '김준우',
            img : KJW,
            develop : 'FRONT - END',
            github : 'https://github.com/junu126'
        },
        {
            name : '김재훈',
            img : KJH,
            develop : 'BACK - END, DEVOPS',
            github : 'https://github.com/LumpKim'
        },
        {
            name : '김해건',
            img : KHG,
            develop : 'UX/UI DESIGNER',
            github : ''
        },
        {
            name : '신은주',
            img : SWJ,
            develop : 'BACK - END',
            github : 'https://github.com/Gaegul'
        },
        {
            name : '장소희',
            img : Female,
            develop : 'FRONT - END',
            github : 'https://github.com/soheejang15'
        },
        {
            name : '황신우',
            img : Male,
            develop : 'BACK - END',
            github : 'https://github.com/huewilliams'
        },
        {
            name : '김대웅',
            img : Male,
            develop : 'BACK - END',
            github : 'https://github.com/dkssud9556'
        },
        {
            name : '오준상',
            img : Male,
            develop : 'FRONT - END',
            github : 'https://github.com/sema0710'
        },
        {
            name : '이우찬',
            img : LWC,
            develop : 'FRONT - END',
            github : 'https://github.com/woochanleee'
        },
        {
            name : '임용성',
            img : LYS,
            develop : 'BACK - END',
            github : 'https://github.com/LeagueLugas'
        },
        {
            name : '정우영',
            img : JWY,
            develop : 'BACK - END',
            github : 'https://github.com/o-ozogie'
        },
        {
            name : '김혜준',
            img : Female,
            develop : 'FRONT - END',
            github : 'https://github.com/hyejun0608'
        },
        {
            name : '임서영',
            img : Female,
            develop : 'DESIGNER',
            github : ''
        },
        {
            name : '전규현',
            img : Male,
            develop : 'FRONT - END',
            github : 'https://github.com/Ghyeon1215'
        }
    ]
    console.log(memberArr);
  return (
    <div ref={TeamRef}className="TeamPage">
        <div className="TeamEntry">TEAM ENTRY</div>
        <div className="simpleIntroduce">EntryDSM의 발전과 새로운 이야기를 만드는 사람들 입니다.</div>
        <div className="EntryProfiles">
            {memberArr.map((member) => 
                <div className="eachProfile">
                    <div className="eachMemberContainer">
                        <div className="imgDiv"><img src={member.img} alt="profile" /></div>
                        <div className="memberName">{member.name}</div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default Team;