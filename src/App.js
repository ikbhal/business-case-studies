import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';


function App() {

  // video: {id: '1', url: '...', title: '...'}
  var  [videoList, setVideoList] = useState([]);
  var [title, setTitle] = useState('');
  var [url, setUrl] = useState('');
  var [playHere, setPlayHere] = useState(false);
  var lastVideoId = useRef(0);

  const getAndIncrmentVideoId = () =>{

    var videoId = lastVideoId.current +1;
    lastVideoId.current = lastVideoId.current +1;
    return videoId
  }
  const addVideo = () =>{
    console.log('inside addvideo');
    var v = {id: getAndIncrmentVideoId(),
      url,
      title
    };
    console.log("v:", v);
    videoList.push(v);
    setVideoList([...videoList]);
  }

  const deleteVideo = (vi) =>{
    console.log('inside deletevideo vi:', vi);
    var newVideoList = videoList.filter((v, i) => i !=vi);
    setVideoList([...newVideoList]);
  }

  return (
    <div className="App">
      <h1>Business Case Studies</h1>

      <div className="video-add-form">
        Title: <input type="text" id="title" name="title" 
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <br/>
        URL: 
        <input type="text" id="url" name="url" 
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <br/>

        <button onClick={addVideo}>Add</button> <br/>
      </div>

      <div className="video-list">
        {
          videoList.map((v,i) =>
          
            <div className="video">
                {/* {v.title}<br/> */}
                <a href={v.url}>{v.title}</a>

                <span className="play-here-button" onClick={e=>setPlayHere(f=>!f)}>Play Here</span>
                <span className="delete-button" onClick={e=>deleteVideo(i)}>x</span>
                <br/>
                
                {playHere && <div class="play-here">
                    <iframe width="560" height="315" 
                          src={v.url} 
                          title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                      </iframe>
                  </div>
                }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
