import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";


function UpdatedMeme() {
    const [copied, setCopied] = useState(false);

    const location = useLocation();
    const navigate = useNavigate(); /**We use this to navigate to the memes component */
    const clipboard = useClipboard();

    const url = new URLSearchParams(location.search).get('url');

    const copyLink = () => {
        clipboard.copy(url);
        setCopied(true);
    }

    return (
        <>
        

            <h2 className="text-2xl font-semibold tracking-wider text-center text-orange-800 m-2 p-4">Your Memes</h2>
            <div className="flex space-x-2 justify-center mt-6">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={() => navigate('/memes')}
                    className="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    Create More{" "}
                </button>
            </div>


            {url && <img src={url} alt="your meme" />}

            {/**Button to copy link */}
            <div className="flex space-x-2 justify-center my-6">
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    onClick={copyLink}
                    className="inline-block px-6 py-2.5 bg-orange-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-900 hover:shadow-lg focus:bg-stone-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-900 active:shadow-lg transition duration-150 ease-in-out">
                    {copied ? 'Link Copied!' : 'Copy Link'}
                </button>
            </div>
        </>
    );
}

export default UpdatedMeme;