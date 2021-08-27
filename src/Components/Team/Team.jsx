import React, { useEffect, useRef } from 'react';
import './Team.scss';

function Team(props) {
    const {memberArr} = props;
    
    console.log(memberArr);
  return (
    <div id="TeamPage" className="TeamPage">
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