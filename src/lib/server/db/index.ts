import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private'
import type { Question } from './types';

const db = new Database(DB_PATH, { verbose: console.log });

export function getQuestions(limit = 50): Question[] {
  const sql = `
  select question_id as questionId
  , question as question
  , parent_id as parentId
from questions
limit $limit  
  `;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all({ limit });
  return rows as Question[];
}

export function getQuestionById(questionId: number): Question[] {
  const sql = `
  select question_id as questionId
  , question as question
  , parent_id as parentId
from questions
where questions.question_id = $questionId  
  `;
  const stmnt = db.prepare(sql);
  const row = stmnt.get({ questionId });
  return row as Question[];
}
