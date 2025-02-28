import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {useHistory} from 'react-router-dom'
import {FirebaseContext,AuthContext} from '../../store/Context'
const Create = () => {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext)
  const [name,setName] = useState('');
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('');
  const[image,setImage] = useState(null);
  const date = new Date()
  const handleSubmit = () => {
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
        ref.getDownloadURL().then((url) => {
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
          history.push('/')
        })
      })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="input" type="number" id="fname" name="Price" />
            <br />
          
          <br />
          <img src={image ? URL.createObjectURL(image):''} alt="Posts" width="200px" height="200px" ></img>
          
            <br />
            <input onChange={(e) =>{
              setImage(e.target.files[0])
            } } type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;