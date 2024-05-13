import getNowPlaying from '@/lib/getNowPlaying'

export default async (req, res) => {
  try {
    const response = await getNowPlaying()

    if (
      response.status === 204 ||
      response.status > 400 ||
      response?.data?.item === null ||
      !response.data
    ) {
      return res.status(200).json({ isPlaying: false })
    }

    const song = response.data

    if (song.is_playing === false) {
      return res.status(200).json({ isPlaying: false })
    }

    const isPlaying = song.is_playing
    const name = song.item.name
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    const album = song.item.album.name
    const albumImage = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    return res.status(200).json({
      isPlaying,
      name,
      artist,
      album,
      albumImage,
      songUrl
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      isPlaying: false,
      message: 'Error getting Now Playing from Spotify'
    })
  }
}
