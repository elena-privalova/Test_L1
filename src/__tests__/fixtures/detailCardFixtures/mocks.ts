import { AuthState } from "../../../store/auth/types";

interface IDetailCardMockStore {
    auth: Pick<AuthState, 'authUser'>
}

export const mockDetailCard = {
    id: 109,
    title: 'Заголовок новости',
    text: 'Текст новости',
    coverPath: '/images/1694177642093-995302515.jpeg',
    authorId: 214,
    createdAt: '2023-09-08T12:54:02.094Z',
    updatedAt: '2023-09-08T12:54:02.094Z',
    rating: 4,
    commentsCount: 4,
    author: {
      id: 214,
      firstName: null,
      lastName: null,
      email: 'o.priva@mail.ru',
      avatarPath: null,
      createdAt: '2023-09-05T14:57:07.641Z',
      updatedAt: '2023-09-05T14:57:07.641Z',
    },
    tags: [
      {
        id: 62,
        value: '"tag#1","tag#2"',
        createdAt: '2023-09-08T12:54:02.108Z',
        updatedAt: '2023-09-08T12:54:02.108Z',
      },
    ],
};

export const mockAuthUser = {
    avatarPath: null,
    createdAt: '2023-12-20T12:36:58.857Z',
    email: 'm.gavrilova@gmail.com',
    firstName: null,
    id: 2504,
    lastName: null,
    rating: 0,
    updatedAt: '2023-12-20T12:36:58.857Z',
};

export const detailCardForUnauthUserStore: IDetailCardMockStore = {
    auth: {
        authUser: null,
    },
}

export const detailCardForAuthUserStore: IDetailCardMockStore = {
    auth: {
        authUser: mockAuthUser
    }
}
  