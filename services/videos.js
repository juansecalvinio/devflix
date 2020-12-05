const Db = require('./lib/db');

class VideosService {
    constructor() {
        this.collection = 'videos';
        this.db = new Db();
    }

    async getVideos() {
        const videos = await this.db.getAll(this.collection, tags);

        return videos || [];
    }

    async getVideo({ videoId }) {
        const video = await this.db.get(this.collection, videoId);

        return video || {};
    }

    async createVideo({ video }) {
        const createdVideoId = await this.db.create(this.collection, video);
        
        return createdVideoId;
    }

    async updateVideo({ videoId, video }) {
        const updatedVideoId = await this.db.update(this.collection, videoId, video);

        return updatedVideoId;
    }

    async deleteVideo({ videoId }) {
        const deletedVideoId = await this.db.delete(this.collection, videoId);

        return deletedVideoId;
    }
}

module.exports = VideosService;