import useArticleDashboard from './useArticleDashboard';

import { Link } from 'react-router-dom';
import styles from './article-dashboard.module.css';
import AdminLayout from '../admin-layout';

export default function ArticleDashboard() {
  const { articles } = useArticleDashboard();

  return (
    <AdminLayout>
      <h2>Articles</h2>
      {
        articles.length <= 0 && <p>No articles found</p>
      }

      {
        articles.length > 0 && (
          <table className={ styles[`article-dashboard__table`] }>
            <thead className={ styles[`article-dashboard__table-head`] }>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Has Content</th>
                <th>Edit Article</th>
              </tr>
            </thead>
            <tbody className={ styles[`article-dashboard__table-body`] }>
              {
                articles.map( article => {
                  const material = article.type === 1 ? 'Subject' : article.type === 2 ? 'Topic' : 'Subtopic';
                  return (
                  <tr key={ article.ID_Article }>
                    <td>{ article.ID_Article }</td>
                    <td>{ article.title }</td>
                    <td>{ material }</td>
                    <td>{ article.has_content ? 'Yes' : 'No' }</td>
                    <td>
                      <Link to={`/admin/editor/${ article.ID_Article }`}>Edit</Link>
                    </td>
                  </tr>
                )})
              }
            </tbody>
          </table>
        )
      }
    </AdminLayout>
  )
}
