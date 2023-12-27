import { VITE_APP_API_URL } from "../constants";

export const getFormattedAvatarPath = (avatarPath: string | null): string => {
  if (avatarPath != null) {
    return `${VITE_APP_API_URL}${avatarPath}`;
  }
  return '';
};

