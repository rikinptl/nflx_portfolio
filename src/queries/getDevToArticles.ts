export interface DevToArticle {
  title: string;
  link: string;
  description: string;
  runtime: string;
  image?: string;
  publishedAt: string;
}

const RSS_FEED_URL = 'https://dev.to/feed/rikinptl';
const DEVTO_API_URL = 'https://dev.to/api/articles?username=rikinptl&per_page=5';
const TOP_N = 5;

const stripHtml = (html: string): string =>
  html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

const summarize = (text: string, maxLength = 180): string => {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${(lastSpace > 80 ? clipped.slice(0, lastSpace) : clipped).trim()}…`;
};

const estimateRuntime = (text: string): string => {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
};

const extractImage = (html: string): string | undefined => {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
};

const getText = (item: Element, tag: string): string => {
  const node = item.getElementsByTagName(tag)[0];
  return node?.textContent?.trim() ?? '';
};

async function getReadingTimeMap(): Promise<Record<string, number>> {
  try {
    const response = await fetch(DEVTO_API_URL);
    if (!response.ok) return {};
    const articles = (await response.json()) as Array<{
      url: string;
      reading_time_minutes?: number;
    }>;
    return articles.reduce<Record<string, number>>((map, article) => {
      if (article.url && article.reading_time_minutes) {
        map[article.url] = article.reading_time_minutes;
      }
      return map;
    }, {});
  } catch {
    return {};
  }
}

export async function getDevToArticles(limit = TOP_N): Promise<DevToArticle[]> {
  const [response, readingTimes] = await Promise.all([
    fetch(RSS_FEED_URL, {
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    }),
    getReadingTimeMap(),
  ]);

  if (!response.ok) {
    throw new Error(`Failed to load Dev.to feed (${response.status})`);
  }

  const xmlText = await response.text();
  const doc = new DOMParser().parseFromString(xmlText, 'application/xml');

  if (doc.querySelector('parsererror')) {
    throw new Error('Could not parse Dev.to RSS feed');
  }

  const items = Array.from(doc.querySelectorAll('channel > item')).slice(0, limit);

  return items.map((item) => {
    const title = getText(item, 'title');
    const link = getText(item, 'link');
    const rawDescription = getText(item, 'description');
    const plainText = stripHtml(rawDescription);
    const publishedAt = getText(item, 'pubDate');
    const apiMinutes = readingTimes[link];

    return {
      title,
      link,
      description: summarize(plainText),
      runtime: apiMinutes ? `${apiMinutes} min` : estimateRuntime(plainText),
      image: extractImage(rawDescription),
      publishedAt,
    };
  });
}
