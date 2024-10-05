export interface Root {
    kind: string;
    etag: string;
    items: ChannelData[];
    pageInfo: PageInfo;
}

export interface ChannelData {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
  topicDetails: TopicDetails;
  status: Status;
  brandingSettings: BrandingSettings;
  auditDetails: AuditDetails;
  contentOwnerDetails: ContentOwnerDetails;
  localizations: Localizations;
}
export interface Snippet {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: Thumbnails
    defaultLanguage: string
    localized: Localized
    country: string
}
export interface Thumbnails {
    default: Default;
}
export interface Default {
    url: string;
    width: number;
    height: number;
}
export interface Localized {
    title: string
    description: string
}
export interface ContentDetails {
    relatedPlaylists: RelatedPlaylists
}
export interface RelatedPlaylists {
    likes: string
    favorites: string
    uploads: string
}
export type ContentRating = object;
export interface Statistics {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
}
export interface TopicDetails {
    topicIds: string[];
    topicCategories: string[];
}
export interface Status {
    privacyStatus: string;
    isLinked: boolean;
    longUploadsStatus: string;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
}
export interface BrandingSettings {
    channel: Channel;
    watch: Watch;
}
export interface Channel {
    title: string;
    description: string;
    keywords: string;
    trackingAnalyticsAccountId: string;
    unsubscribedTrailer: string;
    defaultLanguage: string;
    country: string;
}
export interface Watch {
    textColor: string;
    backgroundColor: string;
    featuredPlaylistId: string;
}
export interface AuditDetails {
    overallGoodStanding: boolean;
    communityGuidelinesGoodStanding: boolean;
    copyrightStrikesGoodStanding: boolean;
    contentIdClaimsGoodStanding: boolean;
}
export interface ContentOwnerDetails {
    contentOwner: string;
    timeLinked: string;
}
export interface Localizations {
    default: Default;
}
export interface Default {
    title: string;
    description: string;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}
