
// export interface Root {
//   kind: string;
//   etag: string;
//   nextPageToken: string;
//   pageInfo: PageInfo;
//   items: CommentData[];
// }

// export interface PageInfo {
//   totalResults: number;
//   resultsPerPage: number;
// }

// export interface CommentData {
//   kind: string;
//   etag: string;
//   id: string;
//   snippet: Snippet;
// }

// export interface Snippet {
//   channelId: string;
//   videoId: string;
//   topLevelComment: TopLevelComment;
//   canReply: boolean;
//   totalReplyCount: number;
//   isPublic: boolean;
// }

// export interface TopLevelComment {
//   kind: string;
//   etag: string;
//   id: string;
//   snippet: Snippet2;
// }

// export interface Snippet2 {
//   channelId: string;
//   videoId: string;
//   textDisplay: string;
//   textOriginal: string;
//   authorDisplayName: string;
//   authorProfileImageUrl: string;
//   authorChannelUrl: string;
//   authorChannelId: AuthorChannelId;
//   canRate: boolean;
//   viewerRating: string;
//   likeCount: number;
//   publishedAt: string;
//   updatedAt: string;
// }

// export interface AuthorChannelId {
//   value: string;
// }

export interface Root {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: CommentItem[];
}

export interface CommentItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ItemSnippet;
}

export interface ItemSnippet {
  channelId: string;
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface TopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: TopLevelCommentSnippet;
}

export interface TopLevelCommentSnippet {
  channelId: string;
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelID;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: Date;
  updatedAt: Date;
}

export interface AuthorChannelID {
  value: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}