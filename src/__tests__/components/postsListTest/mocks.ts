import { NewsData } from "../../../components/PostCard/types";
import { mockStore } from "../../helpers/helpers";

export const postsStore = mockStore({
    auth: {
      authUser: null
    },
    user: {
      currentUser: null
    },
    newsModal: {
      isNewsVisible: false
    }
})

  export const posts: NewsData[] = [
    {
      author: {
        avatarPath: '/images/1698064906964-346904561.jpeg',
        createdAt: '2023-10-23T12:35:35.770Z',
        email: 'tk.olya@mail.ru',
        firstName: 'Olya',
        id: 2399,
        lastName: 'T.',
        updatedAt: '2023-10-23T12:41:46.965Z',
      },
      authorId: 2399,
      commentsCount: 1,
      coverPath: '/images/1698064716869-13535312.jpeg',
      createdAt: '2023-10-23T12:38:36.869Z',
      id: 930,
      rating: 4.5,
      tags: [
        {
          createdAt: '2023-10-23T12:38:36.886Z',
          id: 231,
          updatedAt: '2023-10-23T12:38:36.886Z',
          value: '#animals',
        },
      ],
      text: 'text text text text text',
      title: 'Animals',
      updatedAt: '2023-10-23T12:38:36.869Z',
    },
];
