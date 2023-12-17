export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|ttf|eot|svg|png)$': 'src/mocks/fileMock.js',
    },
}