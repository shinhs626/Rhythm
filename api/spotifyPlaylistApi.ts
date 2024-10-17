import { getAccessToken } from "@/axios/getAccessToken";

import { Playlist } from "@/schema/type";
import { baseURL } from "./spotifyApi";

/**
 * 플레이 리스트 받아오기(playlistId 필요)
 * @param playlistId
 */
const getPlaylists = async (
  playlistId: string
): Promise<Playlist | undefined> => {
  try {
    const accessToken = await getAccessToken(); // 액세스 토큰을 비동기로 가져옴
    if (!accessToken) {
      throw new Error("Access token is required");
    }

    const response = await baseURL.spotifyPlaylistApi.get<Playlist>(
      `/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // 응답 데이터 출력
    return response.data;
  } catch (error) {
    console.error("Error fetching album information:", error);
  }
};

/**
 * 카테고리별 플레이 리스트 가져오기(category_id 필요)
 * @param category_id
 */
const getCategoryPlaylist = async (category_id: string) => {
  try {
    const accessToken = await getAccessToken(); // 액세스 토큰을 비동기로 가져옴
    if (!accessToken) {
      throw new Error("Access token is required");
    }

    const response = await baseURL.spotifyUserAPI.get(
      `browse/categories/${category_id}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // 응답 데이터 출력
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching album information:", error);
  }
};

export const PlaylistAPI = {
  getPlaylists,
  getCategoryPlaylist,
};
