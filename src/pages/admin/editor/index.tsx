import useEditor from "./useEditor";

import styles from "./editor.module.css"
import AdminLayout from "../admin-layout"
import MainButton from "../../../components/main-button";

import {
  TITLE_LABEL,
  TITLE_NAME,
  TITLE_TITLE,
  TYPE_LABEL,
  TYPE_NAME,
  TYPE_TITLE,
  HAS_CONTENT_LABEL,
  HAS_CONTENT_NAME,
  HAS_CONTENT_TITLE,
  IMAGE_COVER_LABEL,
  IMAGE_COVER_NAME,
  IMAGE_COVER_TITLE,
  TOTAL_SCORE_LABEL,
  TOTAL_SCORE_NAME,
  TOTAL_SCORE_TITLE,
  DESCRIPTION_LABEL,
  DESCRIPTION_NAME,
  DESCRIPTION_TITLE,
  PARENT_ID_LABEL,
  PARENT_ID_NAME,
  PARENT_ID_TITLE,
  PARENT_TYPE_LABEL,
  PARENT_TYPE_NAME,
  PREVIOUS_ARTICLE_ID_LABEL,
  PREVIOUS_ARTICLE_ID_NAME,
  PREVIOUS_ARTICLE_ID_TITLE,
  CONTENT_LABEL,
  CONTENT_NAME,
  CONTENT_TITLE,
  SAVE_BUTTON
} from "./editor-text"

export default function Editor() {
  const {
    isSaving,
    saved,
    hasContent,
    type,
    parentType,
    description,
    title,
    imageCover,
    content,
    totalScore,
    parent,
    previousArticle,

    onSubmit,

    setTitle,
    setType,
    setHasContent,
    setImageCover,
    setTotalScore,
    setDescription,
    setParent,
    setPreviousArticle,
    setContent
  } = useEditor();
  return (
    <AdminLayout>
      <h2 className={ styles[`editor__title`] }>Editor</h2>
      <form action="" className={ styles[`editor__form`] } onSubmit={ onSubmit }>
        <section className={ styles[`editor__this-article`] }>
          <h4>This Article</h4>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ TITLE_NAME }>{ TITLE_LABEL }</label>
            <input 
              name={ TITLE_NAME } 
              type="text"
              title={ TITLE_TITLE }
              required
              onChange={ setTitle }
              value={ title }
            />
          </section>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ TYPE_NAME }>{ TYPE_LABEL }</label>
            <select 
              name={ TYPE_NAME } 
              title={ TYPE_TITLE } 
              required
              onChange={ setType }
              >
              <option value="1" selected={ type === 1 }>Subject</option>
              <option value="2" selected={ type === 2 }>Topic</option>
              <option value="3" selected={ type === 3 }>Subtopic</option>
            </select>
          </section>
          
          { /* Only show this if the type is not a subject */
            type > 1 && (
            <section className={ styles[`editor__input-container`] }>
              <label htmlFor={ HAS_CONTENT_NAME } title={ HAS_CONTENT_TITLE }>{ HAS_CONTENT_LABEL }</label>
              <input 
                name={ HAS_CONTENT_NAME } 
                type="checkbox" 
                title={ HAS_CONTENT_TITLE }
                onChange={ setHasContent }
              />
            </section>
            )
          }  
          

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ IMAGE_COVER_NAME }>{ IMAGE_COVER_LABEL }</label>
            <input 
              name={ IMAGE_COVER_NAME } 
              type="text" 
              title={ IMAGE_COVER_TITLE }
              onChange={ setImageCover }
              value={ imageCover }
            />
          </section>

          <section className={ styles[`editor__input-container`] }>
            <label htmlFor={ TOTAL_SCORE_NAME }>{ TOTAL_SCORE_LABEL }</label>
            <input 
              name={ TOTAL_SCORE_NAME } 
              type="number" 
              title={ TOTAL_SCORE_TITLE }
              required
              onChange={ setTotalScore }
              value={ totalScore }
            />
          </section>

          <section className={ `${ styles[`editor__content`] } ${ styles[`.editor__input-container--textarea`]}` }>
            <label htmlFor={ DESCRIPTION_NAME }>{ DESCRIPTION_LABEL }</label>
            <textarea 
              name={ DESCRIPTION_NAME} 
              title={ DESCRIPTION_TITLE }
              required
              onChange={ setDescription }
              value={ description }
            ></textarea>
          </section>
        </section>

        { /* Only show this if the type is not a subject */
            type > 1 &&
          <section className={ styles[`editor__related-articles`] }>
            <h4>Related Articles</h4>

            <section className={ styles[`editor__input-container`] }>
              <label htmlFor={ PARENT_ID_NAME }>{ PARENT_ID_LABEL }</label>
              <input 
                name={ PARENT_ID_NAME } 
                type="number" 
                title={ PARENT_ID_TITLE } 
                required
                onChange={ setParent }
                value={ parent }
              />
            </section>
              
            <div className={ styles[`editor__input-container`] }>
              <label htmlFor={ PARENT_TYPE_NAME }>{ PARENT_TYPE_LABEL }:</label>
              <p>
                {
                  parentType === 1 ? "Subject" : "Topic"
                }
              </p>
            </div>

            <section className={ styles[`editor__input-container`] }>
              <label htmlFor={ PREVIOUS_ARTICLE_ID_NAME }>{ PREVIOUS_ARTICLE_ID_LABEL }</label>
              <input 
                type="number"
                name={ PREVIOUS_ARTICLE_ID_NAME }
                title={ PREVIOUS_ARTICLE_ID_TITLE }
                onChange={ setPreviousArticle }
                value={ previousArticle }
              />
            </section>

          </section>
        }

        { /** Shows if the topic has content or if the article is type subtopic */
          ( hasContent || type > 2 ) && <>
            <section className={ styles[`editor__content`] }>
              <h4>Content</h4>
              <section className={ `${ styles[`editor__content`] } ${ styles[`.editor__input-container--textarea`]}`}>
                <label htmlFor={ CONTENT_NAME }>{ CONTENT_LABEL}</label>
                <textarea 
                  name={ CONTENT_NAME } 
                  title={ CONTENT_TITLE } 
                  required
                  onChange={ setContent }
                  value={ content }
                ></textarea>
              </section>
            </section>
          </>
        }

        <section>
          <MainButton 
            type="submit"
          >
            { SAVE_BUTTON }
          </MainButton>
        </section>
      </form>
    </AdminLayout>
  )
}
