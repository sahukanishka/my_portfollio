const MEDIUM_USERNAME = 'kanishka-sahu';
const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

export async function getMediumPosts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.status !== 'ok') {
      throw new Error('Failed to fetch Medium posts');
    }

    return data.items.map((post: any) => ({
      ...post,
      description: post.description.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...',
      thumbnail: post.thumbnail || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
    }));
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
}