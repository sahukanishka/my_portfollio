const MEDIUM_USERNAME = "kanishka-sahu";
const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  RSS_URL
)}`;
export async function getMediumPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error("Failed to fetch Medium posts");
    }
    return data.items.map((post: any) => {
      const imageMatch = post.content.match(/<img.*?src="(.*?)"/); // Extract first image
      return {
        ...post,
        description:
          post.description.replace(/<[^>]*>?/gm, "").substring(0, 160) + "...",
        thumbnail: post.thumbnail || (imageMatch ? imageMatch[1] : ""),
      };
    });
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}
