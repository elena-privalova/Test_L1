export const getFormattedAvatarPath = (avatarPath: string | null): string => {
  if (avatarPath != null) {
    return `https://api.news.academy.dunice.net${avatarPath}`;
  }
  return '';
};

