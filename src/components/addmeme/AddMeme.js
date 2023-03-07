import React, { useState } from 'react';
import Header from '../home/Header';
import background from '../../img/meme-background.jpg';

function AddMeme() {
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [id, setId] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('meme added!')
    // create a new form data object
    const formData = new FormData();
    // append the category and image to the form data
    formData.append('category', category);
    formData.append('image', image);

    // make the API call to update the meme
    fetch(`https://api.imgflip.com/get_memes${id}`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //handle the response
      })
      .catch(error => {
        console.error(error);
        // handle the error
      });
  };

  return (
    <><Header />
    <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover bg-center md:bg-cover md:bg-center sm:bg-cover sm:bg-center flex flex-col justify-center items-center font-sans">

      <h2 className="text-2xl font-semibold tracking-wider text-center text-orange-800 m-2 p-4">Add Meme</h2>

      <form id="form-meme" className="card h-100 w-90 " onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label className="mb-3">
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="funny">Funny</option>
            <option value="political">relationship</option>
            <option value="animals">Animals</option>
          </select>
        </label>
        <br />
        <label for="insert image" className="form-label">
          Image:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <button className="btn btn-dark" type="submit">Update Meme</button>
      </form>
    </div></>
  );
}

export default AddMeme;
