import VideoPlayer from '../../components/video-player/VideoPlayer'
import './Video.css'
import Recommended from '../../components/recommended/Recommended';
import { useParams } from 'react-router-dom';

function Video() {
  const { categoryId } = useParams();
  return (
    <div className="play-container">
      <VideoPlayer />
      <Recommended categoryId={categoryId!} />
    </div>
  )
}

export default Video