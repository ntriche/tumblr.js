declare module 'tumblr.js' {
    type TumblrClientCallback = (err: any, resp: any, rawResp?: string) => void | Promise<any>

    interface TumblrClient {
        userInfo(callback: TumblrClientCallback): void | Promise<any>

        blogAvatar(blogIdentifier: string, size: number, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogAvatar(blogIdentifier: string, size: number, callback: TumblrClientCallback): void | Promise<any>
        blogAvatar(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogAvatar(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        blogDrafts(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogDrafts(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        blogFollowers(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogFollowers(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        blogInfo(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogInfo(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        blogLikes(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogLikes(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        blogPosts(blogIdentifier: string): void | Promise<any>
        blogPosts(blogIdentifier: string, type: string): void | Promise<any>
        blogPosts(blogIdentifier: string, type: string, params: any): void | Promise<any>
        blogPosts(blogIdentifier: string, params: any, callback: TumblrClientCallback): void | Promise<any>
        blogPosts(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>
        blogPosts(blogIdentifier: string, type: string, params: any, callback: TumblrClientCallback): void | Promise<any>

        blogSubmissions(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogSubmissions(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        blogQueue(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        blogQueue(blogIdentifier: string, callback: TumblrClientCallback): void | Promise<any>

        createTextPost(blogIdentifier: string, options: TextPostParams, callback: TumblrClientCallback): void | Promise<any>
        createPhotoPost(blogIdentifier: string, options: PhotoPostParams, callback: TumblrClientCallback): void | Promise<any>
        createQuotePost(blogIdentifier: string, options: QuotePostParams, callback: TumblrClientCallback): void | Promise<any>
        createLinkPost(blogIdentifier: string, options: LinkPostParams, callback: TumblrClientCallback): void | Promise<any>
        createChatPost(blogIdentifier: string, options: ChatPostParams, callback: TumblrClientCallback): void | Promise<any>
        createAudioPost(blogIdentifier: string, options: AudioPostParams, callback: TumblrClientCallback): void | Promise<any>
        createVideoPost(blogIdentifier: string, options: VideoPostParams, callback: TumblrClientCallback): void | Promise<any>

        taggedPosts(tag: string, options: object, callback: TumblrClientCallback): void | Promise<any>
        taggedPosts(tag: string, callback: TumblrClientCallback): void | Promise<any>

        deletePost(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>
        deletePost(blogIdentifier: string, id: number | string, callback: TumblrClientCallback): void | Promise<any>

        editPost(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>

        reblogPost(blogIdentifier: string, params: object, callback: TumblrClientCallback): void | Promise<any>

        userDashboard(params: object, callback: TumblrClientCallback): void | Promise<any>
        userDashboard(callback: TumblrClientCallback): void | Promise<any>

        userLikes(params: object, callback: TumblrClientCallback): void | Promise<any>
        userLikes(callback: TumblrClientCallback): void | Promise<any>

        userFollowing(params: object, callback: TumblrClientCallback): void | Promise<any>
        userFollowing(callback: TumblrClientCallback): void | Promise<any>

        followBlog(params: object, callback: TumblrClientCallback): void | Promise<any>
        followBlog(blogURL: string, callback: TumblrClientCallback): void | Promise<any>

        unfollowBlog(params: object, callback: TumblrClientCallback): void | Promise<any>
        unfollowBlog(blogURL: string, callback: TumblrClientCallback): void | Promise<any>

        likePost(params: object, callback: TumblrClientCallback): void | Promise<any>
        likePost(id: number | string, reblogKey: string, callback: TumblrClientCallback): void | Promise<any>

        unlikePost(params: object, callback: TumblrClientCallback): void | Promise<any>
        unlikePost(id: number | string, reblogKey: string, callback: TumblrClientCallback): void | Promise<any>
        
        getRequest(apiPath: string, paramsOrCallback?: object | null | TumblrClientCallback, callback?: TumblrClientCallback): Request
        postRequest(apiPath: string, paramsOrCallback?: object | null | TumblrClientCallback, callback?: TumblrClientCallback): Request
    }

    function createClient(options: any): TumblrClient;

    interface TextPostParams {
        title?: string
        body: string
    }

    interface PhotoPostParamsWithSource {
        source: string
        caption?: string
    }

    interface PhotoPostParamsWithData {
        data: any | Array<string>
        caption?: string
    }

    interface PhotoPostParamsWithData64 {
        data64: string
        caption?: string
    }

    type PhotoPostParams = PhotoPostParamsWithSource | PhotoPostParamsWithData | PhotoPostParamsWithData64

    interface QuotePostParams {
        quote: string
        source?: string
    }

    interface LinkPostParams {
        title?: string
        url: string
        thumbnail?: string
        excerpt?: string
        author?: string
        description?: string
    }

    interface ChatPostParams {
        title?: string
        conversation: string
    }

    interface AudioPostParamsWithExternalUrl {
        external_url: string
        caption?: string
    }

    interface AudioPostParamsWithData {
        data: any
        caption?: string
    }

    type AudioPostParams = AudioPostParamsWithExternalUrl | AudioPostParamsWithData

    interface VideoPostParamsWithEmbed {
        embed: string
        caption?: string
    }

    interface VideoPostParamsWithData {
        data: any
        caption?: string
    }

    type VideoPostParams = VideoPostParamsWithEmbed | VideoPostParamsWithData
}
