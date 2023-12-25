import '@testing-library/jest-dom';
import { fireEvent, screen } from "@testing-library/react";
import { paginationData } from './mocks';

export const expectPaginationRendered = () => {
    expect(screen.getAllByRole('button').length).toEqual(paginationData.countPages);

    expect(screen.getAllByRole('button')[0].textContent).toEqual(
        String(paginationData.currentPage)
    );
};

export const expectPageWilIncrease = (container: HTMLElement) => {
    fireEvent.click(container.querySelectorAll('button')[1]);

    expect(paginationData.changePageNumber).toHaveBeenCalledWith(2);
    expect(screen.getAllByRole('button').length).toEqual(paginationData.countPages);
};
