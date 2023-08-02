import React, { useState } from 'react';
import { TableArea, NoData } from '../styles/MyStyleCSS';
import SearchBar from '../components/SearchBar';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import CommonButton from '../components/CommonButton';
import { Layout } from '../styles/CommonStyle';
import Table from '../components/Table';

const Grade = () => {
  const arr = [
    {
      aa: '1',
      bb: '1',
      cc: '생명윤리',
      dd: '이그린',
      ee: 3,
      ff: 96,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '2',
      cc: '기술과학윤리',
      dd: '이그린',
      ee: 2,
      ff: 94,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '3',
      cc: '생명윤리',
      dd: '이그린',
      ee: 3,
      ff: 97,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '4',
      cc: '생활속의물리',
      dd: '이그린',
      ee: 3,
      ff: 100,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '2',
      cc: '데이터베이스',
      dd: '이그린',
      ee: 3,
      ff: 96,
      gg: 'A+',
    },
  ];
  const array = [
    `(o^^)o`,
    `(^-^*)`,
    `(·_·)`,
    `(^_^)b`,
    `(≥o≤)`,
    `(;-;)`,
    `(>_<)`,
    `(='X'=)`,
    `(·.·)`,
    `(^Д^)/`,
    `(o_o)/`,
    `(o^^)o`,
    `(˚Δ˚)b'`,
  ];
  let randomValue = array[Math.floor(Math.random() * array.length)];

  // 드롭다운
  const data = [
    { id: 1, title: '1학기' },
    { id: 2, title: '2학기' },
  ];
  const gradeData = [
    { id: 1, title: '1학년' },
    { id: 2, title: '2학년' },
    { id: 3, title: '3학년' },
    { id: 4, title: '4학년' },
  ];
  const [semester, setSemester] = useState();
  const [grade, setGrade] = useState();
  const [studentId, setStudentId] = useState('');

  // table
  const tableHeader = [
    { title: '학기', width: 1 },
    { title: '학년', width: 1 },
    { title: '강의명', width: 3 },
    { title: '담당교수', width: 2 },
    { title: '학점', width: 1 },
    { title: '성적', width: 1 },
    { title: '등급', width: 1 },
  ];
  const tableData = [
    {
      aa: '1',
      bb: '1',
      cc: '생명윤리',
      dd: '이그린',
      ee: 3,
      ff: 96,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '2',
      cc: '기술과학윤리',
      dd: '이그린',
      ee: 2,
      ff: 94,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '3',
      cc: '생명윤리',
      dd: '이그린',
      ee: 3,
      ff: 97,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '4',
      cc: '생활속의물리',
      dd: '이그린',
      ee: 3,
      ff: 100,
      gg: 'A+',
    },
    {
      aa: '1',
      bb: '2',
      cc: '데이터베이스',
      dd: '이그린',
      ee: 3,
      ff: 96,
      gg: 'A+',
    },
  ];

  return (
    <div>
      <Layout>
        <SearchBar>
          <Dropdown
            length="short"
            placeholder="학기"
            data={data}
            value={semester}
            setValue={setSemester}
            reset={true}
          />
          <Dropdown
            length="short"
            placeholder="학년"
            data={gradeData}
            value={grade}
            setValue={setGrade}
            reset={true}
          />
          <Input
            length="middle"
            type="number"
            placeholder="학번"
            value={studentId}
            setValue={setStudentId}
          />
        </SearchBar>
      </Layout>
      <CommonButton btnType="page" value="학생상세정보" onClick={() => console.log('test')} />
      {arr.length === 0 ? (
        <NoData>
          <div>{randomValue}</div>
          <p>검색해주세요</p>
        </NoData>
      ) : (
        <>
          <Table header={tableHeader} data={tableData} hasPage={true} maxPage={5}>
            {tableData.map((item, idx) => {
              return (
                <div key={idx}>
                  <div>{item.aa}</div>
                  <div>{item.bb}</div>
                  <div>{item.cc}</div>
                  <div>{item.dd}</div>
                  <div>{item.ee}</div>
                  <div>{item.ff}</div>
                  <div>{item.gg}</div>
                </div>
              );
            })}
          </Table>
        </>
      )}
    </div>
  );
};

export default Grade;
/*
<TableArea>
            <table style={{ textAlign: 'center' }}>
              <thead> 
             <tr>
             <th style={{ background: 'pink' }}>학기</th>
             <th style={{ background: 'pink' }}>학년</th>
             <th>강의명zzzzzzzzzzzzzzzzzzzz</th>
             <th style={{ background: 'yellow' }}>담당교수</th>
             <th style={{ background: 'pink' }}>학점</th>
             <th style={{ background: 'pink' }}>성적</th>
             <th style={{ background: 'pink' }}>최종성적(등급)</th>
           </tr>
         </thead>
         <tbody>
           {arr.map((item, idx) => (
             <tr key={idx}>
               <td>{item.aa}</td>
               <td>{item.bb}</td>
               <td>{item.cc}</td>
               <td>{item.dd}</td>
               <td>{item.ee}</td>
               <td>{item.ff}</td>
               <td>{item.gg}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </TableArea>
     <div className="pagination">
       <span>1 2 3 4 5 6 7 8 9 </span>
     </div>
*/
