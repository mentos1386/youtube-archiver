# Youtube archiver

Idea is to transform [this script](https://github.com/mentos1386/youtube-playlist-downloader) to a website with nice gui.


#### TODO:
 - [ ] Create simple gui to put playlist in to be downloaded
 - [ ] Make it possible to download single yt vides by link
 - [ ] Monitor playlist for changes and download new videdos
 - [ ] Add options to transform videos to mp3, or to download subtitles, images and other extras.
 - [ ] Add support for whatever other service `yt-downloader` supports
 - [ ] Implement backends to store to.
   - [ ] Local drive
   - [ ] S3
   - [ ] `webdav` - Nextcloud


### Installation
* `npm i`

### Development (Client-side only rendering)
* `npm start` which will run `ng serve`.

### Production (also for testing SSR/Pre-rendering locally)
*`npm run build:ssr && npm run serve:ssr`
  - Compiles your application and spins up a Nest server to serve
your Universal application on `http://localhost:4000`.

*`npm run build:prerender && npm run serve:prerender`
  - Compiles your application and prerenders your
applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
  - **Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser`
folder, rather than the usual `dist`
