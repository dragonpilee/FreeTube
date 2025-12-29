import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const youtubeApi = createApi({
  reducerPath: "youtubeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers) => {
      // The API key is now handled by the backend proxy.
      // We can add other headers here if needed (e.g. Content-Type)
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // for feed
    getFeed: builder.query({
      query: () => ({
        url: "/search?q=music&part=snippet%2Cid&maxResults=50",
      }),
    }),

    // for explore
    getExplore: builder.query({
      query: () => ({
        url: `/search?relatedToVideoId=lY2yjAdbvdQ&part=id%2Csnippet&type=video&maxResults=50`,
      }),
    }),

    // for explore items
    getSearch: builder.query({
      query: (q) => ({
        url: `/search?q=${q}&part=snippet%2Cid&maxResults=50`, // this should take only one argument
      }),
    }),

    // for channel details
    getChannelDetails: builder.query({
      query: (id) => ({
        url: `channels?part=snippet%2Cstatistics&id=${id}`, // this should take only one argument
      }),
    }),

    // for channel videos to add on channel detail
    getChannelVideos: builder.query({
      query: (id) => ({
        url: `search?channelId=${id}&part=snippet%2Cid&maxResults=50`, // this should take only one argument
      }),
    }),

    // for video details
    getVideoDetails: builder.query({
      query: (id) => ({
        url: `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, // this should take only one argument
      }),
    }),

    getRelatedVideos: builder.query({
      query: (id) => ({
        url: `/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`,
      }),
    }),
  }),
});

export const {
  useGetFeedQuery,
  useGetSearchQuery,
  useGetExploreQuery,
  useGetVideoDetailsQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
  useGetRelatedVideosQuery
} = youtubeApi;
