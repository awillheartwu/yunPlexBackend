import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Datastore from '@seald-io/nedb';
@Injectable()
export class YpsettingService {
    constructor(private configService: ConfigService) {}
    getypsetting(): any {
        const db = new Datastore({ filename: '../db/env.db', autoload: true });
        console.log('♿️ - YpsettingService - getypsetting - db:', db);
        const data = {
            scan_interval: this.configService.get<number>('scan_interval') ?? process.env.SCAN_INTERVAL ?? '30',
            song_limit: this.configService.get<number>('song_limit') ?? process.env.SONG_LIMIT ?? '10',
            download_dir: this.configService.get<string>('download_dir') ?? process.env.DOWNLOAD_DIR ?? '/mnt/nas',
            phone: this.configService.get<number>('phone') ?? process.env.PHONE ?? '',
            password: this.configService.get<string>('password') ?? process.env.PASSWORD ?? '',
            playlist: this.configService.get<string>('playlist') ?? process.env.PLAYLIST ?? '',
            plex_server: this.configService.get<string>('plex_server') ?? process.env.PLEX_SERVER ?? '',
            plex_port: this.configService.get<number>('plex_port') ?? process.env.PLEX_PORT ?? '',
            plex_token: this.configService.get<string>('plex_token') ?? process.env.PLEX_TOKEN ?? '',
        };
        return { code: 0, msg: 'ok', data };
    }
}
