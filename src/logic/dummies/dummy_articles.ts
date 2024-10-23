import { Article } from '../types/TArticle';

const dummyArticles: Article[] = [
  {
    id_article: 1,
    title: 'Introduction to Algebra',
    img_cover: 'algebra.jpg',
    type: 'subject',
    total_score: 85,
    description: 'A comprehensive introduction to algebra, covering basic concepts and principles.'
  },
  {
    id_article: 2,
    title: 'Advanced Calculus',
    img_cover: 'calculus.jpg',
    type: 'subject',
    total_score: 90,
    description: 'An in-depth exploration of advanced calculus topics, including integrals and derivatives.'
  },
  {
    id_article: 3,
    title: 'Linear Equations',
    img_cover: 'linear_equations.jpg',
    type: 'topic',
    article: true,
    total_score: 75,
    parent_id: 1,
    parent_type: 'subject',
    description: 'Detailed study of linear equations and their applications in various fields.'
  },
  {
    id_article: 4,
    title: 'Differential Equations',
    img_cover: 'differential_equations.jpg',
    type: 'topic',
    article: true,
    total_score: 80,
    parent_id: 2,
    parent_type: 'subject',
    description: 'An examination of differential equations and methods for solving them.'
  },
  {
    id_article: 5,
    title: 'Quadratic Equations',
    img_cover: 'quadratic_equations.jpg',
    type: 'subtopic',
    article: true,
    prev_article: 3,
    total_score: 70,
    parent_id: 3,
    parent_type: 'topic',
    description: 'A focused look at quadratic equations, including methods for solving and graphing them.'
  },
  {
    id_article: 6,
    title: 'Partial Derivatives',
    img_cover: 'partial_derivatives.jpg',
    type: 'subtopic',
    article: true,
    prev_article: 4,
    total_score: 78,
    parent_id: 4,
    parent_type: 'topic',
    description: 'An advanced topic covering partial derivatives and their applications in multivariable calculus.'
  },
];

export default dummyArticles;