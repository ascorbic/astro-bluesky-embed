import type { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import { AppBskyFeedPost } from "@atproto/api";

export interface Post extends PostView {
  record: AppBskyFeedPost.Record;
}
