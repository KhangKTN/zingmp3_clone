import axios from '../axios'

const getHome = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: '/home',
                method: 'get'
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getSongMp3 = id =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/song?id=${id}`,
                method: 'get'
                // data: {id}
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getInfoSong = id =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/infosong?id=${id}`,
                method: 'get'
                // data: {id}
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getPlaylist = id =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/detailplaylist?id=${id}`,
                method: 'get'
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getNewReleaseChart = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/newreleasechart`,
                method: 'get'
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getTop100 = () =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/top100`,
                method: 'get'
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const search = keyword =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/search`,
                method: 'get',
                params: { keyword }
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getArtistSong = artists =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/artistsong?id=${artists}&page=1&count=100`,
                method: 'get'
                // params: {id: artists, page: 1, count: 15}
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getArtistAlbum = artist =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/artist`,
                method: 'get',
                params: { name: artist }
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

const getChart = artist =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                url: `/charthome`,
                method: 'get'
            })
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })

export {
    getHome,
    getSongMp3,
    getInfoSong,
    getPlaylist,
    getNewReleaseChart,
    getTop100,
    search,
    getArtistSong,
    getArtistAlbum,
    getChart
}
