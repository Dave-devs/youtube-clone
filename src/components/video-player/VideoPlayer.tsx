import "./VideoPlayer.css";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { valueConverter } from "../../utils/converter";
import moment from "moment";
import { truncateText } from "../../utils/truncate-text";
import { VideoData } from "../../@types/video-data";
import { ChannelData } from "../../@types/channel";
import { CommentItem } from "../../@types/commet";


type VideoPlayerProps = {
    videoId: string;
}


const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

    // Video Fetch Request
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`
    const { data, isLoading, error } = useQuery({
        queryKey: ["videos-category", videoId],
        queryFn: () => axios.get(videoUrl).then((res) => res.data.items[0] as VideoData),
    });

    // Channel Fetch Request
    const channelUrl = data ?
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data?.snippet?.channelId}&key=${apiKey}`
        : null;
    const { data: channelData, isLoading: isLoadingChannelData, error: errorChannelData } = useQuery({
        queryKey: ["channel-info", data],
        queryFn: () => axios.get(channelUrl!).then((res) => res.data.items[0] as ChannelData),
        enabled: !!data,
    });

    // Comment Fetch Request
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}`
    const { data: commentData, isLoading: isLoadingCommentData, error: errorCommentData } = useQuery({
        queryKey: ["comments", videoId, data, channelData],
        queryFn: () => axios.get(commentUrl!).then((res) => res.data),
    });


    if (isLoading || isLoadingChannelData || isLoadingCommentData) {
        return <p>Loading...</p>;
    }

    if (error || errorChannelData || errorCommentData) {
        return <p>Error fetching data</p>;
    }

    if (!data || !channelData || !commentData) {
        return <p>No data available</p>;
    }

    return (
        <div className="play-video">
            {/* Video & Video Info */}
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{data?.snippet.title}</h3>
            <div className="play-video-info">
                <p>{valueConverter(data.statistics.viewCount)} Views &bull; {moment(data.snippet.publishedAt).fromNow()}</p>
                <div>
                    <span> <BiSolidLike className="icon" /> {valueConverter(data.statistics.likeCount)}</span>
                    <span> <BiSolidDislike className="icon" /> 10</span>
                    <span> <IoMdShareAlt className="icon" /> share</span>
                    <span> <IoBookmark className="icon" /> save</span>
                </div>
            </div>
            <hr />
            {/* Creator's info */}
            <div className="publisher">
                <img src={channelData.snippet.thumbnails.default.url} alt="" />
                <div>
                    <p>{data.snippet.channelTitle}</p>
                    <span>{valueConverter(channelData.statistics.subscriberCount)} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            {/* Comments */}
            <div className="vid-description">
                <p>{truncateText(data.snippet.description, 250)}</p>
                <hr />
                <h4>{valueConverter(data.statistics.commentCount)} Comments</h4>
                {commentData?.items?.map((item: CommentItem, index: number) => {
                    // Access the correct path for the snippet
                    const itemSnippet = item?.snippet;
                    const topLevelComment = itemSnippet?.topLevelComment;
                    const topLevelSnippet = topLevelComment?.snippet;

                    if (!topLevelSnippet) {
                        return <p key={index}>Invalid Comment Data</p>;
                    }
                    // Render the comment if data exists
                    return (
                        <div key={index} className="comment">
                            <img
                                src={topLevelSnippet?.authorProfileImageUrl || ""}
                                alt={topLevelSnippet?.authorDisplayName || "Author"}
                            />
                            <div>
                                <h3>
                                    {topLevelSnippet?.authorDisplayName || "Anonymous"}
                                    <span>{moment(topLevelSnippet?.publishedAt).fromNow()}</span>
                                </h3>
                                <p>{truncateText(topLevelSnippet?.textDisplay, 100)}</p>
                                <div className="comment-action">
                                    <BiSolidLike className="icon" />
                                    <span>{valueConverter(topLevelSnippet?.likeCount || "0")}</span>
                                    <BiSolidDislike className="icon" />
                                    <span>10</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default VideoPlayer;
