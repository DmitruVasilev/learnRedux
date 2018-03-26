import {createSelector} from 'reselect'

const filterGetter = state => state.filters
const articlesGetter = state => state.articles
const idGetter = (state, props) => props.id
const commentsGetter = state => state.comments

export const filtredArticlesSelector = createSelector(filterGetter, articlesGetter, (filters, articles)=>{
  const {selected, dateRange: {from, to}} = filters

  return articles.filter(article => {
    const published = Date.parse(article.date)
    return (!selected.length || selected.includes(article.id)) && (!from||!to || (published> from && published < to))
  })
})

export const commentSelectorFactory=()=> createSelector(commentsGetter, idGetter, (comments, id)=> {
  return comments[id]
})
