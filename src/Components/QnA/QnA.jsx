import React, { useRef, useState } from 'react';
import './QnA.scss';

function QnA() {
    const [arrow,setArrow] = useState({
        Q1Arrow : 0,
        Q1Arrowstatus : false,
        Q2Arrow : 0,
        Q2Arrowstatus : false,
        Q3Arrow : 0,
        Q3Arrowstatus : false,
        Q4Arrow : 0,
        Q4Arrowstatus : false
    });
    const {Q1Arrow,Q1Arrowstatus,Q2Arrow,Q2Arrowstatus,Q3Arrow,Q3Arrowstatus,Q4Arrow,Q4Arrowstatus} = arrow;
    const QnAArr = [
        {
            name : 'Q1.',
            Arrow : Q1Arrow,
            id:'Q1Arrow',
            status : Q1Arrowstatus,
            question : ' 엔트리 개발을 하게 된 계기는 무엇인가요?',
            answer : {
                name:'A1.',
                answers : [
                    {
                        name:'임용성',
                        comments : [
                            {
                                line : '이 학교를 준비하던 시절 사용했던 엔트리 사이트를 직접 만들어 보고 싶었습니다.'
                            },
                            {
                                line:'그리고 작게나마 제 실력을 스스로 평가해 보고 싶었습니다.'
                            }
                        ]
                    },
                    {
                        name:'정우영',
                        comments :[{
                            line : '보장된 사용자들이 있는 서비스를 개발한다는 점이 끌렸어요.'
                        },
                        {
                            line : '사용자가 있는 서비스를 개발하고 유지 보수하는 경험이 고등학생의 신분으로'
                        },
                        {
                            line : '흔히 할 수 있는 경험은 아니라고 생각해서 엔트리 개발팀에 합류하게 되었습니다.'
                        }
                    ]
                    },
                    {
                        name : '김대웅',
                        comments : [
                            {
                                line : '학교에서 엔트리 정도의 프로젝트를 경험하기 쉽지 않으며,'
                            },
                            {
                                line : '엔트리 프로젝트를 하면서 협업을 배울 수 있고,'
                            },
                            {
                                line : '실제 외부에서 서비스되는 웹 사이트를 개발할 수 있기 때문입니다.'
                            }
                        ]  
                    }
                ]
            }
        },
        {
            name : 'Q2.',
            Arrow : Q2Arrow,
            id:'Q2Arrow',
            status : Q2Arrowstatus,
            question : ' 내가 만들었지만 이건 진짜 크~~ 감탄사 나오는 기능이 있나요?',
            answer : {
                name:'A2.',
                answers : [
                    {
                        name:'오준상',
                        comments:[
                            {
                                line : '가장 만들기 힘들었고, 가장 오래 걸렸던 작성이 멈춘 지 3초가 지나면'
                            },
                            {
                                line:'자동으로 저장되는 기능이 가장 어려웠던 것 같습니다.'
                            }
                        ]
                    },
                    {
                        name:'이우찬',
                        comments:[
                            {
                                line:'감탄까진 아니고 회원가입과 비밀번호 재설정에서 쓰이는'
                            },
                            {
                                line:'이메일 인증 유효기간을 구현하기 위해 타이머 훅을 만들었는데'
                            },
                            {
                                line:'재사용하기에도 간편하게 잘 짠 것 같아서 나름 뿌듯합니다.'
                            }
                        ]   
                    },
                ]
            }
        },
        {
            name : 'Q3.',
            Arrow : Q3Arrow,
            id:'Q3Arrow',
            status : Q3Arrowstatus,
            question : ' 분야를 백엔드/프론트엔드로 결정하게 된 계기가 있나요?',
            answer : {
                name:'A3.',
                answers : [
                    {
                        name:'이우찬',
                        comments:[
                            {
                                line:'웹 개발 분야를 처음 알게 되었을 때 뒤에서 동작하는 것보다 실제 눈으로 볼 수'
                            },
                            {
                                line:'있는 것을 개발하는 게 더 재밌을 것 같단 생각이 들었습니다. 그 후 실제 개발에서'
                            },
                            {
                                line:'흥미를 느꼈고 이를 계기로 쭉 프론트엔드를 공부하는 것 같습니다.'
                            }
                        ] 
                    },
                    {
                        name:'정우영',
                        comments:[
                            {
                                line:'개발을 하게 된 이유가 내가 사용하던 것들을 직접 만들어보자는'
                            },
                            {
                                line:'목표를 가지고 개발을 시작하게 되어서 웹 분야를 하게 되었습니다.'
                            }
                        ]  
                    },
                    {
                        name : '김대웅',
                        comments:[
                            {
                                line : '처음엔 아무것도 모르고 결정했는데, 백엔드 공부를 하다 보니 웹이 어떻게'
                            },
                            {
                                line : '돌아가는지 알게 되고, 서버의 데이터를 내가 관리하고 제공하는 것에'
                            },
                            {
                                line : ' 흥미를 가지게 되었습니다.'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name : 'Q4.',
            Arrow : Q4Arrow,
            id:'Q4Arrow',
            status : Q4Arrowstatus,
            question : ' 개발을 하면서 힘든 점이 있다면?',
            answer : {
                name:'A4.',
                answers : [
                    {
                        name:'정우영',
                        comments:[
                            {
                                line:'실제 사용자를 상대로 입학 전형이라는 민감한 서비스를 운영하다 보니 언제'
                            },
                            {
                                line:'터질지 모르는 버그와 많은 요구 사항을 바탕으로 끊임없는 변경이 필요하고'
                            },
                            {
                                line:'필요한 기능이 있다면 직접 쌓아가야 하는 부분들이 힘들었습니다.'
                            }
                        ] 
                    },
                    {
                        name:'김대웅',
                        comments:[
                            {
                                line:'내가 지금까지 몰랐던 새로운 기술을 적용해야 할 때가 제일 힘든 것 같습니다.'
                            },
                            {
                                line:'하지만 적용이 잘 되면 신기하기도 하고, 재미도 있어서 빨리 적용만 잘 시키면'
                            },
                            {
                                line :'극복할 수 있습니다.'
                            }
                        ]   
                    },
                    {
                        name : '임용성',
                        comments:[
                            {
                                line:'고쳐도 고쳐도 자꾸 발생하는 오류가 많아 골치 아픈 경험이 많았습니다.'
                            }
                        ] 
                    }
                ]
            }
        }
    ]
    const onClickChangeArrow = (e) => {
        const change = e.target.id;
        console.log(e.target.value)
        if(e.target.value === 'true') { 
            console.log("asdasdasd")
            const nextArrow = {
                ...arrow,
                [change+'status']: false,
                 [change] : 0
            }
            setArrow(nextArrow);
        }
        else if(e.target.value === 'false'){
            const nextArrow = {
                ...arrow,
                [change+'status']: true,
                [change] : 180
            }
            setArrow(nextArrow);
        }
    }
  return (
    <div className="QnAPage" id="MemberQnAPage">
        <div className="MEMBERQnA">MEMBER Q&A</div>
        {QnAArr.map((QnA) =>
        <div>
            <div className="questionBox">
                <p>
                    <b>{QnA.name}</b>
                    {QnA.question}
                </p>
                {/* {console.log(QnA.id+':'+ QnA.Arrow)} */}
                <button className="QnAArrow" style={{transform: `rotate(${QnA.Arrow}deg)`}} id={QnA.id} onClick={onClickChangeArrow} value={QnA.status}>▼</button>
                {/* {console.log(QnA.name + ':'+   QnA.status)} */}
            </div>
            <div className={QnA.status ? "answerBox" : 'none'}>
                <div className="QnAAnswerName">{QnA.answer.name}</div>
                {QnA.answer.answers.map((Answer) =>
                    <div className="eachAnswer">
                        <div className="answerFont">{Answer.name}</div>
                        <p>{Answer.comments.map((line)=>
                                <div className="comentLine">{line.line}</div>
                        )}</p>
                    </div>
                )}
            </div>
        </div>
        )}
    </div>
  );
}

export default QnA;