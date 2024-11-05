import { TArticle } from "../types/TArticle";

const dummyArticles: TArticle[] = [
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
    total_score: 80,
    parent_id: 2,
    parent_type: 'subject',
    description: 'An examination of differential equations and methods for solving them.'
  },

  {
    id_article: 50,
    title: 'Traka 1',
    img_cover: 'traka.jpg',
    type: 'topic',
    total_score: 80,
    parent_id: 2,
    prev_article: 4,
    parent_type: 'subject',
    description: 'An examination of differential equations and methods for solving them.'
  },
  {
    id_article: 51,
    title: 'Traka 2',
    img_cover: 'traka.jpg',
    type: 'topic',
    total_score: 80,
    parent_id: 2,
    prev_article: 4,
    parent_type: 'subject',
    description: 'An examination of differential equations and methods for solving them.'
  },
  {
    id_article: 52,
    title: 'Traka 3',
    img_cover: 'traka.jpg',
    type: 'topic',
    total_score: 80,
    parent_id: 2,
    prev_article: 4,
    parent_type: 'subject',
    description: 'An examination of differential equations and methods for solving them.'
  },
  {
    id_article: 53,
    title: 'Traka 4',
    img_cover: 'traka.jpg',
    type: 'topic',
    total_score: 80,
    parent_id: 2,
    prev_article: 50,
    parent_type: 'subject',
    description: 'An examination of differential equations and methods for solving them.'
  },
  {
    id_article: 54,
    title: 'Traka 5',
    img_cover: 'traka.jpg',
    type: 'topic',
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
    total_score: 78,
    parent_id: 4,
    parent_type: 'topic',
    description: 'An advanced topic covering partial derivatives and their applications in multivariable calculus.'
  },
  // New entries
  {
    id_article: 7,
    title: 'Probability Theory',
    img_cover: 'probability.jpg',
    type: 'subject',
    total_score: 88,
    description: 'Introduction to the fundamental concepts of probability, random variables, and distributions.'
  },
  {
    id_article: 8,
    title: 'Bayesian Statistics',
    img_cover: 'bayesian_statistics.jpg',
    type: 'topic',
    article: true,
    total_score: 82,
    parent_id: 7,
    parent_type: 'subject',
    description: 'An in-depth look into Bayesian inference and decision-making under uncertainty.'
  },
  {
    id_article: 9,
    title: 'Matrix Algebra',
    img_cover: 'matrix_algebra.jpg',
    type: 'subject',
    total_score: 87,
    description: 'Comprehensive study of matrices, matrix operations, and applications in various fields.'
  },
  {
    id_article: 10,
    title: 'Eigenvalues and Eigenvectors',
    img_cover: 'eigenvalues.jpg',
    type: 'topic',
    article: true,
    total_score: 81,
    parent_id: 9,
    parent_type: 'subject',
    description: 'Study of eigenvalues and eigenvectors, including methods for calculating them.'
  },
  {
    id_article: 11,
    title: 'Statistics',
    img_cover: 'statistics.jpg',
    type: 'subject',
    total_score: 86,
    description: 'Comprehensive overview of statistical methods, including descriptive and inferential statistics.'
  },
  {
    id_article: 12,
    title: 'Descriptive Statistics',
    img_cover: 'descriptive_statistics.jpg',
    type: 'topic',
    article: true,
    total_score: 83,
    parent_id: 11,
    parent_type: 'subject',
    description: 'Introduction to methods for summarizing and describing data.'
  },
  {
    id_article: 13,
    title: 'Linear Programming',
    img_cover: 'linear_programming.jpg',
    type: 'subject',
    total_score: 79,
    description: 'Study of linear programming models and methods for solving optimization problems.'
  },
  {
    id_article: 14,
    title: 'Simplex Method',
    img_cover: 'simplex_method.jpg',
    type: 'topic',
    article: true,
    total_score: 77,
    parent_id: 13,
    parent_type: 'subject',
    description: 'Detailed examination of the Simplex method for solving linear programming problems.'
  },
  {
    id_article: 15,
    title: 'Game Theory',
    img_cover: 'game_theory.jpg',
    type: 'subject',
    total_score: 84,
    description: 'Introduction to game theory, including strategies, payoffs, and Nash equilibrium.'
  },
  {
    id_article: 16,
    title: 'Nash Equilibrium',
    img_cover: 'nash_equilibrium.jpg',
    type: 'topic',
    article: true,
    total_score: 76,
    parent_id: 15,
    parent_type: 'subject',
    description: 'Exploration of Nash equilibrium in non-cooperative games and its applications.'
  },
];

export default dummyArticles;
