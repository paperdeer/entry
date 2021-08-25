import React, { useEffect, useRef } from 'react';
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
            github : 'https://github.com/junu126',
            grade : '3'
        },
        {
            name : '김재훈',
            img : KJH,
            develop : 'BACK - END, DEVOPS',
            github : 'https://github.com/LumpKim',
            grade : '3'
        },
        {
            name : '김해건',
            img : KHG,
            develop : 'UX/UI DESIGNER',
            github : '',
            grade : '3'
        },
        {
            name : '신은주',
            img : SWJ,
            develop : 'BACK - END',
            github : 'https://github.com/Gaegul'
            ,grade : '3'
        },
        {
            name : '장소희',
            img : Female,
            develop : 'FRONT - END',
            github : 'https://github.com/soheejang15',
            grade : '3'
        },
        {
            name : '황신우',
            img : Male,
            develop : 'BACK - END',
            github : 'https://github.com/huewilliams',
            grade : '3'
        },
        {
            name : '김대웅',
            img : Male,
            develop : 'BACK - END',
            github : 'https://github.com/dkssud9556',
            grade : '2'
        },
        {
            name : '오준상',
            img : Male,
            develop : 'FRONT - END',
            github : 'https://github.com/sema0710',
            grade : '2'
        },
        {
            name : '이우찬',
            img : LWC,
            develop : 'FRONT - END',
            github : 'https://github.com/woochanleee',
            grade : '2'
        },
        {
            name : '임용성',
            img : LYS,
            develop : 'BACK - END',
            github : 'https://github.com/LeagueLugas',
            grade : '2'
        },
        {
            name : '정우영',
            img : JWY,
            develop : 'BACK - END',
            github : 'https://github.com/o-ozogie',
            grade : '2'
        },
        {
            name : '김혜준',
            img : Female,
            develop : 'FRONT - END',
            github : 'https://github.com/hyejun0608',
            grade : '1'
        },
        {
            name : '임서영',
            img : Female,
            develop : 'DESIGNER',
            github : '',
            grade : '1'
        },
        {
            name : '전규현',
            img : Male,
            develop : 'FRONT - END',
            github : 'https://github.com/Ghyeon1215',
            grade : '1'
        }
    ]
    window.addEventListener('click',(e) => {
        console.log(e.target)
    })
    console.log(memberArr);
  return (
    <div ref={TeamRef}className="TeamPage">
        <div className="TeamEntry">TEAM ENTRY</div>
        <div className="simpleIntroduce">EntryDSM의 발전과 새로운 이야기를 만드는 사람들 입니다.</div>
        <div className="EntryProfiles">
            {memberArr.map((member) => 
                <div className="eachProfile">
                    <div className="eachMemberContainer">
                        
                        <div className={member.grade === '3' ? "imgDiv grade3" : member.grade === '2' ? "imgDiv grade2" : "imgDiv grade1"}><img src={member.img} alt="profile" /></div>
                        <div className="memberName">{member.name}</div>
                        <div className="memberInfo">
                            <div className="memberType">{member.develop}</div>
                            <div><a href={member.github} target="_blank">Github</a></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default Team;