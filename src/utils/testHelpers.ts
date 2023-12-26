import { screen } from "@testing-library/react"

export const getElementByTagName = (searchTag: string) =>
    screen.getByText((_, element) => element!.tagName.toLowerCase() === searchTag)

export const getElementsByTagName = (searchTag: string) =>
    screen.getAllByText((_, element) => element!.tagName.toLowerCase() === searchTag)