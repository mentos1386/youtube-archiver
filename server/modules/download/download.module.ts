import { Module } from '@nestjs/common';
import { DownloadController } from './download.controller';

@Module({
  imports: [],
  controllers: [
      DownloadController,
  ],
})
export class ApplicationModule {}
