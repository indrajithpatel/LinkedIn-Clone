import React , {useRef, useState,useEffect} from "react";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";

import "./CreatePost.css";
import { orange, green, lightBlue, pink } from "@material-ui/core/colors";
import InputOptions from "./InputOptions";
import Feed from "../Feed/Feed";
import {db} from "../../../firebase/firebase.js"
import firebase from "firebase"


function CreatePost() {
  const [post, setPost] = useState([]);
  const inputRef = useRef("");

  useEffect(() =>{
    db.collection("posts").orderBy("timestamp",'desc').onSnapshot((snapshot) =>{
      const values = snapshot.docs.map((doc) => ({
        id : doc.id,
        data : doc.data()
      }));
      setPost(values)
    })
  },[])

  const handlePost = (event) =>{
    if(event.key === "Enter") {
      const value = event.target.value;
     console.log(db)
      db.collection("posts").add({
        name : "Indrajith Patel R",
        description : "Front end Lead at Informatica",
        message : value,
        photoUrl : "https://media-exp1.licdn.com/dms/image/C4E03AQFDUILKoXRgXw/profile-displayphoto-shrink_100_100/0/1542254366268?e=1626307200&v=beta&t=kA8iXsfIrnJTObOWWdtq6z4-psLwlQBVEG73rraPvVc",
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });    
      //Rest the value in the search Field
      inputRef.current.value = ""

    }
  }
  return (
    <div className="mainContent">
      <div className="post">
        <div className="post__createpost">
          <img
            alt=""
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFDUILKoXRgXw/profile-displayphoto-shrink_100_100/0/1542254366268?e=1626307200&v=beta&t=kA8iXsfIrnJTObOWWdtq6z4-psLwlQBVEG73rraPvVc"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="    Start a post"
            onKeyPress={handlePost}
          ></input>
        </div>
        <div className="post__createpostlist">
          <InputOptions
            Icon={PhotoIcon}
            title="Photo"
            color={lightBlue}
          ></InputOptions>
          <InputOptions
            Icon={YouTubeIcon}
            title="Video"
            color={green}
          ></InputOptions>
          <InputOptions
            Icon={EventIcon}
            title="Event"
            color={orange}
          ></InputOptions>
          <InputOptions
            Icon={AssignmentIcon}
            title="Write article"
            color={pink}
          ></InputOptions>
        </div>
      </div>
      {post.map(({id , data : {name, description, message, photoUrl }}) => {
        console.log(photoUrl)
        return (
          <Feed
            key = {id}
            name = {name}
            description = {description}
            message = {message}
            url = {photoUrl}
          ></Feed>
        );
      })}
    </div>
  );
}

export default CreatePost;
