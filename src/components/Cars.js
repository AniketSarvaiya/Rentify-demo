import React, { Fragment, useEffect, useState } from 'react'
import CBItem from './CBComponent/CBItem'

function Cars(props) {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
  //     result.json().then((res) => {
  //       setData(res);
  //     })
  //   })
  // }, []);
  // console.log(data);
  return (
    <Fragment>
      <div className='container mt-5' ref={props.carref}>
        <div className='d-flex flex-wrap justify-content-evenly'>
          <CBItem />
          <CBItem url={"https://imgd.aeplcdn.com/1056x594/n/cw/ec/94041/amg-a35-exterior-right-front-three-quarter-5.jpeg?isig=0&q=75&wm=1"} />
          <CBItem />
          <CBItem />
          <CBItem url={"https://media.zigcdn.com/media/model/2022/Apr/honda-sp-125-abc-right-side-view_930x620.jpg"} />
          <CBItem />
          <CBItem />
          <CBItem />
          <CBItem />
          <CBItem />
          <CBItem />
        </div>
        {/* <table border={1} bgcolor={"pink"}>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Phone</td>
              <td>UserName</td>
            </tr>
          </thead>
          {
            data.map((item, i) =>
              <tbody>
                <tr key={i  }>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.username}</td>
                </tr>
              </tbody>
            )
          }
        </table> */}

      </div>
    </Fragment>
  )
}

export default Cars