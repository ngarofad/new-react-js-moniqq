// eslint-disable-next-line import/no-anonymous-default-export
export default (client) => ({
    fetchTweetData: ({ provider, location, startDate, endDate }) => client.get(`http://localhost:5000/api/fix_tweet/provider/${provider}/lokasi/${location}/periode/${startDate}/${endDate}`),
    fetchSentimenData: ({ provider, location, startDate, endDate }) => client.get(`http://localhost:5000/api/fix_sentimen/provider/${provider}/lokasi/${location}/periode/${startDate}/${endDate}`),
    fetchKataData: ({ provider, location, startDate, endDate }) => client.get(`http://localhost:5000/api/fix_kata/provider/${provider}/lokasi/${location}/periode/${startDate}/${endDate}`),
    cobaPred: ({ asolole }) => client.get(`http://localhost:5000/api/pred/${asolole}`),
})