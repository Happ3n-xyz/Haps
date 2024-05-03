export interface Happ3nEvent {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  date: string;
  location: string;
  image: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export enum Categories {
  LIVE = "Live Streaming",
  NFTDROP = "NFT Drop",
  PODCAST = "Podcast",
  SPACES = "Spaces",
  WEBINAR = "Webinar",
  SHOW = "Show",
  WORKSHOP = "Workshop",
  MEETUP = "Meetup",
}