import { Controller, Get } from '@nestjs/common';

@Controller('api/download')
export class DownloadController {

  @Get('')
  allDownloads(): any[] {
  }

}
