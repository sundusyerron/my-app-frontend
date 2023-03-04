import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from '../../img/meme-background.jpg';
import Header from "../home/Header";
const MEMES_API = "https://api.imgflip.com/get_memes";

function UpdateMemes() {
    const [memes, setMemes] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);
    const [captions, setCaptions] = useState([]);

    const navigate = useNavigate();

    const updateCaption = (e, index) => {
        const text = e.target.value || "";
        setCaptions(
            captions.map((c, i) => {
                if (index === i) { return text; } else { return c; }
            }));
    }

    const generateMeme = () => {
        const currentMeme = memes[memeIndex];
        const formData = new FormData();

        formData.append('username', 'deez_nutz19');
        formData.append('password', 'Sammy#19');
        formData.append('template_id', currentMeme.id);

        captions.forEach((caption, index) => formData.append(`boxes[${index}][text]`, caption));

        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            console.log(data.data.url)
            navigate(`/updated/?url=${data.data.url}`);
        });
    }

    const fetchMemes = () => {
        fetch(MEMES_API).then(res => res.json())
            .then(data => {
                const updatedMemes = data.data.memes;
                setMemes(updatedMemes);
            });
    }

    useEffect(() => {
        fetchMemes();
    }, []);

    useEffect(() => {
        if (memes.length) {
            setCaptions(() => Array(memes[memeIndex].box_count).fill(''));
        }
    }, [memeIndex, memes]);

    return (
    
        
        
        <div id="updatememe" style={{ backgroundImage: `url(${background})`}}  className="h-screen bg-cover bg-center md:bg-cover md:bg-center sm:bg-cover sm:bg-center flex flex-col justify-center items-center font-sans">
           
             <div>
             <Header/>

            
</div>

    <h2 className="text-2xl font-semibold tracking-wider text-center text-orange-800 m-2 p-4">Update Meme</h2>
    <div  className="flex space-x-2 justify-center mt-6">
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => setMemeIndex(Math.floor(Math.random() * 100) + 1)}
            className="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
            skip{" "}
        </button>
    </div>

    {memes.length ? <img src={memes[memeIndex].url} alt="random meme" /> : <></>}

    {/**inputs for the captions */}
    {captions.map((caption, index) => (
        <div className="flex justify-center mt-4" key={index}>
            <div className="mb-3 xl:w-96">
                <input
                    type="text"
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                    id="exampleText0"
                    placeholder="captions"

                    onChange={(e) => updateCaption(e, index)} />
            </div>
        </div>
    ))}

    {/**The Generate Button */}
    <div className="flex space-x-2 justify-center my-6">
        <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={generateMeme}
            className="inline-block px-6 py-2.5 bg-amber-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-500 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out">
            Generate{" "}
        </button>
    </div>
        </div>
    )
}

export default UpdateMemes;