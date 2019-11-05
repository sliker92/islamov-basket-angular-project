export interface Article {
  id: number,
  title: string,
  tags: string,
  description?: string,
  summary: string,
  publisher: string,
  timestamp: number,
  image?: string
}
