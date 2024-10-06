import { Link } from "react-router-dom";
import "./Feed.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Item } from "../../@types/videos";
import { valueConverter } from "../../utils/converter";
import moment from "moment";
import { truncateText } from "../../utils/truncate-text";

type FeedProps = {
  category: number;
};

const Feed = ({ category }: FeedProps) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;

  const { data, isLoading, error } = useQuery({
    queryKey: ["videos", category],
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
    <div className="feed">
      {data.items.map((item: Item, index: number) => {
        return (
          <Link key={index}
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{truncateText(item.snippet.title, 50)}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
