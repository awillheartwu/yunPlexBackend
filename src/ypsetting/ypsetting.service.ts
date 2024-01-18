import { Injectable } from '@nestjs/common';

@Injectable()
export class YpsettingService {
    getypsetting(): any {
        const scanInterval = process.env.SCAN_INTERVAL || '30'; // 默认值为 '30'，如果环境变量不存在
        const songLimit = process.env.SONG_LIMIT || '10'; // 默认值为 '10'，如果环境变量不存在
        const downloadDir = process.env.DOWNLOAD_DIR || '/mnt/nas'; // 默认值为 '/mnt/nas'，如果环境变量不存在
        const phone = process.env.PHONE || ''; // 默认值为空字符串，如果环境变量不存在
        const password = process.env.PASSWORD || ''; // 默认值为空字符串，如果环境变量不存在
        const playlist = process.env.PLAYLIST || ''; // 默认值为空字符串，如果环境变量不存在
        const plexServer = process.env.PLEX_SERVER || ''; // 默认值为空字符串，如果环境变量不存在
        const plexPort = process.env.PLEX_PORT || ''; // 默认值为空字符串，如果环境变量不存在
        const plexToken = process.env.PLEX_TOKEN || ''; // 默认值为空字符串，如果环境变量不存在

        const data = {
            scanInterval,
            songLimit,
            downloadDir,
            phone,
            password,
            playlist,
            plexServer,
            plexPort,
            plexToken,
        };

        return { code: 0, msg: 'ok', data };
    }
}
