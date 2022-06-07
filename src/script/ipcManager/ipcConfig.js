

const data = [
    {
        name: 'test',
        event: (event, params) => {
            console.log('执行了event方法', params)
            return params
        }
    },
]

module.exports = data