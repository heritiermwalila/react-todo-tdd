export default {
    get: jest.fn().mockResolvedValue({
        data: {
            results: [
                {
                    gender: 'male',
                    name: {
                        first: 'John',
                        last: 'Smith',
                        title: 'Mr'
                    },
                    picture: {
                        medium: 'https://randomuser.me/api/portraits/med/men/97.jpg'
                    }
                },
                {
                    gender: 'female',
                    name: {
                        first: 'Jean',
                        last: 'Kyle',
                        title: 'Mr'
                    },
                    picture: {
                        medium: 'https://randomuser.me/api/portraits/med/female/96.jpg'
                    }
                },
            ]
        }
    })
}