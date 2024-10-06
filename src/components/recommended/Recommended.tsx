import { useQuery } from "@tanstack/react-query";
import "./Recommended.css";
import axios from "axios";
import { Item } from "../../@types/recommended";
import { truncateText } from "../../utils/truncate-text";
import { valueConverter } from '../../utils/converter';
import { Link } from "react-router-dom";

type RecommendedProps = {
  categoryId: string;
};

const Recommended = ({ categoryId }: RecommendedProps) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["recommended", categoryId],
    queryFn: () => axios.get(url).then((res) => res.data),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  if (!data || !data.items) {
    return <p>No data available</p>;
  }

  return (
    <div className="recommended">
      {data.items.map((item: Item, index: number) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <img src={item.snippet.thumbnails.high.url} alt="" />
          <div className="vid-info">
            <h4>{truncateText(item.snippet.title, 100)}</h4>
            <p>{truncateText(item.snippet.channelTitle, 40)}</p>
            <p>{valueConverter(item.statistics.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
