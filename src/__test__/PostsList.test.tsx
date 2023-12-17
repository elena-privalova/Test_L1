import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { NewsData } from '../components/PostCard/types';
import PostsList from '../components/PostsList/PostsList';

const mockPosts: NewsData[] = [
    {
        author: {
            avatarPath: "/images/1702362040808-817995642.png",
            createdAt: "2023-12-11T14:18:19.163Z",
            email: "v.zimovnov@nv.dunice.net",
            firstName: "Виктор",
            id: 2417,
            lastName: "Зимовнов",
            updatedAt: "2023-12-13T13:37:35.410Z"
        },
        authorId: 2417,
        commentsCount: 0,
        coverPath: "/images/1702475131704-574840014.jpeg",
        createdAt: "2023-12-13T13:45:31.706Z",
        id: 968,
        rating: 0,
        tags: [
            {
                createdAt: "2023-08-28T14:52:31.292Z",
                id: 30,
                updatedAt: "2023-08-28T14:52:31.292Z",
                value: "tag#1",
            }
        ],
        text: "Текст новости ЗВ1",
        title: "Загловок новости ЗВ1",
        updatedAt: "2023-12-13T13:45:31.706Z"
    }
];

describe('Posts list component', () => {
    it('Posts list renders', () => {
        render(<PostsList postsArray={mockPosts}/>)

        expect(screen.getByText('Загловок новости ЗВ1'))
            .toBeInTheDocument();
    })
})