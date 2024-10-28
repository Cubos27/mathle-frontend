export type TArticle = {
  id_article: number,
  title: string,
  img_cover: string,
  type: 'subject' | 'topic' | 'subtopic',
  article?: boolean
  prev_article?: number,
  total_score: number,
  parent_id?: number,
  parent_type?: 'subject' | 'topic' | 'subtopic',
  description?: string
}