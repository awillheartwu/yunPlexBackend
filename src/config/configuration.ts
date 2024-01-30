export default () => ({
    scan_interval: process.env.SCAN_INTERVAL || '30',
    song_limit: process.env.SONG_LIMIT || '10',
    download_dir: process.env.DOWNLOAD_DIR || '/mnt/nas',
    phone: process.env.PHONE || 0,
    password: process.env.PASSWORD || '',
    playlist: process.env.PLAYLIST || 0,
    plex_server: process.env.PLEX_SERVER || '',
    plex_port: process.env.PLEX_PORT || 0,
    plex_token: process.env.PLEX_TOKEN || '',
});
