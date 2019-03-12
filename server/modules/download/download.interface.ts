enum IDownloadTypes {
    'video',
    'music',
}

interface IDownload {
    url: string;
    type: IDownloadTypes;
}