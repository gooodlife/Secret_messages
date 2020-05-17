import React from 'react';
import { Redirect } from 'react-router-dom'

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

 
  function Profile (props)  { 
  let state = {comment:""};

  let user = JSON.parse(localStorage.getItem("user"));

  if (!localStorage.comments){
    localStorage.setItem ("comments", JSON.stringify([]));
  }

  let onSubmit = e => {
    e.preventDefault();

    postData("https://floating-shelf-00762.herokuapp.com/comment", state
  ).then((data) => {
    let comments = JSON.parse(localStorage.getItem("comments"));
    if (!comments) comments = []
    comments.push(data.comment);

    console.log('data');
    localStorage.setItem ("comments", JSON.stringify(comments));
    // let comment = JSON.parse(localStorage.setItem("comments"))
    localStorage.setItem('site',JSON.stringify('data'));
  
    // document.getElementById("resp").innerText = (data.comment);
    document.getElementById("comment").value = ('');
   
  });

}
 

let handleChange= e => {
  state= {
    [e.target.name]:e.target.value
  }
}

  if (!user) {
    return (
      <Redirect to="/SignUp" />
    )
  }

    return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        <div className="profile_modal container-fluid ">

        <h1>Hello {user.anonymusname}!</h1>

        <form onSubmit={onSubmit}>
              <h3 id="portfolio">Leave your annonymus messages or secrets down below!</h3>
              <input className="figure"
              name="comment"
              id="comment"
              // value={state.comment}
              placeholder="drop your secret here"
              onChange={handleChange}
              />

              <button type="submiit" className="btn-btn  bg-dark"
      onClick= {(e)=>onSubmit(e)}>submit</button> 
      
      </form>
      <div className="container bg-dark"  id="resp">
        <ul>
          {
        JSON.parse(localStorage.getItem("comments")).map(
          comment => {
            console.log(comment)
            return <li className="comment">{comment}<button type ="reset" className="btn-btn bg-secondary">Delete</button></li>
          }
        )
        }
        </ul>
      </div>
          </div>
    );

  
  }



export default Profile;
