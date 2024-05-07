export interface Happ3nEvent {
  chain: string;
  createdAt: string;
  eventDate: string;
  eventLocation: string;
  eventName: string;
  externalUrlEvent: string;
  id: string;
  ipfsHash: string;
  joined: {
    claimed: boolean;
    createdAt: string;
    hapId: string;
    id: string;
    txHash?: string;
    userId: string;
  };
  message: string;
  nftImage: string;
  tokenId: string;
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